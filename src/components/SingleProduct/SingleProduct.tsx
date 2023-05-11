import React from 'react'
import "./SingleProduct.css"
import ProductsListItem from '../ProductsListItem/ProductsListItem'

type SingleProductProps = {
    handleCartCount: () => void
}

const SingleProduct = ({ handleCartCount }: SingleProductProps) => {

    const colors = ["Pink", "Blue", "Yellow"]
    const [color, setColor] = React.useState(0)
    const [deliveryContent, setDeliveryContent] = React.useState(false)
    const [returnContent, setReturnContent] = React.useState(false)
    const [addPage, setAddPage] = React.useState(1)
    const [productTabs, setProductTabs] = React.useState(1)

    const handleColor = (colorNum: number) => {
        setColor(colorNum)
    }

    const handleDeliveryContent = () => {
        setDeliveryContent((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleReturnContent = () => {
        setReturnContent((prevState) => {
            return (
                !prevState
            )
        })
    }

    const incrementAddPage = () => {
        setAddPage((prevState) => {
            return (
                prevState + 1
            )
        })
    }

    const decrementAddPage = () => {
        setAddPage((prevState) => {
            return (
                prevState - 1
            )
        })
    }

    const handleProductTabs = (tabNum: number) => {
        setProductTabs(tabNum)
    }

    return (
        <main>
            <section>
                <div className="single-product-caption d-f jc-sb align-center">
                    <h2 className="single-product-title">Basic hooded sweatshirt in pink</h2>
                    <div className="single-product-art">Art. No. <span>183260098</span></div>
                </div>
            </section>
            <section>
                <div className="single-product-tabs d-f align-center">
                    <button
                        className={productTabs === 1 ? "product-tabs-btn tabs-btn__active" : "product-tabs-btn"}
                        onClick={() => handleProductTabs(1)}
                    >
                        General info
                    </button>
                    <button
                        className={productTabs === 2 ? "product-tabs-btn tabs-btn__active" : "product-tabs-btn"}
                        onClick={() => handleProductTabs(2)}
                    >
                        Product details
                    </button>
                    <button
                        className={productTabs === 3 ? "product-tabs-btn tabs-btn__active" : "product-tabs-btn"}
                        onClick={() => handleProductTabs(3)}
                    >
                        Reviews<sup>12</sup>
                    </button>
                </div>
            </section>
            <section>
                <div className="single-product-main">
                    <div className={productTabs === 1 ? "product-main-wr d-f jc-sb" : "d-n"}  >
                        <div className="product-main-images">
                            <div className="main-images-wr">
                                <button className="images-central-prev"><img src="images/prev-btn3.png" alt="prev-btn" /></button>
                                <div className="main-images-central"><img src="images/product-main.png" alt="product-main" /></div>
                                <button className="images-central-next"><img src="images/next-btn3.png" alt="next-btn" /></button>
                            </div>
                            <div className="main-images-controls d-f">
                                <div className="images-controls-item"><img src="images/images-controls1.png" alt="images-controls1" /></div>
                                <div className="images-controls-item"><img src="images/images-controls2.png" alt="images-controls2" /></div>
                                <div className="images-controls-item"><img src="images/images-controls3.png" alt="images-controls3" /></div>
                                <div className="images-controls-item"><img src="images/images-controls4.png" alt="images-controls4" /></div>
                                <div className="images-controls-item"><img src="images/images-controls5.png" alt="images-controls5" /></div>
                            </div>
                        </div>
                        <div className="product-main-content">
                            <div className="d-f" style={{ gap: "215px" }}>
                                <div className="main-price-info d-f align-center">
                                    <div className="main-price-current">$15.50</div>
                                    <div className="main-price-full">31.00</div>
                                    <div className="main-price-sale">-50%</div>
                                </div>
                                <div className="product-main-info">
                                    <div className="ratings d-f">
                                        <div className="rating"><img src="images/rating.png" alt="rating" /></div>
                                        <div className="rating"><img src="images/rating.png" alt="rating" /></div>
                                        <div className="rating"><img src="images/rating.png" alt="rating" /></div>
                                        <div className="rating"><img src="images/rating.png" alt="rating" /></div>
                                        <div className="rating"><img src="images/unrating.png" alt="unrating" /></div>
                                    </div>
                                    <div className="product-main-reviews">12 reviews</div>
                                </div>
                            </div>
                            <div className="product-main-colors">
                                <div className="main-colors-title">Color</div>
                                <div className="main-colors-box d-f align-center">
                                    <div className={color === 0 ? "main-colors-item colors-item__active" : "main-colors-item"} >
                                        <div className="colors-item-inner" onClick={() => handleColor(0)}></div>
                                    </div>
                                    <div className={color === 1 ? "main-colors-item colors-item__active" : "main-colors-item"} >
                                        <div className="colors-item-inner" onClick={() => handleColor(1)}></div>
                                    </div>
                                    <div className={color === 2 ? "main-colors-item colors-item__active" : "main-colors-item"} >
                                        <div className="colors-item-inner" onClick={() => handleColor(2)}></div>
                                    </div>
                                    <div className="colors-item-selected">{colors[color]}</div>
                                </div>
                            </div>
                            <div className="product-main-size">
                                <div className="main-size-title">Size</div>
                                <form action="" className="main-size-fm d-f">
                                    <div>
                                        <select name="size-select">
                                            <option value="please">Please select</option>
                                            <option value="xsSize">XS</option>
                                            <option value="sSize">S</option>
                                            <option value="mSize">M</option>
                                            <option value="lSize">L</option>
                                            <option value="xlSize">XL</option>
                                        </select>
                                    </div>
                                    <div className='d-f align-center' style={{ gap: "8px" }}>
                                        <div><img src="images/hanger.png" alt="hanger" /></div>
                                        <button className="size-chart-btn">Size chart</button>
                                    </div>
                                </form>
                            </div>
                            <form className="product-main-adding d-f align-center">
                                <input type="number" name="productCount" className='main-adding-count' placeholder='1' />
                                <button className="products-item-btn" style={{ marginTop: 0 }}>Add to cart</button>
                                <button className='favorite-btn'>Favorite</button>
                            </form>
                            <div className="product-main-delivery">
                                <div className="d-f jc-sb">
                                    <div className="main-delivery-title">Delivery</div>
                                    <button className='main-delivery-btn' onClick={handleDeliveryContent}>
                                        <img src={deliveryContent ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
                                    </button>
                                </div>
                                <div className={deliveryContent ? "main-delivery-content" : "d-n"}>
                                    <div className="main-delivery-subtitle">
                                        Free standard shipping on orders <span>over $35,</span>  before tax, plus free returns.
                                    </div>
                                    <table className='main-delivery-table'>
                                        <thead>
                                            <tr>
                                                <th>Type</th>
                                                <th>How long</th>
                                                <th>How much</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Standard delivery</td>
                                                <td>1-4 business days</td>
                                                <td>$4.50</td>
                                            </tr>
                                            <tr>
                                                <td>Express delivery</td>
                                                <td>1 business day</td>
                                                <td>$10.00</td>
                                            </tr>
                                            <tr>
                                                <td>Pick up in store</td>
                                                <td>1-3 business days</td>
                                                <td>Free</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="product-main-return">
                                <div className="d-f jc-sb">
                                    <div className="main-delivery-title">Return</div>
                                    <button className='main-delivery-btn' onClick={handleReturnContent}>
                                        <img src={returnContent ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
                                    </button>
                                </div>
                                <div className={returnContent ? "main-return-content" : "d-n"}>
                                    <div className="main-return-subtitle">
                                        You have <span>60 days</span> to return the item(s) using any of the following methods:
                                    </div>
                                    <ul className="main-return-list">
                                        <li>Free store return</li>
                                        <li>Free returns via USPS Dropoff Service</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product-main-share d-f">
                                <div className="main-share-title">Share:</div>
                                <div><img src="images/share1.png" alt="share1" /></div>
                                <div><img src="images/share2.png" alt="share2" /></div>
                                <div><img src="images/share3.png" alt="share3" /></div>
                            </div>
                            <div className="product-main-payment d-f">
                                <div><img src="images/visa.png" alt="visa" /></div>
                                <div><img src="images/master-card.png" alt="master-card" /></div>
                                <div><img src="images/pay-pal.png" alt="pay-pal" /></div>
                            </div>
                        </div>

                    </div>
                    <div className={productTabs === 2 ? "product-main-wr d-f jc-sb" : "d-n"}>
                        <div>
                            <div className='product-main-about'>
                                <h3 className="main-about-title">Details</h3>
                                <div className="main-about-subtitle">
                                    Id habitant tempor aliquam vulputate enim velit tincidunt sed.
                                    Urna sed facilisis nulla feugiat amet venenatis. Id suspendisse ut quis tellus
                                    aliquam pellentesque neque, semper donec.
                                </div>
                                <ul className="main-about-list">
                                    <li>Brand: Jordan</li>
                                    <li>Color: gray / red / yellow</li>
                                    <li>Mid-cut design</li>
                                    <li>Lace-up fastening</li>
                                    <li>Rubber outsole pods for durability and traction</li>
                                    <li>Moulded grooves in forefoot offer added flexibility</li>
                                    <li>Padded cuff with inner nodes designed to offer comfort and support <br />around the Achilles tendon</li>
                                </ul>
                            </div>
                            <div className='product-main-about' style={{ marginTop: "24px" }}>
                                <h3 className="main-about-title">Fabric</h3>
                                <ul className="main-about-list">
                                    <li>Upper: 50% real leather, 50% textile</li>
                                    <li>Lining: 100% textile</li>
                                    <li>Sole: 100% other materials</li>
                                </ul>
                            </div>
                            <div style={{ marginTop: "24px" }}>
                                <h3 className="main-about-title">Care</h3>
                                <div className='main-about-care'>
                                    <div className="about-care-item d-f">
                                        <div><img src="images/care1.png" alt="care1" /></div>
                                        <div className="care-item-title">Hand wash only (30°)</div>
                                    </div>
                                    <div className="about-care-item d-f">
                                        <div><img src="images/care2.png" alt="care2" /></div>
                                        <div className="care-item-title">No ironing</div>
                                    </div>
                                    <div className="about-care-item d-f">
                                        <div><img src="images/care3.png" alt="care3" /></div>
                                        <div className="care-item-title">Do not use any bleach</div>
                                    </div>
                                    <div className="about-care-item d-f">
                                        <div><img src="images/care4.png" alt="care4" /></div>
                                        <div className="care-item-title">Do not tumble dry</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ProductsListItem
                            image='images/product-details.png'
                            title='Basic hooded sweatshirt in pink'
                            price={15.50}
                            oldPrice={31.00}
                            sale={50}
                            rating={4}
                            handleCartCount={handleCartCount}
                        />
                    </div>
                    <div className={productTabs === 3 ? "product-main-wr d-f jc-sb" : "d-n"}>
                        <div>
                            <div className="main-reviews-stats d-f">
                                <div>
                                    <div className="main-reviews-title">12 reviews</div>
                                    <div className="main-reviews-rating d-f">
                                        <div><img src="images/rating.png" alt="rating" /></div>
                                        <div><img src="images/rating.png" alt="rating" /></div>
                                        <div><img src="images/rating.png" alt="rating" /></div>
                                        <div><img src="images/rating.png" alt="rating" /></div>
                                        <div><img src="images/unrating.png" alt="unrating" /></div>
                                    </div>
                                    <div className="reviews-stats-desc">9 out of 12 (75%) <br /> Customers recommended this product</div>
                                </div>
                                <div><img src="images/reviews-chart.png" alt="reviews-chart" /></div>
                            </div>
                            <div className="main-reviews-actions d-f jc-sb">
                                <button className="leave-btn">Leave a review</button>
                                <form className="reviews-sort-fm d-f align-center">
                                    <label htmlFor="reviews-sort">Sort by</label>
                                    <select name="reviews-sort" id="reviews-sort">
                                        <option value="newest">newest</option>
                                        <option value="popular">popular</option>
                                        <option value="oldest">oldest</option>
                                    </select>
                                </form>
                            </div>
                            <div className="main-reviews-box">
                                <div className="main-reviews-item d-f">
                                    <div className='reviews-item-caption'>
                                        <div className="reviews-item-name">Devon Lane</div>
                                        <div className="reviews-item-date">July 15, 2020</div>
                                        <div className="reviews-item-rating d-f">
                                            <div><img src="images/rating.png" alt="rating" /></div>
                                            <div><img src="images/rating.png" alt="rating" /></div>
                                            <div><img src="images/rating.png" alt="rating" /></div>
                                            <div><img src="images/rating.png" alt="rating" /></div>
                                            <div><img src="images/rating.png" alt="rating" /></div>
                                        </div>
                                    </div>
                                    <div className="reviews-item-about">
                                        <p className="reviews-item-desc">
                                            Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare 
                                            rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. 
                                            Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas 
                                            sed duis purus diam et.
                                        </p>
                                        <div className="reviews-item-actions d-f jc-sb">
                                             <a href="">Reply</a>
                                             <div className='d-f' style={{gap: "16px"}}>
                                                <div className="reviews-item-like d-f">
                                                    <button><img src="images/like.png" alt="like" /></button>
                                                    <div className="item-like-num">2</div>
                                                </div>
                                                <div className="reviews-item-dislike d-f">
                                                    <button><img src="images/dislike.png" alt="dislike" /></button>
                                                    <div className="item-dislike-num">0</div>
                                                </div>            
                                            </div>       
                                        </div>
                                    </div>
                                </div>
                                <div className="main-reviews-item d-f">
                                    <div className='reviews-item-caption'>
                                        <div className="reviews-item-name">Annette Black</div>
                                        <div className="reviews-item-date">1 day ago</div>
                                        <div className="reviews-item-rating d-f">
                                            <div><img src="images/rating.png" alt="rating" /></div>
                                            <div><img src="images/rating.png" alt="rating" /></div>
                                            <div><img src="images/rating.png" alt="rating" /></div>
                                            <div><img src="images/rating.png" alt="rating" /></div>
                                            <div><img src="images/unrating.png" alt="unrating" /></div>
                                        </div>
                                    </div>
                                    <div className="reviews-item-about">
                                        <p className="reviews-item-desc">
                                            <span>@Devon Lane </span>Egestas fermentum natoque sollicitudin mauris. 
                                            Facilisis praesent urna sed rhoncus quis pharetra pellentesque erat sagittis.
                                        </p>
                                        <div className="reviews-item-actions d-f jc-sb">
                                             <a href="">Reply</a>
                                             <div className='d-f' style={{gap: "16px"}}>
                                                <div className="reviews-item-like d-f">
                                                    <button><img src="images/like.png" alt="like" /></button>
                                                    <div className="item-like-num">2</div>
                                                </div>
                                                <div className="reviews-item-dislike d-f">
                                                    <button><img src="images/dislike.png" alt="dislike" /></button>
                                                    <div className="item-dislike-num">1</div>
                                                </div>            
                                            </div>       
                                        </div>
                                    </div>
                                </div>
                                <div className="main-reviews-item d-f">
                                    <div className='reviews-item-caption'>
                                        <div className="reviews-item-name">Albert Flores</div>
                                        <div className="reviews-item-date">July 7, 2020</div>
                                        <div className="reviews-item-rating d-f">
                                            <div><img src="images/rating.png" alt="rating" /></div>
                                            <div><img src="images/unrating.png" alt="unrating" /></div>
                                            <div><img src="images/unrating.png" alt="unrating" /></div>
                                            <div><img src="images/unrating.png" alt="unrating" /></div>
                                            <div><img src="images/unrating.png" alt="unrating" /></div>
                                        </div>
                                    </div>
                                    <div className="reviews-item-about">
                                        <p className="reviews-item-desc">
                                            Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc. 
                                            Fames faucibus nisl duis id diam.
                                        </p>
                                        <div className="reviews-item-actions d-f jc-sb">
                                             <a href="">Reply</a>
                                             <div className='d-f' style={{gap: "16px"}}>
                                                <div className="reviews-item-like d-f">
                                                    <button><img src="images/like.png" alt="like" /></button>
                                                    <div className="item-like-num">0</div>
                                                </div>
                                                <div className="reviews-item-dislike d-f">
                                                    <button><img src="images/dislike.png" alt="dislike" /></button>
                                                    <div className="item-dislike-num">3</div>
                                                </div>            
                                            </div>       
                                        </div>
                                    </div>
                                </div>
                                <div className="main-reviews-item d-f">
                                    <div className='reviews-item-caption'>
                                        <div className="reviews-item-name">Marvin McKinney</div>
                                        <div className="reviews-item-date">July 28, 2020</div>
                                        <div className="reviews-item-rating d-f">
                                            <div><img src="images/rating.png" alt="rating" /></div>
                                            <div><img src="images/rating.png" alt="rating" /></div>
                                            <div><img src="images/rating.png" alt="rating" /></div>
                                            <div><img src="images/rating.png" alt="rating" /></div>
                                            <div><img src="images/rating.png" alt="rating" /></div>
                                        </div>
                                    </div>
                                    <div className="reviews-item-about">
                                        <p className="reviews-item-desc">
                                            Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh 
                                            sit consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas 
                                            congue nibh dui a nulla.
                                        </p>
                                        <div className="reviews-item-actions d-f jc-sb">
                                             <a href="">Reply</a>
                                             <div className='d-f' style={{gap: "16px"}}>
                                                <div className="reviews-item-like d-f">
                                                    <button><img src="images/like.png" alt="like" /></button>
                                                    <div className="item-like-num">3</div>
                                                </div>
                                                <div className="reviews-item-dislike d-f">
                                                    <button><img src="images/dislike.png" alt="dislike" /></button>
                                                    <div className="item-dislike-num">0</div>
                                                </div>            
                                            </div>       
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-reviews-controls d-f align-center">
                                <div className="reviews-controls-item">1</div>
                                <div className="reviews-controls-item">2</div>
                                <div className="reviews-controls-item">3</div>
                                <div className="reviews-controls-item">4</div>
                                <div><img src="images/arrow-right.png" alt="arrow-right" /></div>
                            </div>
                        </div>
                        <ProductsListItem
                            image='images/product-details.png'
                            title='Basic hooded sweatshirt in pink'
                            price={15.50}
                            oldPrice={31.00}
                            sale={50}
                            rating={4}
                            handleCartCount={handleCartCount}
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="single-product-complete">
                    <div className="d-f jc-sb">
                        <h3 className="product-complete-title">Complete your look</h3>
                        <div className="product-complete-controls d-f align-center">
                            <button
                                onClick={() => decrementAddPage()}
                                disabled={addPage === 1 ? true : false}
                                style={addPage === 1 ? { opacity: "0.4" } : { opacity: "1" }}
                            >
                                <img src="images/prev-btn4.png" alt="prev-btn" />
                            </button>
                            <button
                                className={addPage === 2 ? "disabled" : "enabled"}
                                onClick={() => incrementAddPage()}
                                disabled={addPage === 2 ? true : false}
                            >
                                <img src="images/next-btn4.png" alt="next-btn" />
                            </button>
                        </div>
                    </div>
                    <div className="product-complete-box d-f jc-sb">
                        <div><img src="images/complete-central.png" alt="complete-central" /></div>
                        <div>
                            <div className={addPage === 1 ? 'product-complete-add d-f' : "d-n"}>
                                <ProductsListItem
                                    image='images/complete-add1.png'
                                    title='Denim shorts'
                                    price={20.00}
                                    oldPrice={24.00}
                                    sale={20}
                                    handleCartCount={handleCartCount}
                                />
                                <ProductsListItem
                                    image='images/complete-add2.png'
                                    title='Modal-blend trenchcoat'
                                    price={45.20}
                                    rating={5}
                                    handleCartCount={handleCartCount}
                                />
                            </div>
                            <div className={addPage === 2 ? 'product-complete-add d-f' : "d-n"}>
                                <ProductsListItem
                                    image='images/complete-add3.png'
                                    title='Leather sandals'
                                    price={48.00}
                                    rating={5}
                                    handleCartCount={handleCartCount}
                                />
                                <ProductsListItem
                                    image='images/complete-add4.png'
                                    title='Chrono watch with blue...'
                                    price={120.60}
                                    rating={4}
                                    handleCartCount={handleCartCount}
                                />
                            </div>
                            <div className='compete-add-sliders d-f'>
                                <div className={addPage === 1 ? "add-sliders-item sliders-item__active" : "add-sliders-item "} ></div>
                                <div className={addPage === 2 ? "add-sliders-item sliders-item__active" : "add-sliders-item "}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="single-product-interested">
                    <div className="d-f jc-sb">
                        <h3 className="product-complete-title">You may be interested in</h3>
                        <div className="product-complete-controls d-f align-center">
                            <button><img src="images/prev-btn4.png" alt="prev-btn" /></button>
                            <button><img src="images/next-btn4.png" alt="next-btn" /></button>
                        </div>
                    </div>
                    <div className="product-interested-box d-f">
                        <ProductsListItem
                            image='images/product-interested1.png'
                            title='Metal bridge sunglasses'
                            price={89.95}
                            handleCartCount={handleCartCount}
                        />
                        <ProductsListItem
                            image='images/product-interested2.png'
                            title='Mid-rise slim cropped fit jeans'
                            price={40.00}
                            handleCartCount={handleCartCount}
                        />
                        <ProductsListItem
                            image='images/product-interested3.png'
                            title='Leather crossbody bag with...'
                            price={89.50}
                            oldPrice={179.00}
                            sale={50}
                            rating={5}
                            handleCartCount={handleCartCount}
                        />
                        <ProductsListItem
                            image='images/product-interested4.png'
                            title='Shirt with insertion lace trims'
                            price={49.95}
                            rating={5}
                            handleCartCount={handleCartCount}
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="single-product-recently">
                    <div className="d-f jc-sb">
                        <h3 className="product-complete-title">Recently viewed</h3>
                        <div className="product-complete-controls d-f align-center">
                            <button><img src="images/prev-btn4.png" alt="prev-btn" /></button>
                            <button><img src="images/next-btn4.png" alt="next-btn" /></button>
                        </div>
                    </div>
                    <div className="product-recently-box d-f">
                        <ProductsListItem
                            image='images/product-recently1.png'
                            title='Baby shoes with laces'
                            price={30.60}
                            handleCartCount={handleCartCount}
                        />
                        <ProductsListItem
                            image='images/product-recently2.png'
                            title='Green baby romper'
                            price={20.40}
                            rating={4}
                            handleCartCount={handleCartCount}
                        />
                        <ProductsListItem
                            image='images/product-recently3.png'
                            title='Men fashion gray shoes'
                            price={85.50}
                            handleCartCount={handleCartCount}
                        />
                        <ProductsListItem
                            image='images/product-recently4.png'
                            title='Skinny push-up jeans'
                            price={40.00}
                            oldPrice={80.00}
                            sale={50}
                            handleCartCount={handleCartCount}
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="home-subscribe d-f jc-sb align-center">
                    <div className="home-subscribe-content">
                        <h3 className="home-subscribe-title">Subscribe for updates</h3>
                        <h4 className="home-subscribe-subtitle">Subscribe for exclusive early sale access and new arrivals.</h4>
                        <form className='home-subscribe-fm'>
                            <div className="home-subscribe-categories d-f">
                                <button className="subscribe-categories-btn" name='women'>Women</button>
                                <button className="subscribe-categories-btn" name='men'>Men</button>
                                <button className="subscribe-categories-btn categories-btn__active" name='girls'>Girls</button>
                                <button className="subscribe-categories-btn" name='boys'>Boys</button>
                            </div>
                            <div><label htmlFor="email">Email</label></div>
                            <div className='d-f' style={{ marginBottom: "8px" }}>
                                <input type="email" name='email' id='email' placeholder='Your working email' />
                                <button className='subscribe-fm-btn'>Subscribe</button>
                            </div>
                            <div className="subscribe-fm-agree d-f align-center">
                                <input type="checkbox" name="agree" id="agree" />
                                <label htmlFor="agree">I agree to receive communications from Createx Store.</label>
                            </div>
                        </form>
                    </div>
                    <div className="home-subscribe-img"><img src="images/subscribe.png" alt="subscribe" /></div>
                </div>
            </section>
        </main>
    )
}

export default SingleProduct