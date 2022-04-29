import React,{useState,useEffect} from "react"


const Todos=()=>{
    const[inputData,setInputData]=useState('');
    const [items,setItems]=useState([]); 
    const [time,setTime]=useState(new Date());
    const locale='en';

const addItem=()=>{
      if(!inputData){
                          
      }else{
        const allInputData={id:new Date().getTime().toString(),name:inputData}
    setItems([...items,allInputData]); 
    setTime(time = time.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' }))
    setInputData('')
      }
}
const deleteItem=(index)=>{
    const updateditems=items.filter((elem)=>{
        return index!==elem.id 
    });
    setItems(updateditems);
}
const searchBtn=()=>{
  if(items && inputData.value){
      setItems(inputData.value);
  }
}
 useEffect(() => {
    const timer = setInterval(() => {
    
    setTime(new Date());
  }, 60 * 1000);
  return () => {
    clearInterval(timer); 
  }
}, []);

return(
    <>
    <div className="menu">
    <div>
            <input className="addMenu"type="text"placeholder="add item here" value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
            <button className="sideMenu" type="button" onClick={addItem}>additem</button>
    </div>
    <div>
    <ul>
        { items.sort((a,b)=>{
            return a.localCompare(b)
        })
        .items.map((elem)=>{
            return(
                <div className="item">
                <li key={elem.id}>{elem.name}{time}
                <button onClick={()=>deleteItem(elem.id)}>deleteitem</button>
                </li>
                </div>
            )
        })
    }
    </ul>
    <div>
        <input type='text'onChange={searchBtn}>search</input>
    </div>
    </div>
    </div>
   
    </>
)
}
export default Todos;