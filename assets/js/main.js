
//Select the page as document body, and understand it scroll. When the image shows up at a threshold, it shows the pop-up.

function handlePopup() {
    const popup = document.querySelector(".popup")
    const images = document.querySelectorAll('.img')
    const observer = new IntersectionObserver(
        function(imgs) {
            imgs.forEach(
                function(img) {
                    if(img.isIntersecting) {
                        popup.removeAttribute("hidden")
						popup.setAttribute("data-puzzle", img.target.id)
                        document.body.setAttribute("no-scroll", true)
						observer.unobserve(img.target)
                    }
                }
            )
        }, {
            threshold: 0.075
        }
    )
    if(images.length) images.forEach(img=> observer.observe(img))
}

function handlePuzzle() {
    const popup = document.querySelector(".popup")
    popup.addEventListener("click", function(){
        popup.setAttribute("hidden", true)
        document.body.removeAttribute("no-scroll")
		const imgId = popup.getAttribute("data-puzzle")
		document.getElementById(imgId).scrollIntoView({
			behavior: "smooth",
			block: "center",
		})

    })

}




window.onload = function(){
    handlePopup()
    handlePuzzle()

}




