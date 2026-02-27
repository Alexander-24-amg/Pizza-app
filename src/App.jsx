import { useState,useEffect,createContext} from 'react'
import './App.css'
import {Basket} from './components/Basket.jsx'
import {Catalog} from './components/Catalog.jsx'


export const basketContext = createContext();

const initialitems =[] //Массив для корзины

export function App() {
  const [currentPage,setCurrentPage]=useState('Меню');

  const [items,setItems]=useState(initialitems); //Состояние для корзины

  useEffect(()=>{
    document.title=currentPage;
    history.pushState({},'',currentPage);
  },[currentPage]);
  
  
  const linkBasketCatalog = (ev)=>{
    setCurrentPage(ev.target.dataset.path)
  }



  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(null);
  //для хранения товаров
  const[catalogitems,setCatalogItems]=useState([]);
  useEffect(()=>{
    async function fetchData(){
        try{
          const response = await fetch('catalogitems.json'); //Путь к JSON списку товаров
          if(!response.ok){
            throw new Error('Ошибка загрузки данных');
          }
          const data = await response.json();
          setCatalogItems(data);
        } catch (err) {
          setError(err.messege);
        } finally {
          setLoading(false);
        }
          }
          fetchData();
  },[])

  if (loading) {return <div>Загрузка....</div>}
  if (error) {return <div>Ошибка: {error}</div>}






  return (
    <>
    <basketContext.Provider value={{items,setItems}}>
      {currentPage == 'Меню' && <div className='Component'>
      <Catalog  catalogitems={catalogitems}  linkBasketCatalog={linkBasketCatalog}/>
      </div>}
    </basketContext.Provider>
      {currentPage == 'Корзина' && <div className='Component'>
      <Basket items={items} setItems={setItems} linkBasketCatalog={linkBasketCatalog} />
      </div>}
    
    </>
  )
}

export default App
