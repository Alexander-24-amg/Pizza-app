
import './Catalog.css'
import {Product} from './Product'


export function Catalog({catalogitems,linkBasketCatalog}){
    return(
        <div>
            <button onClick={linkBasketCatalog} data-path='Корзина'>Корзина</button>
            <h1>Меню</h1>
            <hr />

            <div className='Grid-Menu'>
                    {catalogitems.map(({uid, title,price,price25,price35}) =>{
                    
                    return(
                    <Product title={title} price={price} price25={price25} price35={price35} key={uid} uid={uid} />
                    )})}
            </div>
        </div>
    )
}