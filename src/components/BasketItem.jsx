export function BasketItem({uid,title,price,qty,items,setItems,size}){
    
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
        <div className="">
            <div className="">{title}</div>
            <div className="">{price}$</div>
            <div className="">{size}см</div>
            <div className="">
                <button onClick={Subtract}>-</button>
                {qty}
                <button onClick={Addition}>+</button>
                </div>
            {/* <div className="">{price*qty}</div> */}
            <div className="">
                <a href="#" onClick={removePosition}>Отменить</a>
            </div>
        </div>
    )
}