
import './Info.css'
import  { useContext,useState } from 'react'
import {basketContext} from '../App.jsx'




export function Info ({title,price,price25,price35,onClose,uid}){
    const {items,setItems} = useContext(basketContext)
    const[butsize,setButSize]=useState(30)
    const[butprice,setButPrice]=useState(price)

    const SizeClick = (size) => {
        setButSize(size);
        switch(size) {
            case 25:
                setButPrice(price25);
                break;
            case 30:
                setButPrice(price);
                break;
            case 35:
                setButPrice(price35);
                break;
            default:
                setButPrice(price);
        }
    }

    const AddToBasket = ()=>{
        const indexItem = items.findIndex(item=>(
            item.uid == uid  && item.size === butsize
        ))
        if(indexItem == -1){
        const newItems = [...items ,{uid,price:butprice,size:butsize,title,qty:1}]
        setItems(newItems) 

        // if (typeof onClose === 'function') {}
        onClose();
        
        
        } else {
        const newItems = [...items]
        newItems[indexItem].qty++
        setItems(newItems) 

        // if (typeof onClose === 'function') {}
        onClose();
        
        }
        
    }
    return (
            <div className='info' onClick={(ev) => ev.stopPropagation()}> 
                <button onClick={onClose}>X</button>

                <h3>{title}</h3>
                <p>Пикантная бла бла блааа</p>
                <ul>
                    <li><button onClick={()=>SizeClick(25)}>25см</button></li>
                    <li><button onClick={()=>SizeClick(30)}>30см</button></li>
                    <li><button onClick={()=>SizeClick(35)}>35см</button></li>
                </ul>
                <button onClick={AddToBasket} >Добавить +{butprice}$</button>
            </div>
        
    
    );
}