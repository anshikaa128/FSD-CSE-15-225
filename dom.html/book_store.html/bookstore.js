function book{

const div=document.getElementById("div");
div.setAttribute("class","book");
const image= document.createElement("img");
image.setAttribute("src","book.jpg");
image.setAttribute("width","40px");
image.setAttribute("height","200px");
const h2 = document.createElement("h2");
h2.innerText=" price: $10";
const bt = document.createElement("button");
bt.innerText="add to cart";
div.appendChild(image);
div.appendChild(h2);
div.appendChild(bt);
return
}
