import React from 'react'
import "./Women.css"
import ProductsListItem from '../components/ProductsListItem/ProductsListItem'

type WomenProps = {
    handleCartCount: () => void
}

const Women = ({handleCartCount}: WomenProps) => {
    const[mainMenu, setMainMenu] = React.useState(true)
    const [menuContentOne, setMenuContentOne] = React.useState(false)
    const [menuContentTwo, setMenuContentTwo] = React.useState(false)
    const [menuContentThree, setMenuContentThree] = React.useState(false)
    const [menuContentFour, setMenuContentFour] = React.useState(false)
    const [menuContentFive, setMenuContentFive] = React.useState(false)
    const [menuContentSix, setMenuContentSix] = React.useState(false)

    const handleMainMenu = ()=> {
        setMainMenu((prevState) => {
            return (
                !prevState
            )
        } )
    }

    const handleMenuContentOne = () => {
        setMenuContentOne((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleMenuContentTwo = () => {
        setMenuContentTwo((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleMenuContentThree = () => {
        setMenuContentThree((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleMenuContentFour = () => {
        setMenuContentFour((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleMenuContentFive = () => {
        setMenuContentFive((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleMenuContentSix = () => {
        setMenuContentSix((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <main>
            <section>
                <div className="women-main d-f">
                    <div className= {mainMenu ? "women-main-menu" : "d-n" } >
                        <button className="main-menu-hide" onClick={()=>handleMainMenu()}>Hide filters</button>
                        <div className="main-menu-item">
                            <div className="item-title-wr d-f jc-sb">
                                <h3 className="menu-item-title">Clothes</h3>
                                <button
                                    className='item-title-btn'
                                    onClick={() => handleMenuContentOne()}
                                >
                                    <img src={menuContentOne ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
                                </button>
                            </div>
                            <div className={menuContentOne ? "menu-item-content" : "d-n"}>
                                <form className="main-menu-fm">
                                    <div className='menu-fm-search d-f jc-sa'>
                                        <input type="text" name='search' placeholder='Search the clothes type' />
                                        <button><img src="images/search3.png" alt="search" /></button>
                                    </div>
                                    <div className="closes-types">
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="coats" id="coats" />
                                            <label htmlFor="coats">Coats <span>(16)</span></label>
                                        </div>
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="jackets" id="jackets" />
                                            <label htmlFor="jackets">Jackets <span>(12)</span></label>
                                        </div>
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="suits" id="suits" />
                                            <label htmlFor="suits">Suits <span>(5)</span></label>
                                        </div>
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="dresses" id="dresses" />
                                            <label htmlFor="dresses">Dresses <span>(11)</span></label>
                                        </div>
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="sweaters" id="sweaters" />
                                            <label htmlFor="sweaters">Cardigans & sweaters <span>(18)</span></label>
                                        </div>
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="hoodies" id="hoodies" />
                                            <label htmlFor="hoodies">Sweatshirts & hoodies <span>(21)</span></label>
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="main-menu-item">
                            <div className="item-title-wr d-f jc-sb">
                                <h3 className="menu-item-title">Size</h3>
                                <button
                                    className='item-title-btn'
                                    onClick={() => handleMenuContentTwo()}
                                >
                                    <img src={menuContentTwo ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
                                </button>
                            </div>
                            <div className={menuContentTwo ? "menu-item-content" : "d-n"}>
                                <form className="sizes-fm">
                                    <div className='check-bl d-f'>
                                        <input type="checkbox" name="xs-size" id="xs-size" />
                                        <label htmlFor="xs-size">XS <span>(16)</span></label>
                                    </div>
                                    <div className='check-bl d-f'>
                                        <input type="checkbox" name="s-size" id="s-size" />
                                        <label htmlFor="s-size">S <span>(12)</span></label>
                                    </div>
                                    <div className='check-bl d-f'>
                                        <input type="checkbox" name="m-size" id="m-size" />
                                        <label htmlFor="m-size">M <span>(5)</span></label>
                                    </div>
                                    <div className='check-bl d-f'>
                                        <input type="checkbox" name="l-size" id="l-size" />
                                        <label htmlFor="l-size">L <span>(11)</span></label>
                                    </div>
                                    <div className='check-bl d-f'>
                                        <input type="checkbox" name="xl-size" id="xl-size" />
                                        <label htmlFor="xl-size">XL <span>(18)</span></label>
                                    </div>
                                    <div className='check-bl d-f'>
                                        <input type="checkbox" name="plus-size" id="plus-size" />
                                        <label htmlFor="plus-size">Plus Size <span>(4)</span></label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="main-menu-item">
                            <div className="item-title-wr d-f jc-sb">
                                <h3 className="menu-item-title">Color</h3>
                                <button
                                    className='item-title-btn'
                                    onClick={() => handleMenuContentThree()}
                                >
                                    <img src={menuContentThree ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
                                </button>
                            </div>
                            <div className={menuContentThree ? "menu-item-content" : "d-n"}>
                                <form className="colors-fm d-f">
                                    <div className="colors-item">
                                        <input type="color" name="black" id="black" value="#000000" />
                                        <label htmlFor="black">Black</label>
                                    </div>
                                    <div className="colors-item">
                                        <input type="color" name="blue-gray" id="blue-gray" value="#C0DDED" />
                                        <label htmlFor="blue-gray">Blue-gray</label>
                                    </div>
                                    <div className="colors-item">
                                        <input type="color" name="yellow" id="yellow" value="#FCD164" />
                                        <label htmlFor="yellow">Yellow</label>
                                    </div>
                                    <div className="colors-item">
                                        <input type="color" name="red" id="red" value="#F75151" />
                                        <label htmlFor="red">Red</label>
                                    </div>
                                    <div className="colors-item">
                                        <input type="color" name="darkBlue" id="darkBlue" value="#0C2C7E" />
                                        <label htmlFor="darkBlue">Dark blue</label>
                                    </div>
                                    <div className="colors-item">
                                        <input type="color" name="beige" id="beige" value="#D8C1AD" />
                                        <label htmlFor="beige">Beige</label>
                                    </div>
                                    <div className="colors-item">
                                        <input type="color" name="brown" id="brown" value="#874E19" />
                                        <label htmlFor="brown">Brown</label>
                                    </div>
                                    <div className="colors-item">
                                        <input type="color" name="gray" id="gray" value="#9A9494" />
                                        <label htmlFor="gray">Gray</label>
                                    </div>
                                    <div className="colors-item">
                                        <input type="color" name="purple" id="purple" value="#A27AC9" />
                                        <label htmlFor="purple">Purple</label>
                                    </div>
                                    <div className="colors-item">
                                        <input type="color" name="green" id="green" value="#67BA92" />
                                        <label htmlFor="green">Green</label>
                                    </div>
                                    <div className="colors-item">
                                        <input type="color" name="orange" id="orange" value="#FB9620" />
                                        <label htmlFor="orange">Orange</label>
                                    </div>
                                    <div className="colors-item">
                                        <input type="color" name="white" id="white" value="#F1F1F1" />
                                        <label htmlFor="white">White</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="main-menu-item">
                            <div className="item-title-wr d-f jc-sb">
                                <h3 className="menu-item-title">Material</h3>
                                <button
                                    className='item-title-btn'
                                    onClick={() => handleMenuContentFour()}
                                >
                                    <img src={menuContentFour ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
                                </button>
                            </div>
                            <div className={menuContentFour ? "menu-item-content" : "d-n"}>
                                <form className="main-menu-fm">
                                    <div className='menu-fm-search d-f jc-sa'>
                                        <input type="text" name='search' placeholder='Search the clothes type' />
                                        <button><img src="images/search3.png" alt="search" /></button>
                                    </div>
                                    <div className="closes-types">
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="cotton" id="cotton" />
                                            <label htmlFor="cotton">Cotton <span>(162)</span></label>
                                        </div>
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="synthetics" id="synthetics" />
                                            <label htmlFor="synthetics">Synthetics <span>(12)</span></label>
                                        </div>
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="nappaLeather" id="nappaLeather" />
                                            <label htmlFor="nappaLeather">Nappa leather <span>(26)</span></label>
                                        </div>
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="leather" id="leather" />
                                            <label htmlFor="leather">Leather <span>(5)</span></label>
                                        </div>
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="cashmere" id="cashmere" />
                                            <label htmlFor="cashmere">Cashmere <span>(41)</span></label>
                                        </div>
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="denim" id="denim" />
                                            <label htmlFor="denim">Denim <span>(48)</span></label>
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="main-menu-item">
                            <div className="item-title-wr d-f jc-sb">
                                <h3 className="menu-item-title">Brand</h3>
                                <button
                                    className='item-title-btn'
                                    onClick={() => handleMenuContentFive()}
                                >
                                    <img src={menuContentFive ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
                                </button>
                            </div>
                            <div className={menuContentFive ? "menu-item-content" : "d-n"}>
                                <form className="main-menu-fm">
                                    <div className='menu-fm-search d-f jc-sa'>
                                        <input type="text" name='search' placeholder='Search the clothes type' />
                                        <button><img src="images/search3.png" alt="search" /></button>
                                    </div>
                                    <div className="closes-types">
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="adidas" id="adidas" />
                                            <label htmlFor="adidas">Adidas <span>(162)</span></label>
                                        </div>
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="annTaylor" id="annTaylor" />
                                            <label htmlFor="annTaylor">Ann Taylor <span>(12)</span></label>
                                        </div>
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="armani" id="armani" />
                                            <label htmlFor="armani">Armani <span>(26)</span></label>
                                        </div>
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="bananaRepublic" id="bananaRepublic" />
                                            <label htmlFor="bananaRepublic">Banana Republic <span>(5)</span></label>
                                        </div>
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="calvinKlein" id="calvinKlein" />
                                            <label htmlFor="calvinKlein">Calvin Klein <span>(41)</span></label>
                                        </div>
                                        <div className="closes-types-item d-f">
                                            <input type="checkbox" name="columbia" id="columbia" />
                                            <label htmlFor="columbia">Columbia <span>(48)</span></label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="main-menu-item">
                            <div className="item-title-wr d-f jc-sb">
                                <h3 className="menu-item-title">Price</h3>
                                <button
                                    className='item-title-btn'
                                    onClick={() => handleMenuContentSix()}
                                >
                                    <img src={menuContentSix ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
                                </button>
                            </div>
                            <div className={menuContentSix ? "menu-item-content" : "d-n"}>
                                <form className="range-fm">
                                    <div className="range-values d-f">
                                        <div className="range-values-item">$480</div>
                                        <div className="range-values-item">$800</div>
                                    </div>
                                    <div className='range-slider'>
                                        <span></span>
                                        <div className="range-slider-inner"></div>
                                        <span></span>
                                    </div>
                                    <div className="range-numbers d-f align-center">
                                        <input type="number" name='minPrice' value={480} />
                                        <div>-</div>
                                        <input type="number" name='minPrice' value={800} />      
                                    </div>                                     
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="women-main-content">
                        <div className='main-content-controls d-f align-center' >
                            <form className='main-content-fm d-f align-center'>
                                <button 
                                    className={mainMenu ? "d-n" :  "main-menu-hide"} 
                                    onClick={()=>handleMainMenu()}
                                >
                                    {mainMenu ? "Hide filters" : "Show filters"}
                                </button>
                                <div className='sort-bl d-f align-center'>
                                    <div className="sort-bl-title">Sort by</div>
                                    <select name="sort" id="sort">
                                        <option value="popularity">popularity</option>
                                    </select>
                                </div>
                                <div className="show-bl d-f align-center">
                                    <div className="show-bl-title">Show</div>
                                    <input type="number" name="showNum" value={12} />
                                    <div className="show-bl-desc">products per page</div>
                                </div>
                            </form>
                            <div className="content-tabs d-f align-center">
                                <div className="content-tabs-item">1</div>
                                <div className="content-tabs-item">2</div>
                                <div className="content-tabs-item">3</div>
                                <div className="content-tabs-item">...</div>
                                <div className="content-tabs-item">10</div>
                                <div style={{ marginTop: "5px" }}><img src="images/arrow-right.png" alt="arrow-right" /></div>
                            </div>
                        </div>
                        <div className="main-content-box d-f jc-sb">
                            <ProductsListItem
                                image='images/women-clothes/women-clothes1.png'
                                title='Shirt with insertion lace trims'
                                price={49.95}
                                rating={5}
                                handleCartCount={handleCartCount}
                            />
                            <ProductsListItem
                                image='images/women-clothes/women-clothes2.png'
                                title='Mid-rise slim cropped fit jeans'
                                price={40.00}
                                handleCartCount={handleCartCount}
                            />
                            <ProductsListItem
                                image='images/women-clothes/women-clothes3.png'
                                title='Black and white sport cap'
                                price={18.15}
                                rating={5}
                                handleCartCount={handleCartCount}
                            />
                            <ProductsListItem
                                image='images/women-clothes/women-clothes4.png'
                                title='Green baby romper'
                                price={20.40}
                                rating={4}
                                handleCartCount={handleCartCount}
                            />
                            <ProductsListItem
                                image='images/women-clothes/women-clothes5.png'
                                title='Check coat with colour contrast'
                                price={183.45}
                                handleCartCount={handleCartCount}
                            />
                            <ProductsListItem
                                image='images/women-clothes/women-clothes6.png'
                                title='Red dangle earrings'
                                price={29.95}
                                rating={5}
                                handleCartCount={handleCartCount}
                            />
                            <ProductsListItem
                                image='images/women-clothes/women-clothes7.png'
                                title='Chrono watch with blue...'
                                price={120.60}
                                rating={4}
                                handleCartCount={handleCartCount}
                            />
                            <ProductsListItem
                                image='images/women-clothes/women-clothes8.png'
                                title='Baby shoes with laces'
                                price={30.60}
                                handleCartCount={handleCartCount}
                            />
                            <ProductsListItem
                                image='images/women-clothes/women-clothes9.png'
                                title='Basic hooded sweatshirt in pink'
                                price={15.50}
                                rating={4}
                                oldPrice={31.00}
                                sale={50}
                                handleCartCount={handleCartCount}
                            />
                            <ProductsListItem
                                image='images/women-clothes/women-clothes10.png'
                                title='Skinny push-up jeans'
                                price={40.00}
                                oldPrice={80.00}
                                sale={50}
                                handleCartCount={handleCartCount}
                            />
                            <ProductsListItem
                                image='images/women-clothes/women-clothes11.png'
                                title='Leather crossbody bag with...'
                                price={89.50}
                                rating={5}
                                oldPrice={179.00}
                                sale={50}
                                handleCartCount={handleCartCount}
                            />
                            <ProductsListItem
                                image='images/women-clothes/women-clothes12.png'
                                title='Men fashion gray shoes'
                                price={85.50}
                                handleCartCount={handleCartCount}
                            />
                        </div>
                        <div className='main-content-controls d-f align-center' >
                            <form className='main-content-fm d-f align-center'>
                                <div className='sort-bl d-f align-center'>
                                    <div className="sort-bl-title">Sort by</div>
                                    <select name="sort" id="sort">
                                        <option value="popularity">popularity</option>
                                    </select>
                                </div>
                                <div className="show-bl d-f align-center">
                                    <div className="show-bl-title">Show</div>
                                    <input type="number" name="showNum" value={12} />
                                    <div className="show-bl-desc">products per page</div>
                                </div>
                            </form>
                            <div className="content-tabs d-f align-center">
                                <div className="content-tabs-item">1</div>
                                <div className="content-tabs-item">2</div>
                                <div className="content-tabs-item">3</div>
                                <div className="content-tabs-item">...</div>
                                <div className="content-tabs-item">10</div>
                                <div style={{ marginTop: "5px" }}><img src="images/arrow-right.png" alt="arrow-right" /></div>
                            </div>
                        </div>
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

export default Women