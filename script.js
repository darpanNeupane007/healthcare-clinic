// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0
    );
}

// Function to add 'active' class to elements in view
function handleScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add('active');
        }
    });
}

// BMI Calculator Function
function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight.");
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obesity";

    document.getElementById("bmi-result").textContent = `Your BMI is ${bmi} (${category}).`;
}

// Initialize animations and scroll event listener
document.addEventListener('DOMContentLoaded', () => {
    handleScroll(); // Trigger animations for elements already in view
    window.addEventListener('scroll', handleScroll); // Trigger animations on scroll
});
