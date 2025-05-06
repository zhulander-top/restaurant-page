import loadHomePage from './homepage.js';
import loadMenuPage from './menupage.js';
import loadAboutPage from './aboutpage.js';
import "./styles.css";

document.querySelector('button:nth-child(1)').addEventListener('click', loadHomePage);
document.querySelector('button:nth-child(2)').addEventListener('click', loadMenuPage);
document.querySelector('button:nth-child(3)').addEventListener('click', loadAboutPage);
loadHomePage();