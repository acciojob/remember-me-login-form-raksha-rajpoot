//your JS code here. If required.
  const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');
    const existingBtn = document.getElementById('existing');
    const form = document.getElementById('loginForm');

    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
      existingBtn.style.display = 'inline-block';
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;

      alert(`Logged in as ${username}`);

      if (checkbox.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      if (localStorage.getItem('username')) {
        existingBtn.style.display = 'inline-block';
      } else {
        existingBtn.style.display = 'none';
      }
    });

    existingBtn.addEventListener('click', () => {
      const savedUser = localStorage.getItem('username');
      alert(`Logged in as ${savedUser}`);
    });
