import React from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { IProduct } from "../models";


const productData: IProduct = {
  id:290,
  title:'',
  price:30.3,
  description:"very beautiful",
  category:"electronics",
  image:'none',
  rating: {
      rate:43,
      count:10
    }
}

interface CreateProductProps {
  onCreate: (product:IProduct)=> void
}




export function CreateProduct({onCreate}:CreateProductProps){

  const [value, setValue]=useState('')
  const [error,setError]=useState('')

  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(event.target.value)
  }

  // to prevent page reloading:
  const submitHandler = async (event: React.FormEvent)=> {
    event.preventDefault()
    setError('')

    if (value.trim().length ===0) {
      setError('Please enter valid title')
      return
    }

    productData.title=value
    const response = await axios.post <IProduct> ('https://fakestoreapi.com/products',productData)
    onCreate(response.data)
  }


    return (
        <Form className="p-3" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product name</Form.Label>
          <Form.Control  value={value} onChange={changeHandler} type="text" placeholder="Enter product name" />
          {error && <p className='text-center text-danger'>{error}</p>}
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter price" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    )
}