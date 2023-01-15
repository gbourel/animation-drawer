(function(){

  window.updateDrawer = function(elt) {
    const drawer = document.querySelector('animation-drawer');
    drawer.setAttribute('type', elt.value);
  };

})();