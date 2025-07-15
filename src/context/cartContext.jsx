import { createContext, useContext, useState } from "react";


// const [cart, setCart] = useState([])
// cart와 setCart를 cartContext에서 전역변수로 지정해놓고

// 다른 파일에서 쓰려면 
// import { useCart } from "../context/cartContext";
// const { cart, setCart } = useCart(); 추가하기

//function() 인자로 넘기는 건 props로 상태 전달할 때 쓰는 거니까 전역으로 설정한 건 지워도 됨.



const cartContext = createContext()

export const  CartProvider = ( {children} ) => {
    const [cart, setCart] = useState([])

    function addToCart(item) {
        // setCart([...cart, { options, quantity, id: modalMenu.id}])
        // 일 때는 우리가 조합을 한 거지만
        setCart( [...cart, item] )
        //객체를 통째로 넘김 (?)
    }

    function removeFromCart (id) {
        setCart(cart.filter((el) => id !== el.id));
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </cartContext.Provider>
    )
}

export function useCart() {
    return useContext(cartContext) 
}