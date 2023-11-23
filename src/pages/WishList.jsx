import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCArt } from '../redux/slices/cartSlice';

function WishList() {

  const wishlistArray =useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const handlewishlist = (item)=>{
      dispatch(addToCArt(item))
      dispatch(removeFromWishlist(item.id))


  }
  return (
    <div>
      <Row className='m-5 me-3' >
      {wishlistArray?.length>0?
      wishlistArray?.map((item)=>(<Col style={{marginTop:'100px'}} className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title className='fw-bolder'>{item.title.slice(0,20)}</Card.Title>
        <Card.Text>
          <p> {item.description.slice(0,40)}... </p>
          <p className='fw-bolder'> Price: ₹ {item.price} </p>
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
          <Button onClick={()=> dispatch(removeFromWishlist(item.id))} variant="outline-danger btn rounded"><i class="fa-solid fa-trash"></i></Button>
          <Button onClick={()=>handlewishlist(item)} variant="outline-success btn rounded"><i class="fa-solid fa-cart-plus"></i></Button>
        </div>
      </Card.Body>
    </Card>
      </Col>))
        :<div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
          <img height={'300px'} src="https://www.qrcardboard.com/images/cart.gif?v=01" alt="no image" />
          <h4>Your WishList is empty </h4>
          <Link to={'/'}> Back to Home</Link>
        </div>
      }
      </Row>
      </div>
  )
}

export default WishList