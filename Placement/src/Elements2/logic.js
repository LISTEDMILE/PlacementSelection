function addskill(){
    const para = document.createElement("input");
para.setAttribute("placeholder","Skill")
const element = document.getElementById("skills");
element.appendChild(para);
}
export{addskill}
