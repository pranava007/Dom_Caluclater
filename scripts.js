let main = document.getElementsByTagName("main");
console.log(main);

let head = document.createElement("h1");
let para = document.createElement("p");
let navbar = document.createElement("nav");

let firstdiv = document.createElement("div");
let div = document.createElement("div");
let display = document.createElement("input");
let btn_c = document.createElement("button");
let btn_arrow = document.createElement("button");
let btn_dont = document.createElement("button");
let btn_multi = document.createElement("button");
let btn_7 = document.createElement("button");
let btn_8 = document.createElement("button");
let btn_9 = document.createElement("button");
let btn_slce = document.createElement("button");
let btn_4 = document.createElement("button");
let btn_5 = document.createElement("button");
let btn_6 = document.createElement("button");
let btn_sub = document.createElement("button");
let btn_1 = document.createElement("button");
let btn_2 = document.createElement("button");
let btn_3 = document.createElement("button");
let btn_plus = document.createElement("button");
let btn_zero = document.createElement("button");
let btn_twozero = document.createElement("button");
let btn_equal = document.createElement("button");

head.innerText="DOM Calculator";
head.style=`text-align: center;`
head.setAttribute("id","title")
para.innerHTML="This is Calculator task created using DOM"
para.setAttribute("id","description")
para.style=`text-align:center;`



display.style = `grid-column: span 4;
height: 70px;
width: 260px;
background-color: #ecf0f3;
box-shadow: inset -5px -5px 12px #ffff,
inset 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 30px;
color: rgb(70,70,70);
font-size: 50px;
text-align: end;
margin: auto;
margin-top: 40px;
margin-bottom: 30px;
padding: 20px;`;
display.type = "text";
display.placeholder = "0";
display.id='result';   //hdgg

firstdiv.id = "firstDIV";
firstdiv.className = "containr";
div.className = "caluclator";
// c  button

btn_c.type = "button";
btn_c.setAttribute("onclick","Clear()")
btn_c.innerText = "C";
btn_c.id = "clear";
btn_c.style = `height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
// arrow button
btn_arrow.type = "button";
btn_arrow.setAttribute("onclick","del()")
btn_arrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>`;
btn_arrow.id = "arro";
btn_arrow.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//dot button
btn_dont.type = "button";
btn_dont.setAttribute("onclick","dis('.')")
btn_dont.id = "dot";
btn_dont.innerText = ".";
btn_dont.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//mutible button
btn_multi.type = "button";
btn_multi.setAttribute("onclick","dis('*')")
btn_multi.id = "mul";
btn_multi.innerText = "X";
btn_multi.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//seven button
btn_7.type = "button";
btn_7.setAttribute("onclick","dis('7')")
btn_7.innerText = "7";
btn_7.id = "sevenn";
btn_7.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//eight_button
btn_8.type = "button";
btn_8.setAttribute("onclick","dis('8')")
btn_8.innerText = "8";
btn_8.id = "eightt";
btn_8.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//nine_buttom
btn_9.setAttribute("onclick","dis('9')")
btn_9.type = "button";
btn_9.innerText = "9";
btn_9.id = "nine";
btn_9.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//slash_button
btn_slce.setAttribute("onclick","dis('/')")
btn_slce.type = "button";
btn_slce.innerText = "/";
btn_slce.id = "slash";
btn_slce.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//four_button
btn_4.setAttribute("onclick","dis('4')")
btn_4.type = "button";
btn_4.innerText = "4";
btn_4.id = "four";
btn_4.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//five_button
btn_5.setAttribute("onclick","dis('5')")
btn_5.type = "button";
btn_5.innerText = "5";
btn_5.id = "five";
btn_5.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//six_button
btn_6.setAttribute("onclick","dis('6')")
btn_6.type = "button";
btn_6.innerText = "6";
btn_6.id = "six";
btn_6.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//sub_button
btn_sub.setAttribute("onclick","dis('-')")
btn_sub.type = "button";
btn_sub.innerText = "-";
btn_sub.id = "subtract";
btn_sub.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//one_button
btn_1.setAttribute("onclick","dis('1')")
btn_1.type = "button";
btn_1.innerText = "1";
btn_1.id = "onee";
btn_1.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//two_button
btn_2.setAttribute("onclick","dis('2')")
btn_2.type = "button";
btn_2.innerText = "2";
btn_2.id = "twoo";
btn_2.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//three_button
btn_3.setAttribute("onclick","dis('3')")
btn_3.type = "button";
btn_3.innerText = "3";
btn_3.id = "threee";
btn_3.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//plus_button
btn_plus.setAttribute("onclick","dis('+')")
btn_plus.type = "button";
btn_plus.innerText = "+";
btn_plus.id = "add";
btn_plus.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//zero_button
btn_zero.setAttribute("onclick","dis('0')")
btn_zero.type = "button";
btn_zero.innerText = "0";
btn_zero.id = "zero";
btn_zero.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//twozero_button
btn_twozero.setAttribute("onclick","dis('00')")
btn_twozero.type = "button";
btn_twozero.innerText = "00";
btn_twozero.id = "twozero";
btn_twozero.style = `   height: 48px;
width: 48px;
background-color: #ecf0f3;
box-shadow: -5px -5px 12px #ffff,
 5px 5px 12px rgba(0, 0, 0, .16);
border: none;
border-radius: 50%;
margin: 8px;
font-size: 16px;`;
//equal_button
btn_equal.setAttribute("onclick","caluclate()")
btn_equal.type = "button";
btn_equal.innerText = "=";
btn_equal.id = "equal";
btn_equal.className='equals';


div.append(
  
  display,
  btn_c,
  btn_arrow,
  btn_dont,
  btn_multi,
  btn_7,
  btn_8,
  btn_9,
  btn_slce,
  btn_4,
  btn_5,
  btn_6,
  btn_sub,
  btn_1,
  btn_2,
  btn_3,
  btn_plus,
  btn_zero,
  btn_twozero,
  btn_equal
);

navbar.append(head,para);
console.log(navbar)



firstdiv.append(div);

document.body.append(navbar);
document.body.append(firstdiv);
console.log(div);

// start Logic

let outputScreen = document.getElementById("result")

function dis(num){

  outputScreen.value += num;

}

function caluclate(){
  try{
    outputScreen.value = eval(outputScreen.value);
  }
  catch(error){
      alert('invalid')
  }
}

function Clear(){
  outputScreen.value = '';
}

function del(){
  outputScreen.value = outputScreen.value.slice(0,-1);
}