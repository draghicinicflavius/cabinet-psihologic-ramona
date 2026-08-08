document.addEventListener('DOMContentLoaded', () => {
    // Cuvintele (serviciile) care vor rula pe ecran
    const words = [
        "Evaluare la angajare", 
        "Aviz permis port armă", 
        "Dezvoltare personală"
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterElement = document.getElementById('typewriter-text');
    
    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Șterge un caracter
            charIndex--;
        } else {
            // Adaugă un caracter
            charIndex++;
        }
        
        typewriterElement.textContent = currentWord.substring(0, charIndex);
        
        // Viteza de tastare
        let typeSpeed = isDeleting ? 50 : 100;
        
        // Dacă a terminat de scris cuvântul, ia o pauză și apoi șterge
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pauză de 2 secunde ca să citească userul
            isDeleting = true;
        } 
        // Dacă a șters tot cuvântul, trece la următorul
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pauză mică înainte să înceapă noul cuvânt
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    // Pornește animația
    typeEffect();
});