class MobileMenu {
	constructor() {
		this.siteHeader = document.querySelector(".site-header")
		this.menuIcon = document.querySelector(".site-header__menu-icon")
		this.menuContent = document.querySelector(".site-header__menu-content")
		this.events()
	}

	events() {
		this.menuIcon.addEventListener("click", () => this.toggleTheMenu()) // The arrow function here does not manipulate the value of the "this" keyword.'
		// If we did not provide an arrow function here, and instead listed a direct refererence to the toggleTheMenu method, then addEventListener would have run this code within a context where "this" (in toggleTheMenu) would be pointing towards the element that got clicked.
		// However, because we provided an arrow function so that the "this" keyword doesn't change, "this" in toggleTheMenu is still pointing towards our overall object, which lets us easily access our menuContent property.
	}

	toggleTheMenu() {
		this.siteHeader.classList.toggle("site-header--is-expanded")
		this.menuContent.classList.toggle("site-header__menu-content--is-visible")
		this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
	}
}

export default MobileMenu