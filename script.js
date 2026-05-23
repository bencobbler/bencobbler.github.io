document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.slider-img');
    if(images.length > 0) images[0].classList.add('desktop-active');

    document.body.classList.add('start-anim');
});

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}
document.getElementById("sidebar").addEventListener("click", function(event) {
    if (event.target === this) {
        this.classList.remove("open");
    }
});
document.querySelectorAll('.menuItem').forEach(item => {
    item.addEventListener('click', () => {
        const sidebar = document.getElementById("sidebar");
        if (window.innerWidth <= 768) {
            sidebar.classList.remove("open");
        }
    });
});
function openPage(pageId) {
    document.getElementById("homeImage").style.display = "none";
    document.querySelector(".intro").style.display = "none";

    const pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.style.display = "none";
        page.classList.remove("active");
    });

    const activePage = document.getElementById(pageId);
    activePage.style.display = (pageId === 'program') ? "flex" : "block";
    activePage.classList.add("active");

    if (pageId === 'program') {
        const slider = document.getElementById("programSlider");
        slider.scrollLeft = 0;
        
        const tabs = document.querySelectorAll(".tab");
        tabs.forEach(t => t.classList.remove("active"));
        if(tabs.length > 0) tabs[0].classList.add("active");

        const images = document.querySelectorAll('.slider-img');
        images.forEach(img => img.classList.remove('desktop-active'));
        if(images.length > 0) images[0].classList.add('desktop-active');
    }
}
function switchDay(index, el) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    el.classList.add("active");

    const slider = document.getElementById("programSlider");
    const images = document.querySelectorAll('.slider-img');

    if (window.innerWidth <= 768) {
        const imageWidth = slider.clientWidth;
        slider.scrollTo({
            left: index * imageWidth,
            behavior: 'smooth'
        });
    } else {
        images.forEach(img => img.classList.remove('desktop-active'));
        images[index].classList.add('desktop-active');
    }
}
function goHome() {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.style.display = "none";
        page.classList.remove("active");
    });

    const introText = document.querySelector(".intro");
    const homeImg = document.getElementById("homeImage");

    introText.style.display = "block";
    homeImg.style.display = "block";

    const lines = document.querySelectorAll(".intro .line");
    lines.forEach(line => {
        line.style.opacity = "1";
        line.style.transform = "translateY(0)";
        line.style.animation = "none";
    });

    homeImg.style.opacity = "1";
    homeImg.style.transform = "translateY(0)";
    homeImg.style.animation = "none";
}