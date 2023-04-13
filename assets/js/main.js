// function openPopup() {
//     // Open the pop-up window
//     var popup = window.open("https://www.example.com", "popupWindow", "width=500,height=500");

//     // Create a button to close the pop-up window
//     var closeButton = document.createElement("button");
//     closeButton.innerHTML = "Close pop-up window";
//     closeButton.addEventListener("click", function() {
//         popup.close();
//     });

//     // Add the button to the pop-up window
//     popup.document.body.appendChild(closeButton);
// }

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
            threshold: 0.2
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

