function preload() {
}

function setup() {
    canvas = createCanvas(640,840);
    canvas.position(200,175);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    Image(video, 0, 0, 640, 400);
    tint(tint_color);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}