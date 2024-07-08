const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 400;

const gravity = 0.5;
let score = 0;

const coinImage = document.getElementById('coinImage');
ctx.imageSmoothingEnabled = false;

//Player movement | stats
class Player {
    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = 100;
        this.y = canvas.height - this.height;
        this.velocityY = 0;
        this.speed = 5;
        this.jumpPower = -10;
        this.onGround = false;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        if (keys.KeyD) {
            this.x += this.speed;
        }
        if (keys.KeyA) {
            this.x -= this.speed;
        }

        this.y += this.velocityY;
        if (this.y + this.height < canvas.height) {
            this.velocityY += gravity;
            this.onGround = false;
        } else {
            this.y = canvas.height - this.height;
            this.velocityY = 0;
            this.onGround = true;
        }

        this.checkCollision();
    }

    jump() {
        if (this.onGround) {
            this.velocityY = this.jumpPower;
        }
    }
    
    doubleJump(){
        this.velocityY = this.jumpPower;
    }

    checkCollision() {
        rewards.forEach((reward, index) => {
            if (
                this.x < reward.x + reward.width &&
                this.x + this.width > reward.x &&
                this.y < reward.y + reward.height &&
                this.y + this.height > reward.y
            ) {
                rewards.splice(index, 1);
                score+=1;
                console.log('Score: ' + score);
                player.doubleJump();
            }
        });
    }
}

document.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    if (e.code === 'Space') {
        player.jump();
    }
});


//coins
class Reward {
    constructor(x, y, image) {
        this.width = 24;
        this.height = 24;
        this.x = x;
        this.y = y;
        this.image = image;
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

const player = new Player();
const keys = {};
const rewards = [
    new Reward(300, canvas.height - 80, coinImage),
    new Reward(500, canvas.height - 150, coinImage),
    new Reward(700, canvas.height - 220, coinImage)
];

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
    player.update();
    rewards.forEach(reward => reward.draw());
    requestAnimationFrame(animate);
}

document.addEventListener('keyup', (e) => {
    keys[e.code] = false;
});

animate();

