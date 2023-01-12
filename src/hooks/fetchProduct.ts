import { useEffect,useMemo,useState } from "react"
import { IProduct } from "../models"
import axios,{AxiosError} from "axios"

export function useProduct(){
    const[products,setProducts]=useState<IProduct[]>([])
    const [loading,setLoading]= useState(false)
    const [error,setError]= useState('')
    const [filtered,setFiltered]= useState<IProduct[]>([])
    const [isFilterOn,setisFilterOn]= useState(false)
   


    function addProduct (product:IProduct){
      setProducts(prev=>[...prev,product])
    }

    function filterProducts (category: string) {
     
      // setFiltered (products.filter(e=>e.category == category))
      setFiltered (products.filter(e=>e.category === 'electronics'))
      setisFilterOn(prev=>!prev)
      setProducts(filtered)
     
      // console.log( products.filter(e=>e.category == category))
      console.log( products)
      
    }
  
   

  
  async function fetchProducts() {
    try {
    setError("")
    setLoading(true)
    
    const  response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?')
    
    
    setProducts(response.data)
    setLoading(false)
    } catch (e:unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }
  
  useEffect(()=>{
   fetchProducts()
  },[])

  useEffect(()=>{
    setProducts(filtered)
    // console.log(products)
   },[isFilterOn])


  return {products,filterProducts,error,loading,addProduct}
}