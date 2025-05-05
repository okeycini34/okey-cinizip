document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  // Simülasyon
  console.log('Giriş başarılı');

  // Giriş başarılıysa yönlendir
  window.location.href = '/lobby';
});
