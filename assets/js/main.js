function handlePopup() {
    const popup = document.querySelector(".popup");
    const images = document.querySelectorAll('.img');

    const observer = new IntersectionObserver(
        function (images) {
            images.forEach(
                function (image) {
                    if (image.isIntersecting) {
                        const iconImage = image.target.getAttribute('data-images');
                        updatePopupImage(popup, iconImage);
                        popup.removeAttribute("hidden");
                        popup.setAttribute("data-puzzle", image.target.id);
                        document.body.setAttribute("no-scroll", true);
                        observer.unobserve(image.target);
                    }
                }
            );
        }, {
            threshold: 0.075
        }
    );
    if (images.length) images.forEach(img => observer.observe(img));
}

function updatePopupImage(popup, image) {
    popup.innerHTML = '';
    const img = document.createElement('img');
    img.src = image;
    img.alt = '';
    img.classList.add('icon');
    popup.appendChild(img);
}

function handlePuzzle() {
    const popup = document.querySelector(".popup");
    popup.addEventListener("click", function () {
        popup.setAttribute("hidden", true);
        document.body.removeAttribute("no-scroll");
        const imgId = popup.getAttribute("data-puzzle");
        document.getElementById(imgId).scrollIntoView({
            behavior: "smooth",
            block: "center",
        });

    });

}

function startRandomFloat(element, duration) {
    const float = () => {
        const randomTop = Math.random() * 100;
        const randomLeft = Math.random() * 100;
        element.style.top = `${randomTop}%`;
        element.style.left = `${randomLeft}%`;
    };

    float();
    setInterval(float, duration);
}

window.onload = function () {
    handlePopup();
    handlePuzzle();
};

