//lucide for show icons
lucide.createIcons();
//for select the menu 
const mobileMenuOpen = document.getElementById("mobile-menu-open");
const mobileMenu = document.getElementById("mobile-menu");
//for toggle mobile menu block and hidden
function toggleMobileMenu() {
  mobileMenu.classList.toggle("hidden");
}
//for call the function
mobileMenuOpen.addEventListener("click", toggleMobileMenu);
