import "./ProjectCategoriesBar.css"

function ProjectCategoriesBar({setProjectCategory, selectedCategory}) {
    const projectCategories = ["All","Web","App","UI/UX"];
    const changeProjectCategory =(category)=>{
        setProjectCategory(category);
    }
    return (
        <div className="Project-Categories-Bar">
            {
                projectCategories.map((category)=>{
                    return <button className={(selectedCategory===category ?"Selected":"Not-Selected")} key={category} onClick={()=>changeProjectCategory(category)} >{category}</button>
                })
            }
        
        </div>
    );
}

export default ProjectCategoriesBar;
