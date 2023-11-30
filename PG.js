const down=document.querySelector('#down');
const outputElement=document.querySelector('#output');
const btnCopy=document.querySelector('#btnCopy');
const passwordLengthElement=document.querySelector('#length');
const numberElement=document.querySelector('#number');
const captialElement=document.querySelector('#captial');
const smallElement=document.querySelector('#small');
const symbolElement=document.querySelector('#symbol');
const frm=document.querySelector('#frm');

var arr="Passwords Generated:  \n";

//Button Click to copy password
btnCopy.addEventListener('click',async()=>{
  const pass=outputElement.value;
  if(pass)
  {
      await navigator.clipboard.writeText(pass);
      alert("Copied to clipboard");
  }
  else
    alert("There is no password to copy");
});

down.addEventListener('click',async()=>{downloadfile()});

function downloadfile()
{
  const text = arr; // Convert array to string with new lines
  const blob = new Blob([text], {type: 'text/csv'}); // Create a Blob object with the string
  const link = window.document.createElement('a'); // Create a download link
  link.href = window.URL.createObjectURL(blob); // Set the link URL to the Blob object URL
  link.download = 'generatedpasswordslist.txt'; // Set the download filename
  link.click(); // Trigger the download by clicking the link
}


function generateRandomChar(min,max)
{
  const limit=max-min+1;
  return String.fromCharCode(Math.floor(Math.random()*limit)+min);
}

function captitalValue(){
  return generateRandomChar(65,90);
}
function smallValue(){
  return generateRandomChar(97,122);
}
function numberValue(){
  return generateRandomChar(48,57);
}

function symbolValue(){
  const symbols="~!@#$%^&*()_+|}{<>*./";
  return symbols[Math.floor(Math.random()*symbols.length)];
}


const functionArray=[
  {
    element:numberElement,
    fun:numberValue
  },
  {
    element:captialElement,
    fun:captitalValue
  },
  {
    element:smallElement,
    fun:smallValue
  },
  {
    element:symbolElement,
    fun:symbolValue
  }


];


frm.addEventListener('submit',(e)=>{
  e.preventDefault();
  
  const limit=passwordLengthElement.value;


  let generatedPassword="";

  const funArray=functionArray.filter(({element})=>element.checked);
  
  for(i=0;i<limit;i++)
  {
    const index=Math.floor(Math.random()*funArray.length);
    const letter=funArray[index].fun();
    generatedPassword+=letter;
  }

  arr+=(generatedPassword+"\n");
  var textarea=document.getElementById("GP");
  textarea.value=arr;
  outputElement.value=generatedPassword;
});