function Book(props){
   
  const image = React.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8L7UxiAa4sPHVNoo9KJNuVfUHlT8qIdTdh1VSrXxuj9cQUVBuCmoNA_H&s=10",width:"100px" , height:"100px" })
  const title= React.createElement("h2", {style:{color:"white"}} , props.title);
  const price= React.createElement("h2", {style:{color:"blue"}} , "price:₹"+props.price );
  const btn = React.createElement("button",{style:{color:"green"}}, "AddToCart")
   const div=React.createElement("div",{className:"card"},[image,title,price,btn])
return div;
}
export default Book;