function preload() {

}

function setup() {
    canvas = createCanvas(300, 250);
    video = createCapture(VIDEO);
    canvas.center();
    video.hide();
    classifier = ml5.imageClassifier("MobileNet", modelLoaded);

}

function modelLoaded() {
    console.log("Model Is Loaded!");
}

function draw() {
    image(video, 0, 0, 300, 250);
    classifier.classify(video, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
        console.log(results);
    }
}