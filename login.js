document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Kayıtlı kullanıcıları localStorage'dan al
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const matchedUser = users.find(user => user.username === username && user.password === password);

  if (matchedUser) {
    alert('Giriş başarılı! Lobiye yönlendiriliyorsunuz...');
    localStorage.setItem('currentUser', JSON.stringify(matchedUser));
    window.location.href = 'lobby.html';
  } else {
    alert('Hatalı kullanıcı adı veya şifre!');
  }
});
