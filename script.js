function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw(){
    background(0);

    let hr = hour();
    let mn = minute();
    let sc = second();

    strokeWeight(8);
    noFill();
    stroke(255, 100, 150);
    let end1 = map(sc, 0, 60, 0, 360);
    arc(200, 200, 300, 300, 0, end1);

    let end2 = map(mn, 0, 60, 0, 360);
    arc(200, 200, 280, 280, 0, end2);

    // strokeWeight(4);
    // stroke(255);
    // noFill();
    // ellipse(200, 200, 300);
    
}










//     fill(255);
//     noStroke();
//     text(hr + ':' + mn + ':' + sc, 10, 200);
// 