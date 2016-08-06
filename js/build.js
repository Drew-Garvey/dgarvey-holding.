(function() {

// Shout out to Pt for being dope! [http://williamngan.github.io/pt/]

// ======== Begin Pt Code ========

//// 1. Define Space and Form
var colors = {
  a1: "#00FA9A", a2: "#00FA9A"
};
// var space = new CanvasSpace("demo", "#F5F5DC" ).setup({bgcolor: "#222"});
var space = new CanvasSpace("pt").setup({bgcolor: "#F5F5DC"});
var form = new Form( space );


//// 2. Create Elements
var mouse = new Circle( space.size.$divide(2) ).setRadius(200);
var pts = [];
for (var i=0; i<500; i++) {
  pts.push( space.size.$multiply( Math.random(), Math.random()) );
}

//// 3. Visualize, Animate, Interact
space.add({
  animate: function(time, fps, context) {

    // change mouse radius
    mouse.setRadius( mouse.y/space.size.y * 200 + 8000 );
    form.stroke(false);

    // go through each point
    for (var i=0; i<pts.length; i++) {

      var size = 0.5;
      var _p = pts[i].clone();

      // if intersecting with mouse circle, change its size and scale from mouse anchor point
      if (mouse.intersectPoint( pts[i]) ) {
        var dist =  (mouse.radius - pts[i].distance( mouse )) / mouse.radius;
        size = dist * 20;
        form.fill( colors["a"+(i%4+1)] );
        _p.scale2D( 1+dist, 1+dist, mouse );

      } else {
        form.fill( "#006699" );
      }

      // draw points
      form.point( _p, size, true );
    }
  },
  onMouseAction: function(type, x, y, evt) {
    if (type=="move") {
      mouse.set(x,y);
    }
  }
});


// 4. Start playing
space.bindMouse();
space.play(); 


})();

