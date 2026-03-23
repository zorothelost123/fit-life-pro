// 1. Initialize Animations
AOS.init({ duration: 1200, once: true });

// 2. Typing Effect (Typed.js)
var typed = new Typed('.typing-text', {
    strings: ['MUSCLE', 'STRENGTH', 'CONFIDENCE', 'LEGENDS'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// 3. BMI Calculator Logic (Enhanced)
function calculateBMI() {
    const h = document.getElementById('height').value;
    const w = document.getElementById('weight').value;
    const result = document.getElementById('bmi-result');

    if(!h || !w) {
        result.innerHTML = "Please enter details!";
        result.style.color = "red";
        return;
    }

    let bmi = (w / ((h/100) ** 2)).toFixed(1);
    let msg = "";
    let color = "";

    if (bmi < 18.5) { msg = "Underweight"; color = "#f1c40f"; }
    else if (bmi < 25) { msg = "Healthy"; color = "#00f260"; }
    else { msg = "Overweight"; color = "#e74c3c"; }

    result.innerHTML = `BMI: <span style="font-size:2rem; color:${color}">${bmi}</span><br>${msg}`;
    result.style.marginTop = "20px";
}

// 4. Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Add mobile style dynamically if active
    if(navLinks.classList.contains('active')){
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.right = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "#0a0a0a";
        navLinks.style.padding = "20px";
    } else {
        navLinks.style.display = "none";
    }
});

// 5. Contact Form Submit Logic
function sendMessage(event) {
    event.preventDefault(); // Page reload avvakunda aaputundi

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;

    if(name && email && msg) {
        // Create a custom popup element
        const alertBox = document.createElement('div');
        alertBox.classList.add('custom-alert');
        alertBox.innerHTML = `✅ Message Sent Successfully, ${name}!`;
        document.body.appendChild(alertBox);

        // Clear Form
        document.querySelector('.contact-form').reset();

        // Remove popup after 3 seconds
        setTimeout(() => {
            alertBox.remove();
        }, 3000);
    } else {
        alert("Please fill all fields!");
    }
}