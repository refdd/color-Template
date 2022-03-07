// all varabal i need it
const menu = document.querySelector(".navbar__toggle")
const menuLink = document.querySelector(".navbar__menu")
const navLogo = document.querySelector(".navbar__logo")
//  Macke function to toggle Active class
function showMenu() {

    menu.classList.toggle("is_active")
    menuLink.classList.toggle("active")

}
// bo a Event Click
menu.addEventListener("click", showMenu) 
//______________________________________

// Show Active Menu When Scrolling
const highLightMenu = () =>{
    const elem = document.querySelector(".highlight")
    const homeMenu = document.querySelector("#home-page")
    const aboutMenu = document.querySelector("#about-page")
    const ServicesMenu = document.querySelector("#services-page")
    let scrollpos =window.scrollY
   
    if(window.innerWidth > 960 && scrollpos < 600 ){
        homeMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight")
      return
    } else if (window.innerWidth > 960 && scrollpos < 1400){
        aboutMenu.classList.add("highlight")   ;
        homeMenu.classList.remove("highlight");
        ServicesMenu.classList.remove("highlight")   
        return     
    } else if (window.innerWidth > 960 && scrollpos < 2345) {
        ServicesMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        return
    }
    if (elem && window.innerWidth < 960 && scrollpos < 600){
        elem.classList.remove("highlight")
    }
};
window.addEventListener("scroll",highLightMenu);
window.addEventListener("click",highLightMenu);

function hideMobMenu() {
    const menuBar = document.querySelector(".is_active")
   if(window.innerWidth <= 768 && menuBar){

       menu.classList.toggle("is_active")
       menuLink.classList.remove("active")

   }
}
// bo a Event Click
menuLink.addEventListener("click", hideMobMenu) ;
navLogo.addEventListener("click", hideMobMenu);