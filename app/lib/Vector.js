function Vector(x1, y1) {
    this.x1 = x1;
    this.y1 = y1;
}

Vector.direction = function(x1, y1, x2, y2){
    return { x: (x2 - x1),
             y: (y2 - y1) };
}

Vector.distance = function(x1, y1, x2, y2){
    let xd = x2 - x1;
    let yd = y2 - y1;

    return Math.sqrt( (xd * xd) + (yd * yd));
}

Vector.normalVector = function(x1, y1, x2, y2){

    let theDirection = Vector.direction(x1, y1, x2, y2);
    let theDistance = Vector.distance(x1, y1, x2, y2);

    return { x: theDirection.x / theDistance, 
             y: theDirection.y / theDistance }
}

export default Vector;