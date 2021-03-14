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
let sections; 
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Create new sections
function createSections(number) {
	console.log(number);
	let main = document.getElementsByTagName("main")[0].innerHTML;
	
	for (i = 0; i < number; i++) {
		let sectionHtml = '<section id="section'+[i+4]+'" data-nav="Section '+[i+4]+'"><div class="landing__container"><h2>Section '+[i+4]+'</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p></div></section>';
		main += sectionHtml;
		console.log(main);
	};
	document.getElementsByTagName("main")[0].innerHTML = main;
	sections = Array.from(document.getElementsByTagName('section'));
}

// Create nav elements
function createNav() {
	let menuItem = '';
	sections.forEach(function(section) {
		menuItem += '<li> <a class="menu__link" href="#'+ section.id +'">' + section.dataset.nav + '</a></li>';
	}); 
	document.getElementById("navbar__list").innerHTML = menuItem;
}

// create scroll function
function smoothScroll(){
	const htmlElement = document.querySelector('html');
	htmlElement.style["scroll-behavior"] = 'smooth';
}

// set section active
function setActive(activeSection) {
	sections.forEach(function(section) {
		section.classList.remove("your-active-class");
	});
	activeSection.setAttribute("class", "your-active-class");
}

// check if section is in viewport
// Src: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
function inViewport(secView) {
	// Get the size of the element and its position 
	// relative to the viewport
	const view = secView.getBoundingClientRect();
	// If the element is in the viewport, return True
	// Otherwise, return False
	return (
		view.top >= 0 &&
		view.left >= 0 &&
		view.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		view.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
	
	// build the nav

	// Add class 'active' to section when near top of viewport

	// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

//window.addEventListener('load', ()=>{
document.body.onload = function () {

	// Build additional sections
	createSections(3);
	
	// Build menu 
	createNav();
	
	// Scroll to section on link click
	smoothScroll();

	// Set sections as active
	window.addEventListener('scroll', function () {
		// Set sections as active when window scrolls
		sections.forEach((section) => {
			if (inViewport(section)) {
				setActive(section);
			}
		});

	});

}//)
