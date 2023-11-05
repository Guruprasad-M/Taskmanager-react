
import  Header  from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
function App() {

 

                             const storedItems = JSON.parse(localStorage.getItem('todo_list'));
const [items, setItems] = useState(storedItems || []);
);
  );

  const [newItem,setNewItem]=useState('')

  const addItem=(item)=>{
    const id = items.length ? items[items.length-1].id + 1:1
    const addNewItem ={id,checked:false,item}
    const listItems = [...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify
    (listItems))

  }

  const handleCheck=(id)=>{
   const listItems =items.map((item)=>item.
   id===id? {...item,checked:!item.checked} : item)
   setItems(listItems)
   localStorage.setItem("todo_list",JSON.stringify
    (listItems))
  }

  const handleDelete=(id)=>{
    const listItems=items.filter((item)=>item.
    id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify
    (listItems))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submiited')
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')
  }
 
  return (
    <div className='App' >
    <Header title='To do list'/>
    <AddItem 
    newItem = {newItem}
    setNewItem = {setNewItem}
    handleSubmit = {handleSubmit}
    
    />
    <Content 
    items={items}
    handleCheck={handleCheck}
    handleDelete={handleDelete}
    />
    <Footer
    length ={items.length}
    />
    </div>
  );
}

export default App;
