import './BasketSum.css'
import { useState } from 'react'
import {AlertModal} from './AlertModal'








export function BasketSum({sum,items,openModal}){
    // const [modal,setModal]=useState(false)
    // const openModal =()=>{
    //     setModal(true)
    // };
    // const closeModal =()=>{
    //     setModal(false)
    // };
    return(
        <div className='BasketSum'>
            {/* {modal && <AlertModal closeModal={closeModal}/>} */}
            
            {items.length > 0 && <button className='BasketSum__openModal' onClick={openModal}>Оформить заказ</button>}

            <h4>Итого: {sum}$</h4>
            
        </div>
    )
}
