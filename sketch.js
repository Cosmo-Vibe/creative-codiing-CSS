
// JavaScript to hide the loading screen once the page is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('explode');
            setTimeout(() => loadingScreen.style.display = 'none', 1000); // Wait for the explosion animation to finish
        }
    }, 3000); // Adjust this delay as needed
});

// STARTS 
/* let stars = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background("#E2BFB3");
  
    stars.push(new Star(mouseX, mouseY));
  
    for (let i = stars.length - 1; i >= 0; i--) {
        stars[i].update();
        stars[i].display();
        if (stars[i].isFinished()) {
            stars.splice(i, 1);
        }
    }
}

class Star {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(5, 10);
        this.lifetime = 255;
    }

    update() {
        this.lifetime -= 6;
    }

    display() {
        noStroke();
        fill(255, this.lifetime);
        ellipse(this.x, this.y, this.size);
    }

    isFinished() {
        return this.lifetime < 0;
    }
}
 */


//Fire !
let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    // Setting the canvas for WebGL mode allows us to utilize z-index
    noCursor(); // Hides the default cursor
}

function draw() {
    clear(); // Clear the canvas but keep the background transparent
    // Iterate backward through the particles array to update and display particles
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].display();
        if (particles[i].isFinished()) {
            // Remove the particle if it's finished its lifecycle
            particles.splice(i, 1);
        }
    }

    // Add a new particle at the mouse position
    particles.push(new Particle(mouseX, mouseY));
}

// Particle class to simulate fire-like particles
class Particle {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(random(-1, 1), random(-1, -5));
        this.acceleration = createVector(0, 0);
        this.lifespan = 255;
        this.size = random(5, 10);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifespan -= 5; // Decrease lifespan
    }

    // Method to display the particle
    display() {
        stroke(255, this.lifespan);
        strokeWeight(2);
        fill(255, 100, 0, this.lifespan); // Fire color
        ellipse(this.position.x, this.position.y, this.size);
    }

    // Method to check if the particle is finished
    isFinished() {
        return this.lifespan < 0;
    }
}
