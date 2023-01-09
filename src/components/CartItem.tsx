import { spawn } from "child_process"
import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { useProduct } from "../hooks/fetchProduct"

type CartItemProps ={
    id:number
    quantity:number
}

export function CartItem ({id,quantity}:CartItemProps){
    const {removeFromCart,increaseItemQuantity,decreaseItemQuantity} = useShoppingCart()
    const {products}=useProduct()

    const item =products.find(i=> i.id === id)
    if (item == null) return null

    return(
        <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
            <img src={item.image} alt={item.title} style={{width: '70px', height:'85px',objectFit:'contain'}} />
            <div className="me-auto">
                <div>
                    {item.title}  <span className="text-muted" style={{fontSize:'.60rem'}}> x {quantity} </span>
                    
                </div>
                <Button variant="none-border" onClick={()=>decreaseItemQuantity(item.id)} size="sm">
                        -
                    </Button>
                     <Button variant="none-border" onClick={()=>increaseItemQuantity(item.id)} size="sm">
                        +
                    </Button>
                <div className="text-muted" style={{fontSize:'0.70rem'}}>
                    $ {item.price}
                    
                   
                </div>
            </div>
            <div>
                ${+(item.price*quantity).toFixed(2)}
            </div>
            <Button variant="outline-danger" onClick={()=>removeFromCart(item.id)} size="sm">
                x
            </Button>


        </Stack>
    )

}