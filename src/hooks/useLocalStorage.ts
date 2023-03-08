import { useState } from 'react';

export function useLocalStorage( itemName:string, initialForm:unknown ) {
    const localStorageTodos = localStorage.getItem(itemName);
    let parsedItem;

    if(!localStorageTodos) {
        parsedItem = initialForm;
        localStorage.setItem(itemName, JSON.stringify(parsedItem))
    } else {
        parsedItem = JSON.parse(localStorageTodos);
    }
    
    const [item, setItem] = useState(parsedItem);

    const saveItem = ( newItem:unknown ) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return [ item, saveItem ];
}