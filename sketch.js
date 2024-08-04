let video;
let facemesh;

let faces;

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO);
  video.hide();

  facemesh = ml5.facemesh(video);
  facemesh.on("predict", gotResults);
}

function gotResults(results) {
  // console.log(results)
  faces = results;
}

function draw() {
  image(video, 0, 0);

  if (faces) {
    let face = faces[0];
    let mesh = face.scaledMesh;
    for (i = 0; i < mesh.length; i++) {
      let point = mesh[i];

      let x = point[0];
      let y = point[1];
      circle(x, y, 5);
    }
  }
}
document.write("Yo!")
