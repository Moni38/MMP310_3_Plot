var x = 100;
var y = 100;
var s = 100;
var o = 25;

function setup() {
    createCanvas(900, 600);
    ellipseMode(CENTER);
    rectMode(CENTER);

}

function draw() {
    background("gold");
    fill("black");
    textSize(60);
    text("The Buttons!", x, y);
    textSize(20);
    text("Scene 1: Press down mouse.", x, y + o);
    text("Scene 2: Hold down Shift + A", x, y + o * 2);
    text("Scene 3: Hold down Shift + B", x, y + o * 3);

    if (mouseIsPressed) {
        //scene 1
        seasons("summer");
        snowPerson('white', 100, 200);
        textSize(20);
        text("Hello, I Think I\nneed some buttons dont you?", 100, 50);

    } else if (key == 'A') {
        //scene 2
        seasons("atumn");
        snowPerson('pink', 400, 200);
        textSize(20);
        fill("white");
        text("I think i can buy\nthem at this store.", 400, 50);

    } else if (key == 'B') {
        //scene 3
        seasons("winter");
        snowPerson('white', 700, 200);
        //buttons
        fill("red");
        ellipse(x * o / 3.4, y * o / 6, s / 2);
        ellipse(x * o / 3.4, y * o / 8, s / 2);
        fill("white");
        text("These look perfect!\nThanks for coming with me, bye!", 500, 50);

    }
}

function snowPerson(color, x, y) {
    // snowman
    fill(color);

    //body
    noStroke();
    ellipse(x + o, y + o, s);
    ellipse(x + o, y + o * 5, s + o * 2);
    ellipse(x + o, y + o * 10, s + o * 4);

    //eyes
    fill("black");
    noStroke();
    ellipse(x + o / 2, y, s / o);
    ellipse(x + o * 1.5, y, s / o);

    //nose
    fill("orange");
    triangle(x + o, y + o, x + o * 2, y + o, x + o, y + o / 3);

    //mouth
    fill("black");
    ellipse(x, y + o, s / o - 10);
    ellipse(x + o / 4, y + o + 10, s / o - 10);
    ellipse(x + o * .5, y + o + 15, s / o - 10);
    ellipse(x + o * 1, y + o + 15, s / o - 10);

    //arm
    stroke(0);
    line(x - o, y + o * 6, x - o * 2, y + o * 2);
}

function seasons(season) {
    if (season === "summer") {
        //Summer scene
        background("gold");
        noStroke();

        //sun
        fill("yellow");
        ellipse(x, y, s);

        //ground
        fill("green");
        rect(width / 2, height, width, height / 2)

        //trees
        fill("brown");
        rect(x + o, y + o * 15, width / o, height / 5);
        rect(x + o * 8, y + o * 15, width / o, height / 5);
        rect(x + o * 16, y + o * 15, width / o, height / 5);
        rect(x + o * 24, y + o * 15, width / o, height / 5);

        fill("lightgreen")
        ellipse(x + o, y + o * 9, s * 2);
        ellipse(x + o * 8, y + o * 9, s * 2);
        ellipse(x + o * 16, y + o * 9, s * 2);
        ellipse(x + o * 24, y + o * 9, s * 2);
    } else if (season === "winter") {
        //winter scene
        background('mediumblue');
        fill('white');
        ellipse(x + o, y + o, s + o);

        //snow
        ellipse(x * 2, y * 7, s * 5);
        ellipse(x * 6, y * 7, s * 5);

        //trees
        fill("brown");
        rect(x + o, y + o * 15, width / o, height / 5);
        rect(x + o * 8, y + o * 15, width / o, height / 5);
        fill("green");
        triangle(x - o * 3, y + o * 13, x + o * 4, y + o * 3, x + o * 6, y + o * 13);
        triangle(x + o * 5, y + o * 13, x + o * 9, y + o * 3, x + o * 11, y + o * 13);
    } else if (season === "atumn") {
        //autumn scene
        background("purple");
        noStroke();

        //sun
        fill("lightblue");
        ellipse(x, y, s);

        //ground
        fill("darkgreen");
        rect(width / 2, height, width, height / 2);

        //trees
        fill("brown");
        rect(x + o, y + o * 15, width / o, height / 5);
        rect(x + o * 8, y + o * 15, width / o, height / 5);
        rect(x + o * 16, y + o * 15, width / o, height / 5);
        rect(x + o * 24, y + o * 15, width / o, height / 5);

        fill("green");
        ellipse(x + o, y + o * 9, s * 2);
        fill("red");
        ellipse(x + o * 8, y + o * 9, s * 2);
        fill("orange");
        ellipse(x + o * 16, y + o * 9, s * 2);
        fill("gold");
        ellipse(x + o * 24, y + o * 9, s * 2);

        //store
        fill("grey");
        triangle(width / 1.2, height / 3, width, 0, width, height / 3);
        rect(width / 1, height / 1.5, width / 5, width / 2);
        fill("white")
        text("store", 850, 175);

    }
}
