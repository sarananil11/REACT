import { createContext, useReducer } from "react";

export const CartContext = createContext();

const products = [
    { id: 1, name: "Apple", price: 30 },
    { id: 2, name: "Orange", price: 20 },
    { id: 3, name: "Banana", price: 50 },
    { id: 4, name: "Mango", price: 40 },
];

function reducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            const existing = state.find((item) => item.id === action.payload.id);
            if (existing) {
                return state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                ); // if item is existing and added , only the qty increases instead of it adding again.
            };
            return [...state, { ...action.payload, qty: 1 }]; // else if the item is non existing and added, it adds new item into the array.
        };

        case "REMOVE_ITEM": {
            // action.payload is expected to be the id of the item to remove
            return state.filter((item) => item.id !== action.payload);
        }


        case "INCREASE": {
            return state.map((item) =>
                item.id === action.payload ? { ...item, qty: item.qty + 1 } // if add button is clicked for existing item, the qty increases.
                    : item);
        };

        case "DECREASE": {
            return state.map((item) =>
                item.id === action.payload && item.qty > 1
                    ? { ...item, qty: item.qty - 1 } : item); // even if we decrease the qty, it should not be less than 1.
        };


        case "RESET": {
            return []; // if we reset, it returns empty array.

        }


        default:
            return state;
    }
}

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(reducer, []);
    return (
        <CartContext.Provider value={{ cart, dispatch, products }}>
            {children}
        </CartContext.Provider>
    )
}