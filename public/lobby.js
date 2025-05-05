// Kullanıcı adını al ve göster
const username = localStorage.getItem("username") || "Kullanıcı";
document.getElementById("username").innerText = username;

// Butonlara tıklama olayları (şimdilik yönlendirme yerine alert veriyoruz)
document.getElementById("classicOkey").addEventListener("click", () => {
  alert("Klasik Okey seçildi (oyuna yönlendirilecek).");
});

document.getElementById("okey101").addEventListener("click", () => {
  alert("101 Okey seçildi (oyuna yönlendirilecek).");
});

document.getElementById("barbut").addEventListener("click", () => {
  alert("Barbut seçildi (oyuna yönlendirilecek).");
});

// Geri çık
document.getElementById("back").addEventListener("click", () => {
  localStorage.removeItem("username");
  window.location.href = "/";
});
