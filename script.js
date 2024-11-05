document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("response").innerText = "Yeahhhhh! I know! Now tell, who is your crush?";
    createBlastEffect(event);
});

const noButton = document.getElementById("noBtn");

noButton.addEventListener("mouseover", function() {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    
    const randomX = Math.random() * (containerRect.width - noButton.offsetWidth);
    const randomY = Math.random() * (containerRect.height - noButton.offsetHeight - 50);

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

function createBlastEffect(event) {
    const blastEffect = document.getElementById("blastEffect");
    blastEffect.style.display = "block";

    const blast = document.createElement("div");
    blast.classList.add("blast");

    // Position the blast effect at the center of the Yes button
    const buttonRect = event.target.getBoundingClientRect();
    const blastX = buttonRect.left + buttonRect.width / 2;
    const blastY = buttonRect.top + buttonRect.height / 2;

    blast.style.left = `${blastX}px`;
    blast.style.top = `${blastY}px`;

    blastEffect.appendChild(blast);
}

    