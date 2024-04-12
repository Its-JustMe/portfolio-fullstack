import * as modules from './modules/modules.js';

(() => {
    document.addEventListener('DOMContentLoaded', function () {
        modules.activateScrollAnimations();

        window.onscroll = () => {
            modules.changeNavbarOnScroll(document.querySelector('.page-header'));
            modules.animateOnScroll('animar');
        };
    });
})();