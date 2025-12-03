// Button: Explore Medicines
document.getElementById("exploreBtn").addEventListener("click", function () {
    alert("Scroll down to explore medicines!");
});

// Add to Cart Buttons
const addButtons = document.querySelectorAll(".addBtn");

addButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Medicine added to cart!");
    });
});
