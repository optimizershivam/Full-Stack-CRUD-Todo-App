import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { Button,Input } from '@chakra-ui/react'

const Todoapp = () => {
    const [todo,seTodo] = useState("")
    const [data, setData] = useState([])
    
    const handleSubmit = async () => {
        const payload = {title:todo}
        await fetch("https://safe-coast-92932.herokuapp.com/crud/create", {
          method:"POST",
          body:JSON.stringify(payload),
          headers:{"Content-Type":"application/json"}
        })
        .then(r=>r.json()).then(r=>{fetchData()})
        .catch(err=>console.log(err))
    }
    const fetchData =() => 
    {
         fetch("https://safe-coast-92932.herokuapp.com/crud", {
          method:"GET",
          headers:{"Content-Type":"application/json"}
    })
    .then(r=>r.json()).then(r=>{setData(r.data)})
    .catch((err)=>console.log(err))
    }
   useEffect (()=> {
      fetchData()
   },[])

   
  return (
    <><h1>Todo</h1>
    
    <Input w="100" type="text" value={todo} placeholder='Enter Your Task Here' onChange={(e)=>seTodo(e.target.value)}></Input>
    <Button onClick={handleSubmit}>Add</Button>
    <div>
      {data.map((e)=>{return <Link to={`/details/${e._id}`} key={e._id}><p>{e.title} </p> </Link>})}
    </div>
    
    
    </>

  )
}

export default Todoapp