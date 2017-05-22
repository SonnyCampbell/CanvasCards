import CanvasState from './CanvasState'
import Card from './Card'
import Vector from './lib/Vector'

function init() {
  var s = new CanvasState(document.getElementById('canvas'));

  let testCard = new Card(260,600,100,150);

  let hand = [];
  hand.push(testCard);
  hand.push(new Card(260,600,100,150, 'lightskyblue'));
  hand.push(new Card(260,600,100,150, 'black'));
  hand.push(new Card(260,600,100,150, 'red'));

  for(let i = 0; i < hand.length; i++){
      //hand[i].rotation = 90 * i * Math.PI / 180;
      s.addCard(hand[i]);
  }

  // Lets make some partially transparent
  testCard.sx = testCard.x;
  testCard.sy = testCard.y;
  
  setTimeout(() => {
        var startTime = (new Date()).getTime();
        s.animateTo(testCard, startTime, 1, 100, 100);
    }, 1000);

    //console.log(Vector.normalVector(1, 1, 3, 3));
}

init();