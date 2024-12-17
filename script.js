// JavaScript to toggle class on button click
document.getElementById("myButton").addEventListener("click", function () {
    // Toggle between 'default' and 'clicked' classes
    if (this.classList.contains("active")) {
        this.classList.remove("active");
    } else {
        this.classList.add("active");
    }
});
