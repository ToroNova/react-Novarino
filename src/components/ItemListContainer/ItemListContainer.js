import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos'
import './ItemListContainer.css'
import { ItemList } from './ItemList'
import { useParams } from 'react-router'


// query params
// const URL = 'https://www.google.com/search?q=coderhouse&limit=10'

export const ItemListContainer = () => {

   const [items, setItems] = useState([])
   const [loading, setLoading] = useState(false)
    
   const {categoryId} = useParams()



    useEffect(()=>{
        setLoading(true)

        pedirProductos()
            .then((res) => {
                if (categoryId) {
                setItems(res.filter( prod => prod.category === categoryId))
            } else {
                setItems ( res )
            }
            })

            .catch((err) => console.log(err))
            .finally (() =>{
                setLoading(false)
                console.log("fin del llamado")
            })
   }, [categoryId])



    return (
        <section className="m-5">
        {              
            loading 
                ? <h2>Cargando...</h2>
                
                : <ItemList productos={items}/>
        }      
        </section>
        
    )
}