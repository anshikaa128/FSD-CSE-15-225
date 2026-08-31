import Book from "./book.js"
function App(){
   const bookdata=[
    ,{image: "",title:"book1",price:465},
      {image: "",title:"book2",price:565},
      {image: "",title:"book3",price:665},
      {image: "",title:"book4",price:465},
      {image: "",title:"book5",price:565},
      {image: "",title:"book6",price:665},
        
]
    const bookstore=bookdata.map((b)=> {
         return Book(b);
    }
)
const div=React.createElement("div",{className:"bookstore"},bookstore)

return div;
}
export default App;

