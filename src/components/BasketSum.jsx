
import { useState } from 'react'
import {AlertModal} from './AlertModal'








export function BasketSum({sum,items,setItems}){
    const [modal,setModal]=useState(false)
    const openModal =()=>{
        setModal(true)
    };
    const closeModal =()=>{
        setModal(false)
    };
    return(
        <div>
            {modal && <AlertModal closeModal={closeModal}/>}
            <h4>Итого: {sum}$</h4>
            {items.length > 0 && (<button onClick={openModal}>Заказать</button>)}
        </div>
    )
}
