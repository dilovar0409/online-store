import React, {  useEffect } from 'react';
import Product from './Product';
import './Products.css';
import { connect } from 'react-redux';
import { getItems, AddToCart, bannerClose } from '../Redux/Action/itemActions';

const Products = (props) => {

    useEffect(() => {
        props.getItems()
    }, [])

    const AddToCart = (id) => {
        props.AddToCart(id)
        setTimeout(() => {
            props.bannerClose();
        }, 2000)
    }

    const { items } = props.item;

    return (
        <div className="product">
            <div className="inside-container">
                <h3>Products</h3>
                <div className="products-center">
                    {items?.map(product => <Product key={product._id}
                        data={product} AddToCart={() => AddToCart(product._id)} isInCart={product._isInCart} />)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems, AddToCart, bannerClose })(Products);
