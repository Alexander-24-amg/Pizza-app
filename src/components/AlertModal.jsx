import './AlertModal.css'




export function AlertModal ({closeModal}) {
    return(
        <div>
            <h4>Заказ оформлен !</h4>
            <button onClick={closeModal}>Закрыть</button>
        </div>
    )
}