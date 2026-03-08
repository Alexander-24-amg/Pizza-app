import './Product.css'
import { useState } from 'react'
import {Info} from './Info.jsx'




export function Product({price,price25,price35,title,uid,pizza,pizzaBig,pizzaText,pizzaLittle}){
    const [I,setI]= useState(false);
    const openInfo = ()=>{setI(true)};
    const CloseInfo = ()=>setI(false);
    
    return(
        <div className="Product_Cell"  onClick={openInfo}>
            
            <div className='Product_picture'>
                <img src={pizza} alt="" />
            </div>
            
            <div className='Product_text'>
            <h3>{title}</h3>
            <p>Цена:{price}$</p>
            </div>
            {I   && <Info title={title} price={price} price25={price25} price35={price35} onClose={CloseInfo}  uid={uid} pizzaBig={pizzaBig} pizzaText={pizzaText} pizzaLittle={pizzaLittle}/>}
        </div>
        
    )
}