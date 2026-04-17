import './AlertModal.css'




export function AlertModal ({closeModal, sum}) {
    return(
        <div className='AlertModal'>
            <div className='AlertModal_modal'>
                <h4>Заказ оформлен !</h4>
                <span>на {sum}$</span>
                <button onClick={closeModal}>Закрыть</button>
            </div>
        </div>
    )
}