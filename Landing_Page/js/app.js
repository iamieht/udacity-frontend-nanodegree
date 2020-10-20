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
 * Define Global Variables
 * 
*/


/**
 * Helper Functions
 * 
*/
function addNavigationItem(section) {
    // add classes, ids to each section
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

/* Add Event Listeners
*
*
*/
function setEvents(element, eventType) {
    //addEventListeners
}

/**
 * Main Function
 * 
*/

function init() {
    // start everything
    const sections = document.querySelectorAll('section');
    const navigationMenu = document.querySelector('#navbar__list')
    buildNavigationMenu(sections, navigationMenu);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * Begin Events
 * 
*/

// Build menu


// Scroll to section on link click

// Set sections as active

// Start the app
init()

