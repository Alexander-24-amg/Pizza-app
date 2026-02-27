import {BasketItem} from './BasketItem'
import {BasketSum} from './BasketSum'





export function Basket({items,setItems,linkBasketCatalog}){
    let sum=0;
    return(
        <div>
            <button onClick={linkBasketCatalog} data-path='Меню'>Меню</button>
            <h1>Корзина</h1>
            {
                items.map(({title,price,qty,uid,size})=>{ 
                    sum+= qty*price 
                    return <BasketItem title={title} price={price} qty={qty} uid={uid} key={uid} items={items} setItems={setItems} size={size}/>})
            }
            
            <BasketSum sum={sum} items={items} setItems={setItems}/>
        </div>
    )
}