
import { useState } from 'react'
import {Info} from './Info.jsx'




export function Product({price,price25,price35,title,uid}){
    const [I,setI]= useState(false);
    const openInfo = ()=>{setI(true)};
    const CloseInfo = ()=>setI(false);
    
    return(
        <div className="Grid-Menu_Cell"  onClick={openInfo}>
            <h3>{title}</h3>
            <p>Цена:{price}$</p>
            {I   && <Info title={title} price={price} price25={price25} price35={price35} onClose={CloseInfo}  uid={uid}/>}
        </div>
        
    )
}