import 'https://cdn.jsdelivr.net/npm/chart.js';

const IMG = 'https://gbourel.github.io/animation-drawer/animations/img';

const urlArgs = new URLSearchParams(window.location.search);

const T_MIN = urlArgs.has('T_MIN') ? parseInt(urlArgs.get('T_MIN')) : 0;
const T_MAX = urlArgs.has('T_MAX') ? parseInt(urlArgs.get('T_MAX')) : 50;
const T_STEP = 100; // température au centième de degré
const VCC = urlArgs.has('VCC') ? parseFloat(urlArgs.get('VCC')) : 5;
const BITS = urlArgs.has('BITS') ? parseInt(urlArgs.get('BITS')) : 3;
const SAMPLING_RATE = urlArgs.has('SAMPLING_RATE') ? parseInt(urlArgs.get('SAMPLING_RATE')) : 1;
const MAX_PTS = urlArgs.has('MAX_PTS') ? parseInt(urlArgs.get('MAX_PTS')) : 10;

class ADCExplainer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
    <div class="adc-container">
      <div class="temperature">
        <div class="label">
          <strong>0. Température réelle</strong><br>
          <span id="tempValue">0°C</span>
        </div>
        <div class="slider-container">
          <input type="range" id="temperatureSlider" min="0" max="100" value="0" orient="vertical">
          <div class="thermometer">
            <div class="mercury" id="mercury"></div>
            <div class="labels">
              <span id="tmax_lbl"></span>
              <span id="tmid_lbl"></span>
              <span id="tmin_lbl"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="voltage">
        <div class="label">
          <strong>1. Tension mesurée </strong> <span id="analogVoltage">0V</span>
        </div>
        <img src="img/sensor_v.png" alt="Temp sensor">
      </div>
      <div class="graph-container">
        <strong>2. Conversion Analogique ⇒ Numérique</strong>
        <div class="graph">
          <canvas id="lineChart"></canvas>
        </div>
      </div>
      <div class="digital-output">
        <div class="label">
          <strong>3. Résultat numérique :</strong><br>
        </div>
        <div class="result">
          <div>
            <strong>Sortie Numérique :</strong> <span id="digitalValue">0</span>
            <div class="compute">(décimale <span id="decimalValue">0</span>)</div>
          </div>
          <div>
            <strong>Température affichée : </strong><br>
            <span id="finalValue">0</span>°C <br>
            <span class="compute">calcul:</span><br>
            <span id="calculation" class="compute"></span>
          </div>
        </div>
      </div>
    </div>
    `;
    const style = document.createElement('style');
    style.textContent = `
      .adc-container {
        display: flex;
        font-family: Arial, sans-serif;
        max-width: 920px;
        margin: 0 auto;
        padding: 1rem;
        text-align: center;
        color: #555;
        user-select: none;
      }
      .adc-container .slider-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 20px;
      }
      .adc-container > div {
        padding: 10px;
        border-top: 1px solid #777;
        border-bottom: 1px solid #777;
        border-radius: 5px;
      }
      .adc-container .temperature {
        width: 128px;
        border-left: 1px solid #777;
        background-color: #e0f7fa;
      }
      .adc-container .thermometer {
        width: 50px;
        height: 200px;
        background-color: #f1f1f1;
        border-radius: 25px;
        position: relative;
        overflow: hidden;
      }
      .adc-container .thermometer .mercury {
        width: 100%;
        background-color: red;
        position: absolute;
        bottom: 0;
        transition: height 0.3s ease;
      }
      .adc-container .slider-container input[type="range"] {
        -webkit-appearance: slider-vertical;
        width: 10px;
        height: 150px;
      }
      .adc-container .thermometer .labels {
        left: 60px;
        top: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .adc-container .thermometer .labels span {
        font-size: 12px;
        color: #555;
      }
      .adc-container .voltage {
        width: 128px;
        background: #effcdc;
      }
      .adc-container .voltage img {
        height: 140px;
        margin: 48px 0;
      }
      .adc-container .graph-container .graph {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .adc-container .graph-container canvas {
        margin-top: 20px;
        width: 100%;
        height: 400px;
      }
      .adc-container .digital-output {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 128px;
        border-right: 1px solid #777;
        background-color: #fff3e0;
      }
      .adc-container .digital-output .result {
        display: flex;
        flex-direction: column;
        flex-grow: 2;
        justify-content: space-evenly;
      }
      .adc-container .compute {
        font-size: small;
        font-family: monospace;
      }
      @media (max-width: 900px) {
        .adc-container {
          flex-wrap: wrap;
          justify-content: center;

          div, .temperature {
            border: none;
            margin: .4rem .1rem;
          }
          .digital-output {
            border: none;
            width: 100%;
          }
        }
      }

    `;
    shadow.appendChild(style);

    this.maxDataPoints = MAX_PTS; // Nombre maximal de points affichés
    this.voltageData = Array(this.maxDataPoints).fill(0); // Stocke les valeurs de tension
    this.digitalData = Array(this.maxDataPoints).fill(0); // Stocke les valeurs numériques
    this.timeLabels = Array(this.maxDataPoints); // Stocke les étiquettes de temps
  }

  connectedCallback() {
    const slider = this.shadowRoot.getElementById('temperatureSlider');
    const tempValue = this.shadowRoot.getElementById('tempValue');
    const analogVoltage = this.shadowRoot.getElementById('analogVoltage');
    const digitalValue = this.shadowRoot.getElementById('digitalValue');
    const decimalValue = this.shadowRoot.getElementById('decimalValue');
    const finalValue = this.shadowRoot.getElementById('finalValue');
    const calculation = this.shadowRoot.getElementById('calculation');
    const mercury = this.shadowRoot.getElementById('mercury');

    slider.max = (T_MAX-T_MIN) * T_STEP;
    tempValue.textContent = `${T_MIN}°C`;
    digitalValue.textContent = '0'.padStart(BITS, '0');
    this.shadowRoot.getElementById('tmax_lbl').textContent = `${T_MAX}°C`;
    this.shadowRoot.getElementById('tmid_lbl').textContent = `${parseInt(T_MAX+T_MIN)/2}°C`;
    this.shadowRoot.getElementById('tmin_lbl').textContent = `${T_MIN}°C`;
    if (VCC === 5) {
      this.shadowRoot.querySelector('.voltage img').src = `${IMG}/sensor.png`;
    } else if (VCC === 3.3) {
      this.shadowRoot.querySelector('.voltage img').src = `${IMG}/sensor3.png`;
    }

    // Initialiser le graphique avec Chart.js
    const ctx = this.shadowRoot.getElementById('lineChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.timeLabels,
        datasets: [
        {
          label: 'Tension (V)',
          data: this.voltageData,
          borderColor: '#4CAF50',
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
          borderWidth: 2,
          pointStyle: false,
          fill: true,
          yAxisID: 'y',
        },
        {
          label: 'Valeur Numérique',
          data: this.digitalData,
          borderColor: '#FF5733',
          backgroundColor: 'rgba(255, 87, 51, 0.2)',
          borderWidth: 2,
          fill: false,
          stepped: true,
          yAxisID: 'y1',
        }
      ]
    },
    options: {
      responsive: true,
      animation: {
        duration: Math.min(800, parseInt(1000/SAMPLING_RATE)),
        y: {
          duration: 0
        }
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Tension (Volts)'
          },
          min: 0,
          max: VCC
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',

          grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
            min: 0,
            max: 2**BITS
          },
        }
      }
    });


    slider.addEventListener('input', () => {
      const temperature = slider.value / T_STEP;
      tempValue.textContent = `${+(temperature+T_MIN).toFixed(3)}°C`;

      const voltage = (temperature / (T_MAX-T_MIN)) * VCC;
      analogVoltage.textContent = `${voltage.toFixed(2)}V`;

        // Mettre à jour la hauteur et couleur du mercure dans le thermomètre
      const red = (temperature / (T_MAX-T_MIN)) * 255;
      const blue = 255 - red;
      mercury.style.backgroundColor = `rgb(${red}, 0, ${blue})`;
      const mercuryHeight = (temperature / (T_MAX-T_MIN)) * 100;
      mercury.style.height = `${mercuryHeight}%`;
    });

    // Mettre à jour le graphique toutes les secondes (1 Hz)
    setInterval(() => {
      const temperature = slider.value / T_STEP;
      const voltage = (temperature / (T_MAX-T_MIN)) * VCC;
      const maxVal = (2**BITS) - 1;
      const quantizedValue = Math.round((voltage / VCC) * maxVal);
      const binaryOutput = quantizedValue.toString(2).padStart(BITS, '0');

      digitalValue.textContent = binaryOutput;
      decimalValue.textContent = quantizedValue;
      finalValue.textContent = +(quantizedValue * ((T_MAX-T_MIN)/maxVal) + T_MIN).toFixed(3);
      let calcStr = `${quantizedValue}`;
      if (T_MIN == 0) {
        calcStr += `×${T_MAX} / (2<sup>${BITS}</sup>-1)`;
      } else if (T_MIN < 0) {
        calcStr += `×(${T_MAX}${T_MIN}) / (2<sup>${BITS}</sup>-1) ${T_MIN}`;
      } else if (T_MIN > 0) {
        calcStr += `×${T_MAX} / (2<sup>3</sup>-1)`;
      }
      calculation.innerHTML = `${calcStr}`;

      this.voltageData.push(voltage);
      this.digitalData.push(quantizedValue);
      this.timeLabels.push(new Date().toLocaleTimeString());

      chart.update();

      if (this.voltageData.length > this.maxDataPoints) {
        this.voltageData.shift();
        this.digitalData.shift();
        this.timeLabels.shift();
      }

      chart.update();

    }, parseInt(1000 / SAMPLING_RATE));
  }
}

customElements.define('adc-explainer', ADCExplainer);

export const element = ADCExplainer;
export const draw = null;
