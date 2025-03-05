
import React, { useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'

import { useDispatch, useSelector } from 'react-redux';
import { add } from "../store/cartSlice"
import { getProducts } from '../store/productsSlice';
import StatusCode from '../utils/StatusCode';
import { Card, Button, Row, Col } from 'antd';
import Meta from 'antd/es/card/Meta';
import './products.css';


export default function ProductPage() {
    // const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const { data, status } = useSelector(state => state?.products);

    console.log(data, 'nandyyy')
    const addToCart = (product) => {
        // Dispatch on a add action
        dispatch(add(product))
    }

    


    useEffect(() => {
        // api
        // Dispatchin api
        dispatch(getProducts())
        // fetch("https://fakestoreapi.com/products")
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setProducts(data)
        //         console.log(data)
        //     })
        //     .catch(error => console.error(error));

    }, [dispatch])


    if (status === StatusCode.LOADING) {
        return <h1>Loading......</h1>
    }

    if (status === StatusCode.ERROR) {
        return <Alert key='danger' variant="danger">Something went wrong! Please try again later</Alert>
    }

    const Cards = data.map((product) => {
        return (
            
            <Col key={product.id} span={6}   xs={24} sm={12} md={8} lg={6}  style={{ marginBottom: '10px' }}>
                <Card
                    hoverable
                    cover={<img alt={product.title} src={product.image} style={{ width: "100px", height: "130px", margin: "auto" }} />}
                    actions={[
                        <Button type="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
                    ]}
                >
                    <Meta style={{ width: "100px", height: "130px", margin: "auto" }} title={product.title} description={`INR: ${product.price}` } />
                </Card>
            </Col>

        )
    })
    return (
        <div className='product-container'>
            <h1 className='product-title'>Products Dashbord</h1>
            <Row gutter={[16, 16]} justify="center">
                {Cards}
            </Row>
        </div>
    )
}

