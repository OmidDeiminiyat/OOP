let totalScore = 0; // Global variable to track the score

class Tile {
    constructor(flippedClassName) {
        this.DomElement = document.createElement('section');
        this.flippedClassName = flippedClassName;
        this.DomElement.className = 'tile';
        document.getElementById("app").appendChild(this.DomElement);

        this.DomElement.addEventListener('click', () => {
            this.callBack();
        });
    }

    callBack() {
        console.log('Clicked');
        this.DomElement.classList.add(this.flippedClassName);
    }
}

class GreenTile extends Tile {
    constructor() {
        super("green");
        this.value = 1;
    }

    callBack() {
        super.callBack();
        totalScore += this.value;
        console.log(`Du fik ${this.value} point`);
        updateScoreDisplay();
    }
}

class BonuseTile extends Tile {
    constructor() {
        super("yellow");
        this.value = 10;
    }

    callBack() {
        super.callBack();
        totalScore += this.value; 
        console.log(`Du fik ${this.value} point`);
        updateScoreDisplay();
    }
}

class DestroyTile extends Tile {
    constructor() {
        super("red");
    }

    callBack() {
        super.callBack();
        totalScore = 0; 
        console.log('Destroy! Score reset to 0');
        updateScoreDisplay();
    }
}

function createTiles(totalTiles, redCount, yellowCount) {
    clearApp(); 
    totalScore = 0; 
    updateScoreDisplay();

    const tiles = [];


    for (let i = 0; i < redCount; i++) {
        tiles.push(new DestroyTile());
    }


    for (let i = 0; i < yellowCount; i++) {
        tiles.push(new BonuseTile());
    }

    const greenCount = totalTiles - redCount - yellowCount;
    for (let i = 0; i < greenCount; i++) {
        tiles.push(new GreenTile());
    }

   
    shuffleArray(tiles);
    renderTiles(tiles);
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function renderTiles(tiles) {
    const app = document.getElementById('app');
    tiles.forEach(tile => app.appendChild(tile.DomElement));
}

function clearApp() {
    const app = document.getElementById('app');
    app.innerHTML = '';
}


function createScoreDisplay() {
    const scoreContainer = document.createElement('div');
    scoreContainer.id = 'score';
    scoreContainer.textContent = `Total Score: ${totalScore}`;
    document.body.insertBefore(scoreContainer, document.getElementById('app'));
}

function updateScoreDisplay() {
    document.getElementById('score').textContent = `Total Score: ${totalScore}`;
}

function createRefreshButton() {
    const refreshButton = document.createElement('button');
    refreshButton.textContent = "Start Again";
    refreshButton.id = 'refresh-btn';
    refreshButton.addEventListener('click', () => {
        createTiles(100, 3, 9); 
    });
    document.body.insertBefore(refreshButton, document.getElementById('app'));
}

// Initialize the game
function initializeGame() {
    createScoreDisplay();
    createRefreshButton();
    createTiles(100, 3, 9); // 100 tiles, 3 red, 9 yellow, rest green
}

// Add the app container dynamically
const appContainer = document.createElement('div');
appContainer.id = 'app';
document.body.appendChild(appContainer);

// Start the game
initializeGame();
