/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById('nav-toggle'),
      navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkActive() {

    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('show-menu') 
}
navLink.forEach(n => n.addEventListener('click', linkActive))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{

  	const scrollY = window.pageYOffset
    
	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive);

/*======== Scroll Reveal ========*/ 
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
})
sr.reveal(`.home__title, .quality__image, .poular__img-left`)
sr.reveal(`.home__description`,{delay:500})
sr.reveal(`.home__button`,{delay:600})
sr.reveal(`.home__image, .quality__title, .poular__img-right`,{origin:'right'})
sr.reveal(`.quality__description`,{origin:'right', delay:500})
sr.reveal(`.quality__list li`,{origin:'right' ,interval:100, delay:100})
sr.reveal(`.guidline__title, .footer__container, .subtitle`,{origin:'top'})
sr.reveal(`.guidline__image, .footer__copy, .popular__title`,{origin:'top',delay:500})
sr.reveal(`.poplular__sale`,{origin:'top',delay:600})
sr.reveal(`.popular__button`,{origin:'top',delay:600})









