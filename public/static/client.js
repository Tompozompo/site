document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(currentTheme + '-mode');

    themeToggle.addEventListener('click', () => {
        console.log('Toggle clicked'); // Debugging line
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            console.log('Switched to dark mode'); // Debugging line
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
            console.log('Switched to light mode'); // Debugging line
        }
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}