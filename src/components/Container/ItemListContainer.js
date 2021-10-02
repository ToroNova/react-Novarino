import React from 'react'
import {Container} from 'react-bootstrap'
import './ItemListContainer.css'


export const ItemListContainer = ({greeting}) => {

    return (
        <div>
            <Container>
            <h3 className="m-2">{greeting}</h3>
            </Container>
        </div>
    )
}