import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import products from '../products'
import Rating from '../components/Rating'

const PoductScreen = ({match}) => {
    const product = products.find( p => p._id === match.params.id)
    return (
        <>
            <Link className='btn btn-light my-3' to='/'>Go back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}> 
                    
                </Col>
            </Row>
        </>
    )
}

export default PoductScreen
