
function toggleTheme() {
    const body = document.body;
    const themeButton = document.getElementById("theme-btn");
  
  
    body.classList.toggle("dark-theme");
  
 
    if (body.classList.contains("dark-theme")) {
      themeButton.textContent = "Tema Claro";
    } else {
      themeButton.textContent = "Tema Escuro";
    }
  }
  