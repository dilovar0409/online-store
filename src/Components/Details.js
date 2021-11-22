import React, { useEffect } from 'react';
import './Details.css';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItems, AddToCart } from '../Redux/Action/itemActions';

const Details = (props) => {

    useEffect(() => {
        props.getItems()
    }, [])

    const { id } = useParams();

    const detailsProduct = props.item.items.find(item => item._id === parseInt(id))

    return (
        <div className="details">
            <div className="inside-container">
                <h3>Product Details</h3>
                <div className="details-center">
                    <div className="details-img">
                        <img src={`${detailsProduct.img}`} alt="Product" />
                    </div>
                    <div className="details-info">
                        <h4 className="details-title">{detailsProduct.title}</h4>
                        <p className="details-text-info">{detailsProduct.details}</p>
                        <p className="details-price">price: <span>${detailsProduct.price}</span></p>
                        <div className="details-btn">
                            <Link to="/products"><button>Back to produts</button></Link>
                            <button onClick={()=>props.AddToCart(detailsProduct._id)}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps,{getItems, AddToCart})(Details)
