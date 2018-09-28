(() => {

	const mobileWidth = 600;

	const addMenuBackground = () => {
		const boddyOffset = document.body.scrollTop || document.documentElement.scrollTop;
		const navigation = document.querySelector("header nav");

		if(pageWidth = mobileWidth) {
				boddyOffset > 700 ? navigation.classList.add("ep-nav-fixed") : navigation.classList.remove("ep-nav-fixed");
		}
	}

	const onNavItemClick = () => {
		const navItemList = document.querySelectorAll(".ep-section-link")
		const navItems = [...navItemList];

		navItems.forEach(item => {
			item.addEventListener("click", event => {
				
				event.preventDefault();

				const sectionId = event.target.getAttribute("href") || event.target.dataset.href;

	/*			console.log(sectionId);*/

				scrollToSection(sectionId);

			})

		})
	}

	const scrollToSection = sectionId => {
		let sectionPosition, sectionOffset;
		const navigationHeight = document.querySelector("header nav").offsetHeight;

		const pageWidth = window.innerWidth;

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

	const onTestimonialChange = () => {
		let firstChild, lastChild;
		const preArrow = document.querySelector("#ep-testimonials-prev");
		const nextArrow = document.querySelector("#ep-testimonials-next");
		const testimonials = document.querySelector(".ep-testimonials ul");

		document.addEventListener("click", () => {
			if(event.target === preArrow) {
				lastChild = testimonials.lastElementChild;
				testimonials.insertAdjacentElement("afterbegin", lastChild);
			} else if (event.target === nextArrow) {
				firstChild = testimonials.firstElementChild;
				testimonials.insertAdjacentElement("beforeend", firstChild); 
/*	NOTE: Other options "afterbegin" "afterend" "beforebegin" "beforeend"    */
			}
		})
	}

	const onGalleryImageClick = () => {
		const galleryImageList = document.querySelectorAll("#ep-gallery li");
		const galleryImages = [...galleryImageList];

		galleryImages.forEach(image => {
			image.addEventListener("click", event => {
		/*		galleryImageOpen(event.target);*/
			})
		}) 
	}

/*	const galleryImageOpen = image => {
		const imageSrc = image.getAttribute("src");
/*	NOTE: "`" is not "'" be careful...    */ /*
		const openedImage = `<div class='ep-backdrop'><img src='${imageSrc}' alt='' />
							 <span class="ep-backdrop-close">X</span></div>`;

		document.body.insertAdjacentHTML("beforeend", openedImage);

	}
*/
	window.addEventListener("scroll", () => {
		addMenuBackground();
	})

	onNavItemClick();
	onTestimonialChange();
/*	onGalleryImageClick();*/

})(); 


/*	UPDATING... */