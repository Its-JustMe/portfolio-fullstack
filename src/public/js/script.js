import * as modules from './modules/modules.js';

(() => {
    document.addEventListener('DOMContentLoaded', function () {
        modules.activateScrollAnimations();

        const header = document.querySelector('.page-header');

        modules.mobileMenuHandler(header);

        window.onscroll = () => {
            modules.changeNavbarOnScroll(header);
            modules.animateOnScroll('animar');
        };
    });
})();