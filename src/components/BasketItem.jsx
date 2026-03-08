import './BasketItem.css'
import {BasketSum} from './BasketSum'


export function BasketItem({uid,title,price,qty,items,setItems,size,pizzaLittle,sum}){
    
    const Subtract= ()=>{
        const newItems=[...items]
        if(newItems.filter(item=>item.uid === uid)[0].qty > 1){
        newItems.filter(item=>item.uid === uid)[0].qty--
        }
        setItems(newItems)
    }

    const Addition= ()=>{
        const newItems=[...items]
        newItems.filter(item=>item.uid === uid)[0].qty++
        setItems(newItems)
    }
    
    const removePosition =(ev)=>{
        ev.preventDefault()
        // const newItems=[...items].filter(item=>item.uid != uid )
        const newItems=[...items].filter(item=>!(item.uid === uid && item.size === size) )
        setItems(newItems)
    }
    return(
        <div className="BasketItem">
                <div className='BasketItem_product'>
                    <div className='BasketItem_foto'>
                        <img src={pizzaLittle} alt=""style={{width:'150px',height:'150px'}}/>
                    </div>

                    <div className='BasketItem_text'>
                        <p className='BasketItem_text__title'>{title}</p>
                        <p className='BasketItem_text__size'>{size}см</p>
                    </div>
                </div>
                
                <div className="BasketItem_Flex">
                    <p className="BasketItem_Price">Цена {price}$</p>
                    
                    <div className="BasketItem_Qty">
                        <button onClick={Subtract}>-</button>
                        <span>{qty}</span>
                        <button onClick={Addition}>+</button>
                    </div>
                    
                    {/* <div className="">{price*qty}</div> */}
                    <div className="BasketItem_Remove">
                        <a href="#" onClick={removePosition}>Убрать</a>
                    </div>
                </div>
        </div>
    )
}