import './AlertModal.css'




export function AlertModal ({closeModal}) {
    return(
        <div className='AlertModal'>
            <div className='AlertModal_modal'>
                <h4>Заказ оформлен !</h4>
                <button onClick={closeModal}>Закрыть</button>
            </div>
        </div>
    )
}