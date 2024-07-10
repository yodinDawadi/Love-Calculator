document.addEventListener("DOMContentLoaded", () => {
    const ktaKoName = document.querySelector("#kta");
    const ktKoName = document.querySelector("#kt");
    let kta = ktaKoName.value;
    let kt = ktKoName.value;
    const progressBar = document.querySelector(".progress-bar");
    const progressText = document.querySelector(".progress-text");
    const quotePara = document.querySelector(".quote-para");
    const quoteBtn = document.getElementById("calc-btn");
    const finalMessage=document.querySelector(".final-msg-para");
    
    const pickupLines = [
        "Are you a magician? Because whenever I look at you, everyone else disappears.",
        "Do you have a name, or can I call you mine?",
        "Is it hot in here, or is it just you?",
        "Do you have a map? Because I just got lost in your eyes.",
        "Are you French? Because Eiffel for you.",
        "If you were a vegetable, you’d be a cute-cumber.",
        "Are you a parking ticket? Because you’ve got FINE written all over you.",
        "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
        "Are you a time traveler? Because I can see you in my future.",
        "Are you made of copper and tellurium? Because you’re Cu-Te.",
        "Do you believe in love at first sight—or should I walk by again?",
        "Is your name Google? Because you’ve got everything I’ve been searching for.",
        "Can I follow you home? Cause my parents always told me to follow my dreams.",
        "Are you a Wi-Fi signal? Because I’m feeling a connection.",
        "Do you have a sunburn, or are you always this hot?",
        "Is your dad an artist? Because you’re a masterpiece.",
        "Can you lend me a kiss? I promise I’ll give it back.",
        "Are you a snowstorm? Because you’re making my heart race.",
        "Is your dad a boxer? Because you’re a knockout.",
        "Are you an angel? Because heaven is missing one."
    ];

    const getRandomPickupLine = () => {
        const randomIndex = Math.floor(Math.random() * pickupLines.length);
        return pickupLines[randomIndex];
    };

    const updateProgressBar = (percent) => {
        let currentPercent = 0;
        const interval = setInterval(() => {
            if (currentPercent >= percent) {
                clearInterval(interval);
            } else {
                currentPercent++;
                progressText.textContent = `${currentPercent}%`;
                progressBar.style.background = `conic-gradient(var(--love-color) ${currentPercent}%, white ${currentPercent}%)`;
            }
        }, 20); // Adjust the speed of the animation by changing the interval time (10ms here)
    };

    const updateFinalMessage=(randomPercentage)=>{
finalMessage.innerText=`${'hero'},Your love for ${'hero'} is ${randomPercentage}%`;
    }

    quoteBtn.addEventListener("click", () => {
        const randomPickupLine = getRandomPickupLine();
        quotePara.innerHTML = `&ldquo;${randomPickupLine}&rdquo;`;
        const randomPercentage = Math.floor(Math.random() * 100);
        updateProgressBar(randomPercentage);
        updateFinalMessage(randomPercentage);
        quoteBtn.disabled='TRUE';
        scrollToSection('src')
    });
    function scrollToSection(sectionId) {
        // Get the section element
        var section = document.getElementById(sectionId);
        // Scroll to the section
        section.scrollIntoView({ behavior: 'smooth' });
    }
});