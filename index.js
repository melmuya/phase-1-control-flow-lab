function scuberGreetingForFeet(someNumber){
  let result
  if (someNumber < 400) {
    result = "This one is on me!";
  }
  else if (2000<someNumber&&someNumber<2500) {
    result = "I will gladly take your thirty bucks."
  }else{result='No can do.'}
  return result
}

function ternaryCheckCity(nameOfCity){
  return nameOfCity === "NYC" ?  "Ok, sounds good." :  "No go.";
}

function switchOnCharmFromTip(passengerTip){
  switch (passengerTip) {
    case passengerTip = "generous":
      return "Thank you so much."
      break;
    case passengerTip = "not as generous":
      return "Thank you.";
      
      break;

    default:
      return "Bye.";
      break;
  }
}