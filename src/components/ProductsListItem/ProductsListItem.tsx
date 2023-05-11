import React from 'react'
import './ProductListItem.css'

type ProductsListItemProps = {
    image: string
    title: string
    price: number
    isLiked?: boolean
    rating?: number
    oldPrice?: number
    sale?: number
    handleCartCount: () => void
}

const ProductsListItem = ({ image, title, price, isLiked = false, rating = 0, oldPrice = 0, sale = 0, handleCartCount }: ProductsListItemProps) => {
    return (
        <div className="products-item">
            <div className="products-item-info">
                <div className={sale > 0 ? "products-item-sale" : "d-n"}>-{sale}%</div>
                <div className={rating === 1 ? "products-item-rating d-f" : "d-n"}>
                    <div><img src="images/rating.png" alt="rating" /></div>
                    <div><img src="images/unrating.png" alt="unrating" /></div>
                    <div><img src="images/unrating.png" alt="unrating" /></div>
                    <div><img src="images/unrating.png" alt="unrating" /></div>
                    <div><img src="images/unrating.png" alt="unrating" /></div>
                </div>
                <div className={rating === 2 ? "products-item-rating d-f" : "d-n"}>
                    <div><img src="images/rating.png" alt="rating" /></div>
                    <div><img src="images/rating.png" alt="rating" /></div>
                    <div><img src="images/unrating.png" alt="unrating" /></div>
                    <div><img src="images/unrating.png" alt="unrating" /></div>
                    <div><img src="images/unrating.png" alt="unrating" /></div>
                </div>
                <div className={rating === 3 ? "products-item-rating d-f" : "d-n"}>
                    <div><img src="images/rating.png" alt="rating" /></div>
                    <div><img src="images/rating.png" alt="rating" /></div>
                    <div><img src="images/rating.png" alt="rating" /></div>
                    <div><img src="images/unrating.png" alt="unrating" /></div>
                    <div><img src="images/unrating.png" alt="unrating" /></div>
                </div>
                <div className={rating === 4 ? "products-item-rating d-f" : "d-n"}>
                    <div><img src="images/rating.png" alt="rating" /></div>
                    <div><img src="images/rating.png" alt="rating" /></div>
                    <div><img src="images/rating.png" alt="rating" /></div>
                    <div><img src="images/rating.png" alt="rating" /></div>
                    <div><img src="images/unrating.png" alt="unrating" /></div>
                </div>
                <div className={rating === 5 ? "products-item-rating d-f" : "d-n"}>
                    <div><img src="images/rating.png" alt="rating" /></div>
                    <div><img src="images/rating.png" alt="rating" /></div>
                    <div><img src="images/rating.png" alt="rating" /></div>
                    <div><img src="images/rating.png" alt="rating" /></div>
                    <div><img src="images/rating.png" alt="rating" /></div>
                </div>
                <div><img src={image} alt="product" /></div>
                <div className="products-item-liked"><img src={!isLiked ? "images/wishlist.png" : ""} alt="wishlist" /></div>
            </div>
            <div className="products-item-title">{title}</div>
            <div className="products-item-price">
                ${Number.parseFloat(price.toString()).toFixed(2)} &nbsp; 
                <span className={oldPrice > 0 ? "products-item-old" : "d-n"}>${Number.parseFloat(oldPrice.toString()).toFixed(2)}</span>
            </div>
            <button className='products-item-btn' onClick={()=>handleCartCount()}>Add to cart</button>
        </div>
    )
}

export default ProductsListItem