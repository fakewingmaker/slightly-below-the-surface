function openPopup() {
    // Open the pop-up window
    var popup = window.open("https://www.example.com", "popupWindow", "width=500,height=500");

    // Create a button to close the pop-up window
    var closeButton = document.createElement("button");
    closeButton.innerHTML = "Close pop-up window";
    closeButton.addEventListener("click", function() {
        popup.close();
    });

    // Add the button to the pop-up window
    popup.document.body.appendChild(closeButton);
}