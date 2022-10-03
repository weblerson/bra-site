setInterval(() => {
    const navBar = document.querySelector('#hiddennav');

    if (window.innerWidth <= 440) {
        navBar.className = 'navbar navbar-expand-lg bg-light';

        return;
    }

    navBar.className = 'navbar hidden navbar-expand-lg bg-light'
}, 100);