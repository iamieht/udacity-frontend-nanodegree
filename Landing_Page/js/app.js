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
function addNavigationItem(section) {
    /* create li element inside the empty ul
    * add classes, text and ids to each section
    */
    const listItem = document.createElement('li');
    listItem.classList.add('menu__link');
    listItem.textContent = section.dataset.nav;
    listItem.setAttribute('data-id', section.id);

    return listItem;
}

function buildNavigationMenu(sections, navigationMenu) {
    // build the navigation menu
    sections.forEach(function(section) {
        const styledSection = addNavigationItem(section);
        navigationMenu.appendChild(styledSection);
    })
    
}

function navClick(event) {
    const sectionClicked = document.querySelector(`#${event.target.dataset.id}`);
    sectionClicked.scrollIntoView({behavior: 'smooth'});
}

function sectionInView(section) {
    // check if the section is in viewport
    const whereRu = section.getBoundingClientRect();
    return (
        whereRu.top <= 100 &&
        whereRu.bottom >= 90)
}

function setActive(section) {
    // set active section
    section.classList.add('your-active-class');
}

function removeActive(section) {
    // remove active section
    section.classList.remove('your-active-class');
}

function highlight(sections) {
    // active or inactive section
    sections.forEach(function(section) {
        if (sectionInView(section)) {
            setActive(section);
        } else {
            removeActive(section);
        }
    })
}
/**
 * Main Function
 * 
*/

function init() {
    // start everything
    const sections = document.querySelectorAll('section');
    const navigationMenu = document.querySelector('#navbar__list')

    // build menu
    buildNavigationMenu(sections, navigationMenu);

    // begin events
    navigationMenu.addEventListener('click', navClick);
    document.addEventListener('scroll', function() {highlight(sections)});
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event





// Scroll to section on link click

// Set sections as active

// Start the app
init()

