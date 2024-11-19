document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.addEventListener("click", function() {
            const targetId = item.getAttribute("data-scroll-target");
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector(".navbar").offsetHeight,
                    behavior: "smooth"
                });
            }
        });
    });
});
