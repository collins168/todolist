import { useState } from "react"
import Props from "./Props"
import style from "./todolist.module.css";
export default function Todolist(){
    const[item, setItem]=useState('')
    const[items, setItems]=useState([])
    const[imageURL, setImageURL]=useState('')
    const submitButton=(e) =>{
        e.preventDefault()
        setItems([...items,{text:item , image:imageURL}])
        setItem('')
        setImageURL('')
    }
    const handleEdit=(index,newItem)=>{
        const updateItem=[...items]
        updateItem[index]=newItem
        setItems(updateItem)
    }
    return(
        <>
      <div className={style.seven}>
      <h1 className={style.one}>TodoList.</h1>
        <form onSubmit={submitButton} className={style.two}>
        <input type="text" placeholder="Enter Task:" value={item} onChange={(e) =>setItem(e.target.value)}className={style.three} />
        <input type="text" placeholder="Enter Image URL:" value={imageURL} onChange={(e) => setImageURL(e.target.value)} className={style.four}/>
        <button disabled={!item.trim() || !imageURL.trim()} className={style.five}>ADD</button>
        </form>
     <ul className={style.six}>
        {items.map((item, index) =>(
            <Props key={index} item={item} setItems={setItems} items={items} handleEdit={handleEdit} index={index}/>
        ))}
     </ul>
      </div>
        </>
    )
}