import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const UserContext = createContext()

export const UserProvider = ({children})=>{

    const [cart, setCart] = useState([])
    console.log(cart);
    
    const addCart = (item) => {
    setCart((prev) => {
        const existingCart = prev.find((p) => p.id === item.id);

        if (existingCart) {
            return prev.map((p) =>
                p.id === item.id
                    ? { ...p, quantity: p.quantity + 1 }
                    : p
            )
        } else {
            return [...prev, { ...item, quantity: 1 }];
        }
    })

    toast.success("Cart Added");
}
    
const increaseQTY = (id) =>{
    setCart((prev) =>
        prev.map((p) =>
            p.id === id
                ? { ...p, quantity: p.quantity + 1 }
                : p
        )
    )
}

const decreaseQTY = (id) => {
    setCart((prev) =>
        prev.map((p) =>
            p.id === id
                ? { ...p, quantity: p.quantity - 1 }
                : p
        )
    )
}

    const itemDelete = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
}

    return(
        <UserContext.Provider value={{addCart,cart,itemDelete,increaseQTY,decreaseQTY}}>
            {children}
        </UserContext.Provider>
    )
}
