function toggleForm() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const formTitle = document.getElementById("form-title");
  const toggleText = document.getElementById("toggle-text");

  if (loginForm.style.display === "none") {
    // Giriş formuna geç
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    formTitle.textContent = "Giriş Yap";
    toggleText.innerHTML = `Hesabınız yok mu? <a href="#" onclick="toggleForm()">Kayıt Ol</a>`;
  } else {
    // Kayıt formuna geç
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    formTitle.textContent = "Kayıt Ol";
    toggleText.innerHTML = `Zaten hesabınız var mı? <a href="#" onclick="toggleForm()">Giriş Yap</a>`;
  }
}
