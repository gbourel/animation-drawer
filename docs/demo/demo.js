(function(){

  window.onload = () => {
    let last = 'transports';
    const drawer = document.querySelector('animation-drawer');
    const html = document.getElementById('sample');

    function updateDrawer(elt) {
      drawer.setAttribute('type', elt.value);
      if(window.localStorage) {
        localStorage.setItem('animation_demo_last', elt.value);
      }
    };
    function updateHtml(elt) {
      const script = `<script src="https://gbourel.github.io/animation-drawer/animation-drawer.js"></script>`;
      html.innerText = `${script}\n\n<animation-drawer type="${elt.value}"></animation-drawer>`;
    }

    const select = document.getElementById('anim-select');
    for (let i in drawer.getAnimations()) {
      let opt = document.createElement('option');
      opt.value = i;
      opt.textContent = i;
      select.appendChild(opt);
    }

    if(window.localStorage) {
      let val = localStorage.getItem('animation_demo_last');
      if (val) { last = val; }
    }
    select.value = last;
    drawer.setAttribute('type', last);

    updateHtml(select);
    select.addEventListener('change', (evt) => {
      const elt = evt.target;
      updateDrawer(elt);
      updateHtml(elt);
    });

    console.info('AnimationDrawer demo started.')
  };
})();