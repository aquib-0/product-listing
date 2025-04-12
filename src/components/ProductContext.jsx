import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function CountProvider({children}){
    const [count, setCount] = useState(0);

    return (
        <ProductContext.Provider value={{count, setCount}}>
            {children}
        </ProductContext.Provider>
    );
}

export function useCount()
{
    return useContext(ProductContext);
}