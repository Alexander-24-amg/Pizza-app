import './Basket.css'
import {BasketItem} from './BasketItem'
import {BasketSum} from './BasketSum'





export function Basket({items,setItems,linkBasketCatalog}){
    let sum=0;
    return(
        <div className='Basket'>
            <div className='Basket_nav'>
                <h1>Корзина</h1>
                <button className='Basket_nav__button' onClick={linkBasketCatalog} data-path='Меню'>Меню</button>
            </div>
            <hr />
            <div className='Basket_Flex'>
                <div className='Basket_BasketItem'>
                {
                    items.map(({title,price,qty,uid,size,pizzaLittle})=>{ 
                        sum+= qty*price 
                        return <BasketItem title={title} price={price} qty={qty} uid={uid} key={uid} items={items} setItems={setItems} size=    {size} pizzaLittle={pizzaLittle} sum={sum}/>})
                }
                </div>
                <div>
                    <BasketSum sum={sum} items={items} setItems={setItems}/>
                </div>
            </div>
        </div>
    )
}