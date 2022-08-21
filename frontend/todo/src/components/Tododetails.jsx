import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Tododetails = () => {
    const {id} = useParams() 
    // console.log(crudId) 
    const navigate = useNavigate()
    const [store, storeData] = useState([])
    // console.log(store[0]?.title)
    const [value, setValue] = useState()
    const { isOpen, onOpen, onClose } = useDisclosure()

    // const initialRef = React.useRef(null)
    // const finalRef = React.useRef(null)
  

    const getData = () => {

     fetch(`https://safe-coast-92932.herokuapp.com/crud/edit/${id}`,{
        method:"GET",
        headers : {"content-type":"application/json"}

     })
     .then(r => r.json()).then(r=>storeData(r.data))
     
     .catch(err=>console.log(err))

    }
    const handleDelete =() => {
    // console.log(id)
    fetch(`https://safe-coast-92932.herokuapp.com/crud/edit/${id}`, {
      method:"DELETE",
      headers:{"Content-Type":"application/json"}
    }).then(r=>r.json()).then(r=>navigate("/"))
    
    }
    const handleEdit =() => {
      const payload = {title:value}
      fetch(`https://safe-coast-92932.herokuapp.com/crud/edit/${id}`, {
        method:"PATCH",
        body: JSON.stringify(payload),
        headers:{"Content-Type":"application/json"}
      }).then(r=>r.json()).then(r=>navigate("/"))


      
    }
    
    
useEffect(() => {
  getData()
}, [])


  return (
    <>
    <div>Tododetails
    {store.map((e)=> {
       return <div><p>{e.title}</p> 
       {/* <button onClick={handleEdit}>Edit</button> */}
       
       </div>
    })}
    </div>
    <Button onClick={onOpen}>Edit</Button>
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}
<Button onClick={handleDelete}>Delete</Button>
      <Modal
        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Your Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Task</FormLabel>
              <Input value={value} placeholder='Enter Your Task' onChange={(e)=>setValue(e.target.value)}/>
            </FormControl>

            {/* <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleEdit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Tododetails