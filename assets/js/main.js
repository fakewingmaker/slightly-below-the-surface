
//Select the page as document body, and understand it scroll. When the image shows up at a threshold, it shows the pop-up.

function handlePopup() {
    const popup = document.querySelector(".popup")
    const image = document.querySelector('.img')
    const observer = new IntersectionObserver(
        function(imgs) {
            imgs.forEach(
                function(img) {
                    if(img.isIntersecting) {
                        popup.removeAttribute("hidden")
                        document.body.setAttribute("no-scroll", true)
                    }
                }
            )
        }, {
            threshold: 0.15
        }
    )
    if(image) observer.observe(image)
}

function handlePuzzle() {
    const popup = document.querySelector(".popup")
    popup.addEventListener("click", function(){
        popup.setAttribute("hidden", true)
        document.body.removeAttribute("no-scroll")
    })

}




window.onload = function(){
    handlePopup()
    handlePuzzle()

}



//the code from gpt, just trying to see the function

		// function handlePopup() {
		// 	const popup = document.querySelector(".popup")
		// 	const image = document.querySelector('.img')
		// 	const observer = new IntersectionObserver(
		// 		function(imgs) {
		// 			imgs.forEach(
		// 				function(img) {
		// 					if(img.isIntersecting) {
		// 						popup.removeAttribute("hidden")
		// 						document.body.setAttribute("no-scroll", true)
		// 					}
		// 				}
		// 			)
		// 		}, {
		// 			threshold: 0.2
		// 		}
		// 	)
		// 	if(image) observer.observe(image)
		// }

		// function handlePuzzle() {
		// 	const popup = document.querySelector(".popup")
		// 	const icon1 = new image();
		// 	icon1.src = "../img/icon1.jpg";
		// 	image1.style.position = "absolute";
		// 	image1.style.left = "50px";
		// 	image1.style.top = "50px";
		// 	image1.addEventListener("mousedown", dragStart);
		// 	popup.appendChild(image1);
		// 	const image2 = new Image();
		// 	image2.src = "../img/icon2.jpg";
		// 	image2.style.position = "absolute";
		// 	image2.style.left = "200px";
		// 	image2.style.top = "100px";
		// 	image2.addEventListener("mousedown", dragStart);
		// 	popup.appendChild(image2);

		// 	function dragStart(event) {
		// 		var offsetX = event.clientX - event.target.offsetLeft;
		// 		var offsetY = event.clientY - event.target.offsetTop;
		// 		document.addEventListener("mousemove", drag);
		// 		document.addEventListener("mouseup", dragEnd);
		// 		function drag(event) {
		// 			event.preventDefault();
		// 			event.stopPropagation();
		// 			event.target.style.left = (event.clientX - offsetX) + "px";
		// 			event.target.style.top = (event.clientY - offsetY) + "px";
		// 		}
		// 		function dragEnd(event) {
		// 			document.removeEventListener("mousemove", drag);
		// 			document.removeEventListener("mouseup", dragEnd);
		// 			const target = event.target;
		// 			const targetRect = target.getBoundingClientRect();
		// 			const targetCenterX = targetRect.left + targetRect.width / 2;
		// 			const targetCenterY = targetRect.top + targetRect.height / 2;
		// 			const button = document.querySelector('button');
		// 			const buttonRect = button.getBoundingClientRect();
		// 			if (
		// 				targetCenterX >= buttonRect.left &&
		// 				targetCenterX <= buttonRect.right &&
		// 				targetCenterY >= buttonRect.top &&
		// 				targetCenterY <= buttonRect.bottom
		// 			) {
		// 				popup.setAttribute("hidden", true);
		// 				document.body.removeAttribute("no-scroll");
		// 			}
		// 		}
		// 	}

		// }

		// window.onload = function(){
		// 	handlePopup();
		// 	handlePuzzle();
		// }

