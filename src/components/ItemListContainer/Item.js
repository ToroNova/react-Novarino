import React from 'react'
import {Card, Button} from 'react-bootstrap'

export const Item = ( {id, title, price, img, description,categoria} ) => {

    // console.log(props)

    return (
     <div className="col-md-3 d-flex justify-content-center">
        <Card style={{ width: '16rem' }} className="m-2">
            <Card.Img variant="top" src={img} />
            <Card.Body className ="d-grid">
                <Card.Title>{title}</Card.Title>
                <Card.Text className ="d-flex justify-content-center" >ID: {id}</Card.Text>
                <Card.Text className ="d-flex justify-content-center" >{categoria}</Card.Text>
                <Card.Text className ="d-flex justify-content-center" >{description}</Card.Text>
                <Card.Text className ="d-flex justify-content-center" >Precio: ${price}</Card.Text>

                <Button className ="d-flex justify-content-center" variant="primary">Agregar</Button>
            </Card.Body>
        </Card>
     </div>
    )
}