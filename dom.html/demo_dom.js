function addparagraph() {
    const para=document.createElement("p");
    para.innerText="This is my first paragraph.";
    para.style.color="purple";
    const parent=document.getElementById("para");
    parent.appendChild(para);

}
function removeparagraph() {
   const parent=document.getElementById("para");
    parent.removeChild(parent.lastChild);
}
function Allremoveparagraph() {
    const parent=document.getElementById("para");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}