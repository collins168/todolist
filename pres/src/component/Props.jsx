import style from "./props.module.css";
export default function Props({item, setItems, items, handleEdit, index}) {
    const clickButton=()=>{
        console.log(item,"was deleted");
        setItems(items.filter((name) => name!==item))
    }
    const editButton=()=>{
        console.log(item, "was edited");
        const newItem=window.prompt('Edit the Item:', item.text)
        const newImageURL=window.prompt("Edit the ImageURL:", item.image)
        if (newItem !== null &&newItem.trim() !== "" && newImageURL !== null & newImageURL.trim() !== "") {
            handleEdit(index,{text: newItem, image: newImageURL})
            
        }
    }
    return(
        <>
        <li className={style.one} >
            <span className={style.two}>{item.text}</span>
            <img src={item.image} alt={item.text} style={{width:"50px", height:"50px"}} className={style.three}/>
            <button onClick={()=>clickButton()} className={style.four}>x</button>
            <button onClick={() => editButton()} className={style.five}>Edit</button>
        </li>
        </>
    )
}