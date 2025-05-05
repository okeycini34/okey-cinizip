document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirmPassword').value;

  if (password !== confirm) {
    alert('Şifreler eşleşmiyor!');
    return;
  }

  alert('Kayıt başarılı!');

  // Giriş başarılıysa lobiye yönlendir
  window.location.href = '/lobby';
});
