console.log('ruben sitbon')

// Mode dark toggle
window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('darkModeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      document.querySelector('.navbar').classList.toggle('dark-mode');
      document.querySelectorAll('.menu a').forEach(el => el.classList.toggle('dark-mode'));
      document.querySelectorAll('.section').forEach(el => el.classList.toggle('dark-mode'));
      toggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Mode clair' : 'Mode sombre';
    });
  }
});