import { changeNavbarOnScroll } from './modules/modules.js';

(() => {
    document.addEventListener('DOMContentLoaded', function () {
        const header = document.querySelector('.page-header');
        window.onscroll = () => changeNavbarOnScroll(header);
    });
})()