import React,{useState} from 'react'
import './style.css';
function Form() {
   const[input,setInput] = useState("")
   const [change,setChage] = useState(false)
   const [data , setData] = useState([])
   const eventListener = (event)=>{
       event.preventDefault()
       setData([...data ,input ])
       setChage(true)
       setInput("")
   }
  return (
    <>
    <div className='main-container'>
  
      <form className='main-form'>
      
        <div className='search'>
          {/* <figure> <i className="fa-duotone fa-list-dropdown" /> </figure> */}
            <input className='searchBox' type="text" value={input} placeholder='Type' onChange={(event)=>{setInput(event.target.value )}}/>
            <span className='enter'><i className="fa-solid fa-plus" onClick={eventListener}/></span>
        </div>  
        <div className='itemList'>
             {change && (
                 <div>
                   <ul>
                   {data.map((character, index) => {return(
                   <li key={index}>{character}</li>
                   )})}
                   </ul>
                 </div>
             )}  
        </div>
        
      </form>
    </div>     
    </>
  )
}

export default Form
