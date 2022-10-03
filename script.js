function scrollToId(id) {
    const element = document.querySelector('#' + id);
    element.scrollIntoView({behavior: 'smooth'}, true);
}

function scrollToStart() {
    window.scrollTo(0, 0);
}

function scrollToWho() {
    window.innerWidth >= 1440? window.scrollTo(0, 320) : 
    window.innerWidth >= 1024? window.scrollTo(0, 338) :
    window.innerWidth >= 768? window.scrollTo(0, 332) :
    window.innerWidth >= 425? window.scrollTo(0, 400) :
    window.innerWidth >= 375? window.scrollTo(0, 396) : window.scrollTo(0, 395);
}

function scrollToObj() {
    window.innerWidth >= 1440? window.scrollTo(0, 1087) : 
    window.innerWidth >= 1024? window.scrollTo(0, 1290) :
    window.innerWidth >= 768? window.scrollTo(0, 1700) :
    window.innerWidth >= 425? window.scrollTo(0, 2442) :
    window.innerWidth >= 375? window.scrollTo(0, 2566) : window.scrollTo(0, 3096);
}