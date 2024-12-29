const clickMe = document.getElementById("clicker");
const emojiPara = document.getElementById("emoji");
const emoji = "🔥";

clicker.addEventListener("click", async () => {

    const x = Math.random() * (window.innerWidth - clicker.offsetWidth);
    const y = Math.random() * (window.innerHeight - clicker.offsetHeight);
    clicker.style.transform = `translate(${x}px, ${y}px)`;

    async function getEmoji() {
        const response = await fetch("https://emojihub.yurace.pro/api/random");
        const data = await response.json();
      
        // Convert the Unicode HTML code to a usable emoji
        const unicode = data.unicode[0]; // Get the first Unicode string
        const emoji = String.fromCodePoint(...unicode.split(' ').map(code => parseInt(code, 16)));
      
        return emoji; // Return the emoji character
      }
    
        const randomEmoji = await getEmoji();
        emojiPara.textContent += randomEmoji; // Add the emoji to the paragraph
      ;
      
      
});
