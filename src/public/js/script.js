import { changeNavbarOnScroll } from './modules/modules.js';

(() => {
    alert(data.hero.name)
    document.addEventListener('DOMContentLoaded', function () {
        window.onscroll = () => changeNavbarOnScroll(document.querySelector('.page-header'));
    });
})()