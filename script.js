function scrollToId(id) {
    const element = document.querySelector('#' + id);
    element.scrollIntoView({behavior: 'smooth'}, true);
}