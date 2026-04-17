import './Product.css'
import { useState } from 'react'
import {Info} from './Info.jsx'




export function Product({price,price25,price35,title,uid,pizza,pizzaBig,pizzaText,pizzaLittle}){
    const [I,setI]= useState(false);
    const openInfo = ()=>{setI(true)};
    const CloseInfo = ()=>setI(false);

    const[animation,setAnimation]=useState(false)//анимация
    const startAnimation = ()=>{setAnimation(true)} //запуск анимации
    const  finishAnimation = ()=>{setAnimation(false)} //конец анимации
    
    return(
        <div className="Product_Cell"  onClick={openInfo}>
            
            <div className='Product_picture'>
                <img src={pizza} alt="" />
                {animation && <img style={{width:'300px',height:'300px',position: "absolute",zIndex:1000,animation:"AddBaskedAnimation 1s forwards"}}  src={pizza} alt="" />}
            </div>
            
            <div className='Product_text'>
            <h3>{title}</h3>
            <p>Цена:{price}$</p>
            </div>
            {I   && <Info title={title} price={price} price25={price25} price35={price35} onClose={CloseInfo}  uid={uid} pizzaBig={pizzaBig} pizzaText={pizzaText} pizzaLittle={pizzaLittle} startAnimation={startAnimation} finishAnimation={finishAnimation}/>}
        </div>
        
    )
}