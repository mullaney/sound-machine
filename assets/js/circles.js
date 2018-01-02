var circles = [];
var RADIUS = 400;

function onKeyDown(event) {
  var key = event.event.keyCode -97;
  if (key >= 0 && key <= 25) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = randomPoint * maxPoint;
    var circle = new Path.Circle(point, RADIUS);
    circle.fillColor = colors[key];
    circles.push(circle);
    var sound = new Howl({
      src: ['assets/sounds/' + soundFiles[key]]
    });
    sound.play();
  }
}

function randomFillColor() {
  var red = Math.random() * 0.5 + 0.5;
  var green = Math.random() * 0.5 + 0.5;
  var blue = Math.random() * 0.5 + 0.5;
  return new Color(red, green, blue, 0.7);
}

function onFrame(event) {
  for (var i = circles.length - 1; i >= 0; i--) {
    circles[i].scale(.93);
    // circles[i].fillColor.hue += 1;
    if (circles[i].getArea() < .05) {
      circles[i].remove();
      circles.splice(i, 1);
    }
  }
}

var colors = [];

for (var i = 0; i < 26; i++) {
  colors.push(randomFillColor());
}

var soundFiles = [
  'dotted-spiral.mp3',
  'moon.mp3',
  'prism-1.mp3',
  'strike.mp3',
  'wipe.mp3',
  'bubbles.mp3',
  'flash-1.mp3',
  'pinwheel.mp3',
  'prism-2.mp3',
  'suspension.mp3',
  'zig-zag.mp3',
  'clay.mp3',
  'flash-2.mp3',
  'piston-1.mp3',
  'prism-3.mp3',
  'timer.mp3',
  'confetti.mp3',
  'flash-3.mp3',
  'piston-2.mp3',
  'splits.mp3',
  'ufo.mp3',
  'corona.mp3',
  'glimmer.mp3',
  'piston-3.mp3',
  'squiggle.mp3',
  'veil.mp3'
]
