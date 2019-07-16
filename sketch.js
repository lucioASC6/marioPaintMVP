function setup() {
    createCanvas(500, 500);
    background (255, 64, 64);
    square(30, 20, 55);
    triangle(130, 75, 158, 20, 186, 75);
    circle(250, 50, 65);
}

function mouseClicked() {
    if (30 <= pmouseX <= 85 && 20 <= pmouseY <= 75) {
        rect(mouseX, mouseY, 5, 5);
        fill(color(85, 107, 47));
        return false;
    }
}

function mouseDragged() {
    ellipse(mouseX, mouseY, 5, 5);
    fill(color(85, 107, 47));
    return false;
}
