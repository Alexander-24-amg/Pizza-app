
import { useEffect, useState } from 'react'
import './Catalog.css'
import {Product} from './Product'


export function Catalog({catalogitems,linkBasketCatalog,items}){
    const[counter,setСounter]=useState(0);
    useEffect(()=>{
        let lengthItems = items.length;
        let reduceitems = items.reduce(
            (sum,obj)=>{
                if(obj.qty >1){
                    return sum + obj.qty -1;
                }
                return sum
            }
        ,0)
        setСounter(lengthItems + reduceitems)
    },[items])
    
    return(
        <div className='Catalog'>
            <div className='Catalog_nav'>
                <h1>Меню</h1>
                <button onClick={linkBasketCatalog} data-path='Корзина'>Корзина {counter>0? <strong>{counter}</strong> : false} </button>
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