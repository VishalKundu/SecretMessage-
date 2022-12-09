const greetings = ['you are a fucking CHAD brooo 😎😎','is fucking sexy','likes to suck my 🍆','sona jao giye amul er dudh kheye eso age','100 rupay bhej nhi toh tu gay hei'];

const special = ["Your hand looks lonely. Can I hold it for you?","So tell me Tania, do you have a sunburn, or are you just always this hot?","Tania U R A Q T 😘😍","Tere nazron ne dil ka kiya jo hashar. Asar ye hua aaa aaaa aaaa.","Are baas kar vi aur kinti tarif karun?"];

const normal = ["I value your insight.","Main toh tereko harami samjha tha tu toh dev manus nikla re","amar 100 takata fetor de","keno jani na tor mukh ta dekhlei kemon balo balo mone hoi","is a magician but 'cian' is silent","buke aye vi","nijer paye dara"]

const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');
var c = 0;

btn.addEventListener('click', () => {
  const searchName = input.value.toLowerCase();
  input.value = '';
  input.focus();
  para.textContent = '';
  
  
  if (searchName === '') {
   para.textContent = 'Enter Your Name';
  }
  
  else if (searchName === 'tania'||searchName === 'Tania') {
    
    const firstLetter = searchName.slice(0,1);
    const lastLetters = searchName.slice(1,searchName.length);  
    
    if(c<=2){
      let secretMsg = special[Math.floor(Math.random()*special.length)];
      para.textContent = secretMsg;
      c = c + 1;
    }
    
    else if(c=3){
      para.textContent = special[special.length-1];
      c = c + 1;  
    }
   
    if(c>3){
      const Msg = normal[Math.floor(Math.random()*normal.length)];
      para.textContent = firstLetter.toUpperCase()+lastLetters+' '+Msg;
      c = c + 1;
    }
  }
  
  else {
    //c = 0;
    const firstLetter = searchName.slice(0,1);
    const lastLetters = searchName.slice(1,searchName.length);
    if(c<=2){
      const secretMsg = normal[Math.floor(Math.random()*normal.length)];
      para.textContent = firstLetter.toUpperCase()+lastLetters+' '+secretMsg;
      c = c + 1;
    }

    else {
      const secretMsg = greetings[Math.floor(Math.random()*greetings.length)];
      para.textContent = firstLetter.toUpperCase()+lastLetters+' '+secretMsg;
    }    
  }
});
