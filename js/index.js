(() => {

/* Navigation bar appares when reaches 800 lines in scroll-down - Satart - NOTE: also in CSS changed	*/ 
	const  mobileWidth = 680;		/*	Using Divce with 600 lines like mobile 	*/

	const addMenuBackground = () => {
		const pageWidth = window.innerWidth;	/*	For mobile devices with 600 lines width 	*/
		const boddyOffset = document.body.scrollTop || document.documentElement.scrollTop;	/*	OR if doesnt work in other browser 	*/
		const navigation = document.querySelector("header nav");

		if(pageWidth > mobileWidth) {
			boddyOffset > 500 ? navigation.classList.add("ep-nav-fixed") : navigation.classList.remove("ep-nav-fixed");			
		}
	}

/*	Creating Humborger Menu for Mobile device - Start - 	*/
	const reorderResponsiveMenu = () => {
		const pageWidth = window.innerWidth;
		const navContainer = document.querySelector("header nav .ep-container");
		const navigation = document.querySelector("header nav .ep-navigation");
		const mobileNavigation = document.querySelector("body > .ep-navigation");

/*	Humboerger - Insert Navigation list to body element - Start - 	*/
		if (pageWidth <= mobileWidth && navigation) {
			document.body.insertAdjacentElement("afterbegin", navigation); 			
		} else if (pageWidth > mobileWidth && mobileNavigation) {
			navContainer.insertAdjacentElement("beforeend", mobileNavigation);
		}
/*	Humboerger - Insert Navigation list to body element - end - 	*/
	}

/*	Creating Humborger Menu for Mobile device - end - 	*/

/*	Humborger Menu Click Toggle -Start- 	*/
	const mobileMenuToggle = () => {
		const menuToggle = document.querySelector(".ep-nav-toggle");

		menuToggle.addEventListener("click", () => {
			const mobileNavigation = document.querySelector("body > .ep-navigation");

			mobileNavigation.classList.toggle("ep-navigation-opened")

		})

	}

/*	Humborger Menu Click Toggle -end- 	*/	


	const onNavItemClick = () => {
		const navItemList = document.querySelectorAll(".ep-section-link");
		const navItems = [...navItemList];

		navItems.forEach(item => {
			item.addEventListener("click", event => {
				event.preventDefault();

				const sectionId = event.target.getAttribute("href") || event.target.dataset.href;

/*				console.log(sectionId);	/* /*	Observe the Console Log 	*/

				scrollToSection(sectionId);
			})
		})
	}

	const scrollToSection = sectionId => {
		let sectionPosition, sectionOffset;
		const navigationHeight = document.querySelector("header nav").offsetHeight;
		const pageWidth = window.innerWidth

		if(sectionId !== "#") {
			sectionOffset = document.querySelector(sectionId).offsetTop;
			sectionPosition = pageWidth > mobileWidth ? sectionOffset - navigationHeight : sectionOffset;

		} else {
			sectionPosition = 0;
		}

		window.scrollTo({
			'behavior': 'smooth',
			'left': 0,
			'top': sectionPosition
		})
	}

/*		For Left and Right Arrow - Start	*/
	const onTestimonialChange = () => {
		let firstChild, lastChild;
		const prevArrow = document.querySelector("#ep-testimonials-prev");
		const nextArrow = document.querySelector("#ep-testimonials-next");
		const testimonials = document.querySelector(".ep-testimonials ul");

		document.addEventListener("click", () => {
			if(event.target === prevArrow) {
				lastChild = testimonials.lastElementChild;
				testimonials.insertAdjacentElement("afterbegin", lastChild);
			} else if (event.target === nextArrow) {
				firstChild = testimonials.firstElementChild;
				testimonials.insertAdjacentElement("beforeend", firstChild);
			}
		})
	}
/*		For Left and Right Arrow - end	*/	

/*		Gallery image pop-up on click - start - 	*/ 	
	const onGalleryImageClick = () => {
		const galleryImageList = document.querySelectorAll("#ep-gallery li");
		const galleryImages = [...galleryImageList];

		galleryImages.forEach(image => {
			image.addEventListener("click", event => {
				galleryImageOpen(event.target);
			})
		})
	}	

	const galleryImageOpen = image => {
		const imageSrc = image.getAttribute("src");
		const openedImage = `<div class='ep-backdrop'><img src='${imageSrc}' alt=''>
							<span class="ep-backdrop-close">X</span></div>`;

		document.body.insertAdjacentHTML("beforeend", openedImage);

		galleryImageClose(); /*	Image must close under this function */
	}
/*		Closing Image - Start - 	*/
	const galleryImageClose = () => {
		const closeButton = document.querySelector(".ep-backdrop-close");

		closeButton.addEventListener("click", () => {
			const backdrop = document.querySelector(".ep-backdrop");
			backdrop.remove();
		})
	}
/*		Closing Image - end- 	*/


/*		Gallery image pop-up on click - ends - 	*/ 		

	window.addEventListener("scroll", () => {
		addMenuBackground();
	})

/*		For Humboerger Menu 	*/
	window.addEventListener("resize", () => {
		reorderResponsiveMenu();
	})
/*		For Humboerger Menu 	*/

	reorderResponsiveMenu();
	mobileMenuToggle();
	onNavItemClick();
	onTestimonialChange();
	onGalleryImageClick();



})();