// Toggle dark/light mode
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('theme-icon');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
});
