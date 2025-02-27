import React from 'react'


import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from "../store/cartSlice"
import { Col,Button,Card, Row } from 'antd';
const { Meta } = Card;

const CartComponent = () => {
  const dispatch = useDispatch()
  const productCarts = useSelector((state) => state?.cart)

  const removeToCart = (id) => {
    // dispatching the remove
    dispatch(remove(id));
  }

  const Cards = productCarts?.map((product) => {
    return (
      <Col key={product.id} span={6} style={{ marginBottom: '10px'}}>
      <Card
          hoverable
          cover={<img alt={product.title} src={product.image} style={{ width: "100px", height: "130px", margin: "auto" }} />}
          actions={[
              <Button type="primary" danger onClick={() => removeToCart(product.id)}>RemoveItem</Button>
          ]}
      >
          <Meta title={product.title} description={`INR: ${product.price}`} />
      </Card>
  </Col>
      )
  })

  return (
     <div style={{margin:'40px'}}>
            <Row gutter={[16, 16]}>
                {Cards}
            </Row>
        </div>
  )
}

export default CartComponent;

