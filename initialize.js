setInterval(() => {
    const navBar = document.querySelector('#navbar');

    if (window.innerWidth <= 440) {
        navBar.className = 'navbar navbar-expand-lg bg-light';

        return;
    }

    navBar.className = 'navbar fixed-top navbar-expand-lg bg-light'
}, 100);