
import './Info.css'
import  { useContext,useState } from 'react'
import {basketContext} from '../App.jsx'




export function Info ({title,price,price25,price35,onClose,uid,pizzaBig,pizzaText,pizzaLittle,startAnimation,finishAnimation}){
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
            item.uid === uid  && item.size === butsize
        ))
        
        if(indexItem == -1){
        const newItems = [...items ,{uid,price:butprice,size:butsize,title,qty:1,pizzaLittle}]
        setItems(newItems) 
        } else { 
        const newItems = [...items];
        newItems[indexItem] = {
            ...newItems[indexItem],
            qty: newItems[indexItem].qty+1
        };
        setItems(newItems)
        }

        startAnimation()
        if (typeof onClose === 'function') {}
        onClose();
        setTimeout(() => {finishAnimation()}, 1000);

    }
    return (
            <div className='info' onClick={(ev) => ev.stopPropagation()}> 
                <div className='info_content'>

                    <button className='info_content__button' onClick={onClose}>X</button>

                    <div className='info_content_Fleximg'>
                        <img src={pizzaBig} alt="" />
                    </div>

                    <h3>{title}</h3>
                    <p>{pizzaText}</p>
                    
                    <div className='info_buttons'>
                        <ul className='info_buttons__ul'>
                            <li><button onClick={()=>SizeClick(25)} style={{backgroundColor: butsize === 25 ? '#ffddbb' : '#fff'}}>25см</button></li>
                            <li><button onClick={()=>SizeClick(30)} style={{backgroundColor: butsize === 30 ? '#ffddbb' : '#fff'}}>30см</button></li>
                            <li><button onClick={()=>SizeClick(35)} style={{backgroundColor: butsize === 35 ? '#ffddbb' : '#fff'}}>35см</button></li>
                        </ul>
                        <button className='info_buttons__ButAdd' onClick={AddToBasket} >В корзину + {butprice}$</button>
                    </div>
                </div>
            </div>
        
    
    );
}