/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Helper Functions
*/

const addNavigationItem = section => {
    /* create li element inside the empty ul
    * add classes, text and ids to each section
    */
    const listItem = document.createElement('li');
    listItem.classList.add('menu__link');
    listItem.textContent = section.dataset.nav;
    listItem.setAttribute('data-id', section.id);

    return listItem;

}

const buildNavigationMenu = (sections, navigationMenu) => {
    // build the navigation menu
    sections.forEach(function(section) {
        const styledSection = addNavigationItem(section);
        navigationMenu.appendChild(styledSection);
    })
}

const navClick = event => {
    const sectionClicked = document.querySelector(`#${event.target.dataset.id}`);
    sectionClicked.scrollIntoView({behavior: 'smooth'});
}

const sectionInView = section => {
    // check if the section is in viewport
    const whereRu = section.getBoundingClientRect();
    return (
        whereRu.top <= 100 &&
        whereRu.bottom >= 90)
}

const setActive = section => {
    // set active section
    section.classList.add('your-active-class');
}

const removeActive = section => {
    // remove active section
    section.classList.remove('your-active-class');
}

const highlight = sections => {
    // active or inactive section
    sections.forEach(function(section) {
        if (sectionInView(section)) {
            setActive(section);
        } else {
            removeActive(section);
        }
    })
}

const displayArrow = () => {
    const arrow = document.getElementById('arrow-up');
    if (window.scrollY > 300) {
        arrow.classList.remove('hide');
    } else {
        arrow.classList.add('hide');
    }
}

/**
 * Main Function
*/

const init = () => {
    // start everything
    const sections = document.querySelectorAll('section');
    const navigationMenu = document.querySelector('#navbar__list')

    // build menu
    buildNavigationMenu(sections, navigationMenu);

    // begin events
    navigationMenu.addEventListener('click', navClick);
    document.addEventListener('scroll', () => {
        highlight(sections); 
        displayArrow();
    });

}



// Start the app
init()

