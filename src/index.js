import PotatoeGame from './game';
console.log("Webpack is working!")

window.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById('potatoe-game');
    new PotatoeGame(canvas);

})
