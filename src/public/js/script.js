import { changeNavbarOnScroll } from './modules/modules.js';

(() => {
    document.addEventListener('DOMContentLoaded', function () {
        window.onscroll = () => changeNavbarOnScroll(document.querySelector('.page-header'));
    });
})()