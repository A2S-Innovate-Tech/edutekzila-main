import "./ProjectCategoriesBar.css"
import { useState } from "react";


function ProjectCategoriesBar() {
  const [category,setCategory] = useState("All");

  const projectCategories = ["All","Web","App","UI/UX"];
  
  const changeCategory =(category)=>{
    setCategory(category);
  }

  return (
    <div className="Project-Categories-Bar">
      {
        // <button key={"All"} onClick={()=>changeCategory("All")}>{"All"}</button>
        projectCategories.map((category)=>{
          return <button key={category} onClick={()=>changeCategory(category)} >{category}</button>
        })
      }
     
    </div>
  );
}

export default ProjectCategoriesBar;
