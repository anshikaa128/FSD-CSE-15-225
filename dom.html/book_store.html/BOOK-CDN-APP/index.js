function Book(props){
   
  const image = React.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8L7UxiAa4sPHVNoo9KJNuVfUHlT8qIdTdh1VSrXxuj9cQUVBuCmoNA_H&s=10",width:"100px" , height:"100px" })
  const title= React.createElement("h2", {style:{color:"red"}} , props.title);
  const price= React.createElement("h2", {style:{color:"blue"}} , "price:₹"+props.price );
  const btn = React.createElement("button",{style:{color:"green"}}, "AddToCart")
   const div=React.createElement("div",{className:"card"},[image,title,price,btn])
return div;
}
const bookdata=[
    ,{image: "",title:"reactjs",price:465},
      {image: "",title:"expjs",price:565},
      {image: "",title:"reajs",price:665},
        
]
function App(){
    const bookstore=bookdata.map((b)=> {
        Book(b);
    }
)
return bookstore;
}

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(App());