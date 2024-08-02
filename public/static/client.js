document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    let timeBasedGreeting;
  
    if (currentHour < 12) {
      timeBasedGreeting = 'Good morning';
    } else if (currentHour < 18) {
      timeBasedGreeting = 'Good afternoon';
    } else {
      timeBasedGreeting = 'Good evening';
    }
  
    greeting.textContent = `${timeBasedGreeting}, welcome to my website!`;
  
    const colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', () => {
      document.body.style.backgroundColor = getRandomColor();
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