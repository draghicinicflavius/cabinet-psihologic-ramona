document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. EFECTUL DE SCRIERE (TYPEWRITER) - ACASĂ
    // ==========================================
    const words = [
        "Aviz psihologic angajare/control periodic.", 
        "Aviz permis port armă.", 
        "Dezvoltare personală."
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
    // ==========================================
    // 3. ANIMAȚIE LA SCROLL (VALORI DESPRE MINE)
    // ==========================================
    const revealItems = document.querySelectorAll('.reveal-item');

    // Setăm un observator care se uită când elementele intră pe ecran
    const observerOptions = {
        threshold: 0.1, // Se declanșează când se vede 10% din element
        rootMargin: "0px 0px -50px 0px" 
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return; // Dacă nu e pe ecran, nu face nimic
            } else {
                // Adaugă clasa active pentru a declanșa animația din CSS
                entry.target.classList.add('active');
                
                // Oprește observarea după ce a apărut o dată (ca să nu se repete la infinit)
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aplicăm observatorul pe fiecare valoare din listă, adăugând un mic delay între ele
    revealItems.forEach((item, index) => {
        // Punem o întârziere (delay) crescătoare ca să apară pe rând (efect de cascadă)
        item.style.transitionDelay = `${index * 0.15}s`;
        appearOnScroll.observe(item);
    });
});