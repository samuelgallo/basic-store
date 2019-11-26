;(function() {
  'use strict'
  window.onload = function() {
    feather.replace();

    if(document.querySelector('.sidebar')){
      document.querySelector('a.nav-link[href*="'+ window.location.pathname+'"]').classList.add('active');
    }
    
    const copyYear = new Date();
    document.querySelector('.copyright-year').innerText =copyYear.getFullYear();
  };
  
})();