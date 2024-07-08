const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;

const leaderboard = document.getElementById('leaderboard');
const gameGuide = document.getElementById('game-guide');
const gameName = document.getElementById('game-header');
const gameConsole = document.getElementById('game-console');
const socLinks = document.getElementById('social-links');

leaderboard.style.width = `${screenWidth/100*20 }px`;
leaderboard.style.height = `${screenHeight}px`;

gameGuide.style.width = `${screenWidth/100*20 }px`;
gameGuide.style.height = `${screenHeight}px`;

gameName.style.width = `${screenWidth/100*60 }px`;
gameName.style.height = `${screenHeight/100*10 }px`;

gameConsole.style.width = `${screenWidth/100*60 }px`;
gameConsole.style.height = `${screenHeight/100*80 }px`;

socLinks.style.width = `${screenWidth/100*60 }px`;
socLinks.style.height = `${screenHeight/100*10 }px`;

