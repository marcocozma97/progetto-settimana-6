document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("themeToggle");
    const htmlElement = document.documentElement;

    // Cambia il testo tema chiaro / tema scuro in base a cosa clicchiamo

    const updateButtonText = (theme) => {
        if (theme === "dark") {
            themeToggleBtn.textContent = "Tema chiaro";
        } else {
            themeToggleBtn.textContent = "Tema scuro";
        }
    };

   // Controllo all'avvio della pagina per vedere se è scuro o chiaro

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        htmlElement.setAttribute("data-theme", "dark");
        updateButtonText("dark");
    } else {
        updateButtonText("light");
    }

    //Switch (tema scuro / tema chiaro)

    themeToggleBtn.addEventListener("click", () => {
        if (htmlElement.getAttribute("data-theme") === "dark") {
            htmlElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
            updateButtonText("light");
        } else {
            htmlElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            updateButtonText("dark");
        }
    });

    // Questo rende lo scorrimento alle categorie fluido e senza essere sovrastato dalla navbar
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.getElementById('mainNav').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - navbarHeight - 15;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    })
});