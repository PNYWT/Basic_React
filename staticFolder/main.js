console.log("ScrollToTop")

const siteScrollTop = document.querySelector(".site-Scroll-Top");

function scrollToTop(){
    window.scrollTo({ top:0, behavior: "smooth"});
}

if (!!siteScrollTop){
    siteScrollTop.addEventListener("click", scrollToTop);
}