document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('animated-title');
    const text = title.textContent;
    title.textContent = ''; // Clear the original text

    // Function to generate a random special character
    function getRandomSpecialCharacter() {
        const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?/~`';
        return specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    }

    // Split text into individual letters and wrap them in spans
    text.split('').forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter // Use non-breaking space for spaces
        title.appendChild(span);

        // Randomly decide whether to animate this letter or not
        if (Math.random() < 0.5) { // 50% chance to animate
            setTimeout(() => {
                const originalLetter = letter;
                const randomize = setInterval(() => {
                    if (letter !== ' ') { // Only randomize non-space characters
                        span.textContent = getRandomSpecialCharacter();
                    }
                }, 100); // Change every 100ms

                // Revert back to the original letter after a short delay
                setTimeout(() => {
                    clearInterval(randomize);
                    span.textContent = originalLetter
                    span.style.transform = 'scale(1)';
                    span.style.color = '';
                }, 300); // Random changes last for 300ms
            }, Math.random() * 500); // Random delay up to 500ms for each letter
        }
    });
});
