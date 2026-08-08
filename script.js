document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. EFECTUL DE SCRIERE (TYPEWRITER) - ACASĂ
    // ==========================================
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
        // Dacă elementul nu există pe pagină, oprim execuția pentru a evita erori
        if (!typewriterElement) return;

        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }
        
        typewriterElement.textContent = currentWord.substring(0, charIndex);
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pauză înainte de a șterge
            isDeleting = true;
        } 
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pauză înainte de noul cuvânt
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    typeEffect();

    // ==========================================
    // 2. MENIUL HAMBURGER (MOBIL)
    // ==========================================
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

    // Verificăm dacă elementele există înainte de a adăuga evenimente
    if (hamburger && navMenu) {
        
        // Deschide/Închide meniul la apăsarea butonului
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Ascunde meniul automat atunci când utilizatorul dă click pe un link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }
});