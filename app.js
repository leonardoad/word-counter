
function countWords(){
  let val   = document.getElementById("text").value;
  let text   = val.replace(/ +(?= )/g,'');
  let words  = text.split(" ");
  let num    = words.length;
  let countDisplay = document.getElementById("countDisplay");
  if(num === 1){
      countDisplay.innerHTML = "1 word";
  }else if(num > 1) {
    countDisplay.innerHTML = num + " words";
  }else{
    countDisplay.innerHTML = "0 words";
  }
}
