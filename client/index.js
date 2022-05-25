/* eslint-disable no-console */

/* global M */

// incorporando estilos a mi bundle
import './styles/mystyle.css';

/* Inicializando elementos de materializecss */
document.addEventListener('DOMContentLoaded', () => {
  /* Iniciailizando los sideNavas */
  // Obteniendo la referencia de la barra de navegacion
  // lateral
  const sideNavs = document.querySelectorAll('.sidenav');
  // eslint-disable-next-line no-undef
  M.Sidenav.init(sideNavs);

  /* Inicializando los dropdown */
  const dropdowns = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(dropdowns);
});
