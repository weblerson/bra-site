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

function scrollToPremens() {
    window.innerWidth >= 1440? window.scrollTo(0, 1100) : 
    window.innerWidth >= 1024? window.scrollTo(0, 1250) :
    window.innerWidth >= 768? window.scrollTo(0, 1758) :
    window.innerWidth >= 425? window.scrollTo(0, 2496) :
    window.innerWidth >= 375? window.scrollTo(0, 2781) : window.scrollTo(0, 3141);
}

function scrollToTorreifer() {
    window.innerWidth >= 1440? window.scrollTo(0, 1537) : 
    window.innerWidth >= 1024? window.scrollTo(0, 2006) :
    window.innerWidth >= 768? window.scrollTo(0, 2484) :
    window.innerWidth >= 425? window.scrollTo(0, 3582) :
    window.innerWidth >= 375? window.scrollTo(0, 4056) : window.scrollTo(0, 4555);
}