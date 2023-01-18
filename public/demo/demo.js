(function(){

  window.updateDrawer = function(elt) {
    const drawer = document.querySelector('animation-drawer');
    drawer.setAttribute('type', elt.value);
    if(window.localStorage) {
      localStorage.setItem('animation_demo_last', elt.value);
    }
  };

  window.onload = () => {
    let last = 'plane_moving';
    const drawer = document.querySelector('animation-drawer');

    const select = document.getElementById('anim-select');
    for (let i in drawer.getAnimations()) {
      let opt = document.createElement('option');
      opt.value = i;
      opt.textContent = i;
      select.appendChild(opt);
    }

    if(window.localStorage) {
      last = localStorage.getItem('animation_demo_last');
    }
    select.value = last;
    drawer.setAttribute('type', last);
  };
})();