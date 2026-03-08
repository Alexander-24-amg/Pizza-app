
import './Catalog.css'
import {Product} from './Product'


export function Catalog({catalogitems,linkBasketCatalog}){
    return(
        <div className='Catalog'>
            <div className='Catalog_nav'>
                <h1>Меню</h1>
                <button onClick={linkBasketCatalog} data-path='Корзина'>Корзина</button>
            </div>
            <div className='Catalog_GridMenu'>
                    {catalogitems.map(({uid, title,price,price25,price35,pizza,pizzaBig,pizzaText,pizzaLittle}) =>{
                    
                    return(
                    <Product title={title} price={price} price25={price25} price35={price35} key={uid} uid={uid} pizza={pizza} pizzaBig={pizzaBig} pizzaText={pizzaText} pizzaLittle={pizzaLittle}/>
                    )})}
            </div>
        </div>
    )
}