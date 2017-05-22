function Card(x, y, w, h, fill) {
  // This is a very simple and unsafe constructor. All we're doing is checking if the values exist.
  // "x || 0" just means "if there is a value for x, use that. Otherwise use 0."
  // But we aren't checking anything else! We could put "Lalala" for the value of x 
  this.x = x || 0;
  this.y = y || 0;
  this.w = w || 1;
  this.h = h || 1;
  this.fill = fill || '#AAAAAA';

  this.image = new Image();
  this.image.src = './images/Cards/2_of_clubs.png';

  this.rotation = 0;
}

// Draws this shape to a given context
Card.prototype.draw = function(ctx) {
  //ctx.fillStyle = this.fill;
  //ctx.fillRect(this.x, this.y, this.w, this.h);
  ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
}

// Determine if a point is inside the shape's bounds
Card.prototype.contains = function(mx, my) {
  // All we have to do is make sure the Mouse X,Y fall in the area between
  // the shape's X and (X + Width) and its Y and (Y + Height)
  return  (this.x <= mx) && (this.x + this.w >= mx) &&
          (this.y <= my) && (this.y + this.h >= my);
}

export default Card;