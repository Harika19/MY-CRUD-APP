import React, {useState} from 'react';

const App = ()=> {
  const [items, setItem] = useState([]);
  const [name, setName] =useState('');

  const addItem = (item)=>{
    return setItem([...items, item]);
  }

  const deleteItem = (delItem)=>{
    return setItem(items.filter(item => item!=delItem));
  }


  return(
    <div>
      <h1>
        CRUD App
      </h1>
      <input input="text" value={name} onChange={e =>setName(e.target.value)}/>
      <br/>
      <br/>
      <button onClick={()=> addItem(name)}>Add Item</button>
      <button onClick={()=> deleteItem(name)}> Delete Item</button>
      <div>
        <h2>Result: </h2>
        {items.length? items.map(item=> <div>{item}</div>) : <div>no items</div> }
      </div>
    </div>
  )
}

export default App;