let last_scroll_top = 0; 
export const changeNavbarOnScroll = (header) => {
    const current_scroll = window.scrollY;

    if (current_scroll > last_scroll_top) {
        header.classList.remove('shown');
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
        header.classList.add('shown');
    }

    if (current_scroll === 0) {
        header.classList.remove('hidden');
        header.classList.remove('shown');
    }

    last_scroll_top = current_scroll <= 0 ? 0 : current_scroll;
}

function activateScrollAnimations () {
    const data_animate = document.querySelectorAll('[data-animate]');

    for (let i = 0; i < data_animate.length; i++) {
        const current_element = data_animate[i];
        current_element.setAttribute('data-animate', 'true');
    }
}