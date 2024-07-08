const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

//adjusting canvas size
const gameConsole = document.getElementById('game-console')
const header = document.getElementById('header')
const gameName = document.getElementById('game-name')
const leaderboard = document.getElementById('leaderboard')
const leaderboardH1 = document.getElementById('leaderboard-h1')
const guide = document.getElementById('guide')
const guideH1 = document.getElementById('guide-h1')
const socLinks = document.getElementById('social-links')

canvas.style.marginTop = `${gameConsole.offsetWidth/100*2.5}px`
canvas.style.height = `${gameConsole.offsetHeight/100*70}px`
canvas.style.width = `${socLinks.offsetWidth}px`
gameName.style.fontSize = `${header.offsetHeight/2}px`
leaderboardH1.style.fontSize = `${leaderboard.offsetHeight/4}px`
guideH1.style.fontSize = `${guide.offsetHeight/4}px`

setInterval(()=>{
    canvas.style.marginTop = `${gameConsole.offsetWidth/100*2.5}px`
    canvas.style.height = `${gameConsole.offsetHeight/100*70}px`
    canvas.style.width = `${socLinks.offsetWidth}px`
    gameName.style.fontSize = `${header.offsetHeight/2}px`
    leaderboardH1.style.fontSize = `${leaderboard.offsetHeight/4}px`
    guideH1.style.fontSize = `${guide.offsetHeight/4}px`
}, 1000)


// let i = 0
// setInterval(()=>{
// i++
// ctx.fillStyle = 'black'; 
// ctx.fillRect(0, 0, canvas.width/1000*i, canvas.height);
// }, 1)

ctx.fillStyle = 'skyblue'; 
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = 'rgb(64, 40, 42)'; 
ctx.fillRect(0, canvas.height - canvas.height/10, canvas.width, canvas.height/10);

ctx.fillStyle = 'red' 
ctx.fillRect(10, 40, 20, 20);

function animate(){
    window.requestAnimationFrame(animate)
    console.log('nigga')
}

amimate()