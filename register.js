document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      if (!username || !email || !password || !confirmPassword) {
        alert("Lütfen tüm alanları doldurun.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Şifreler uyuşmuyor.");
        return;
      }

      // Basit örnek: kullanıcıyı kaydetmiş gibi yap ve yönlendir
      localStorage.setItem("registeredUser", JSON.stringify({ username, email, password }));
      alert("Kayıt başarılı! Giriş ekranına yönlendiriliyorsunuz...");

      window.location.href = "index.html"; // İstersen doğrudan lobby.html'e de yönlendirebiliriz
    });
  }
});
