(function(){


  window.onload = () => {
    let last = 'transports';
    const container = document.querySelector('.drawer');
    const drawer = document.querySelector('animation-drawer');
    const html = document.getElementById('sample');

    const components = {
    };

    function updateDemo(elt) {
      const component = components[elt.value];
      const src = component ? component.script : 'animation-drawer.js'
      // const script = `http://127.0.0.1:8080/${src}`;
      const script = `https://gbourel.github.io/animation-drawer/${src}`;
      const mark = component ? component.tag : `<animation-drawer type="${elt.value}"></animation-drawer>`;
      html.innerText = `<script src="${script}"></script>\n\n${mark}`;

      container.removeChild(container.children[0]);
      if (component) {
        import(script).then((module) => {
          const element = new module.element();
          container.appendChild(element);
        });
      } else {
        container.appendChild(drawer);
        drawer.setAttribute('type', elt.value);
      }
      if(window.localStorage) {
        localStorage.setItem('animation_demo_last', elt.value);
      }
    };

    const select = document.getElementById('anim-select');
    for (let i in {...components, ...drawer.getAnimations()}) {
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

    updateDemo(select);
    select.addEventListener('change', (evt) => {
      const elt = evt.target;
      updateDemo(elt);
    });

    console.info('AnimationDrawer demo started.')
  };
})();