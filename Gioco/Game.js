document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const gameContainer = document.getElementById('gameContainer');
    let playerLeft = 0;
    let playerBottom = 0;
    const gravity = 0.5;
    let isJumping = false;

    function jump() {
        let jumpInterval = setInterval(() => {
            if (playerBottom < 200) {
                playerBottom += 5;
                player.style.bottom = playerBottom + 'px';
            } else {
                clearInterval(jumpInterval);
                isJumping = false;
            }
        }, 20);
    }

    function fall() {
        let fallInterval = setInterval(() => {
            if (playerBottom > 0) {
                playerBottom -= gravity;
                player.style.bottom = playerBottom + 'px';
            }
        }, 20);
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp' && !isJumping) {
            isJumping = true;
            jump();
        }
    });

    setInterval(() => {
        fall();
    }, 20);
});
