import React from 'react'
import './Home.css'
import ProductsListItem from '../components/ProductsListItem/ProductsListItem'

type HomeProps = {
  handleCartCount: () => void
}

const Home = ({handleCartCount}: HomeProps) => {
  return (
    <main>
      <section>
        <div className="home-main">
          <div className="home-main-box d-f">
            <button className="home-main-previous"><img src="images/prev-btn.png" alt="prev-btn" /></button>
            <div className="home-main-content">
              <div className="home-main-udertitle">New collection</div>
              <div className="home-main-title">Menswear 2020</div>
              <div className="home-main-actions d-f">
                <button className='main-actions-sale'>Shop sale</button>
                <button className='main-actions-menswear'>Shop the menswear</button>
              </div>
            </div>
            <button className="home-main-next"><img src="images/next-btn.png" alt="next-btn" /></button>
          </div>
          <div className="home-main-controls d-f">
            <div className="main-controls-item controls-item__active">01</div>
            <div className="main-controls-item">02</div>
            <div className="main-controls-item">03</div>
            <div className="main-controls-item">04</div>
          </div>
        </div>
      </section>
      <section>
        <div className="home-main-categories d-f">
          <div className="main-categories-item">
            <div><img src="images/main-categories1.png" alt="main-categories1" /></div>
            <div className="main-categories-title">Women's</div>
          </div>
          <div className="main-categories-item">
            <div><img src="images/main-categories2.png" alt="main-categories2" /></div>
            <div className="main-categories-title">Men's</div>
          </div>
          <div className="main-categories-item">
            <div><img src="images/main-categories3.png" alt="main-categories3" /></div>
            <div className="main-categories-title">Kids'</div>
          </div>
        </div>
      </section>
      <section>
        <div className="home-new">
          <div className="home-new-caption">
            <h3 className="home-new-title">New arrivals</h3>
            <div className="home-new-subtitle">Check out our latest arrivals for the upcoming season</div>
            <a href="">See the collection here</a>
          </div>
          <div className="home-new-box d-f">
            <ProductsListItem
              image='images/new-product1.png'
              title='Black and white sport cap'
              price={18.15}
              rating={5}
              handleCartCount={handleCartCount}
            />
            <ProductsListItem
              image='images/new-product2.png'
              title='Metal bridge sunglasses'
              price={89.95}
              handleCartCount={handleCartCount}
            />
            <ProductsListItem
              image='images/new-product3.png'
              title='Green baby romper'
              price={20.40}
              rating={4}
              handleCartCount={handleCartCount}
            />
            <ProductsListItem
              image='images/new-product4.png'
              title='Mid-rise slim cropped fit jeans'
              price={40.00}
              handleCartCount={handleCartCount}
            />
            <ProductsListItem
              image='images/new-product5.png'
              title='Red dangle earrings'
              price={29.95}
              rating={5}
              handleCartCount={handleCartCount}
            />
            <ProductsListItem
              image='images/new-product6.png'
              title='Baby shoes with laces'
              price={30.60}
              handleCartCount={handleCartCount}
            />
          </div>
          <div className="home-new-dots d-f align-center">
            <div className="home-new-dot new-dot__active"></div>
            <div className="home-new-dot"></div>
            <div className="home-new-dot"></div>
            <div className="home-new-dot"></div>
            <div className="home-new-dot"></div>
            <div className="home-new-dot"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="home-banners">
          <div className="home-banner">
            <div className="home-banner-undertitle">Summer Collections</div>
            <div className="home-banner-title">Sale Up to 70%</div>
            <button className='home-banner-btn'>Explore new prices</button>
          </div>
          <div className="home-banner">
            <div className="home-banner-undertitle" >Deal of the week</div>
            <div className="home-banner-title" style={{ width: "306px" }}>Stay Warm With Our New Sweaters</div>
            <button className='home-banner-btn'>Shop now</button>
            <div className="home-banner-undertitle" style={{ marginTop: "79px" }}>Limited time offer</div>
            <div className="home-banner-time d-f">
              <div>
                <div className="banner-time-num">06</div>
                <div className="banner-time-desc">Days</div>
              </div>
              <div>
                <div className="banner-time-num">18</div>
                <div className="banner-time-desc">Hours</div>
              </div>
              <div>
                <div className="banner-time-num">24</div>
                <div className="banner-time-desc">Mins</div>
              </div>
              <div>
                <div className="banner-time-num">12</div>
                <div className="banner-time-desc">Sec</div>
              </div>
            </div>
          </div>
          <div className="home-banner">
            <div className="home-banner-undertitle">New collection</div>
            <div className="home-banner-title">Shoes & Bags <br /> autumn / winter 2020</div>
            <button className='home-banner-btn'>See offers</button>
          </div>
          <div className="home-banner">
            <div className="home-banner-undertitle">For All new Email Subscribers</div>
            <div className="home-banner-title">Get 5% Off & Free Delivery</div>
            <form className="home-banner-fm">
              <label htmlFor="email">Email</label>
              <div className='d-f' style={{ marginTop: "8px" }}>
                <input type="email" name="email" id="email" placeholder='Your working email' />
                <button>Subscribe</button>
              </div>
              <div className='banner-form-info'>
                *Sign up to be the first to hear about exclusive deals, special offers and upcoming collections.
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        <div className="home-popular">
          <h3 className="home-popular-title">Popular categories</h3>
          <div className="home-popular-box d-f">
            <div className="home-popular-item">
              <div className="popular-item-img"><img src="images/popular1.png" alt="popular1" /></div>
              <div className="popular-item-title">Tops</div>
            </div>
            <div className="home-popular-item">
              <div className="popular-item-img"><img src="images/popular2.png" alt="popular2" /></div>
              <div className="popular-item-title">T-shirts</div>
            </div>
            <div className="home-popular-item">
              <div className="popular-item-img"><img src="images/popular3.png" alt="popular3" /></div>
              <div className="popular-item-title">Caps</div>
            </div>
            <div className="home-popular-item">
              <div className="popular-item-img"><img src="images/popular4.png" alt="popular4" /></div>
              <div className="popular-item-title">Sandals</div>
            </div>
            <div className="home-popular-item">
              <div className="popular-item-img"><img src="images/popular5.png" alt="popular5" /></div>
              <div className="popular-item-title">Jackets</div>
            </div>
            <div className="home-popular-item">
              <div className="popular-item-img"><img src="images/popular6.png" alt="popular6" /></div>
              <div className="popular-item-title">Coats</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="home-trending">
          <div className="home-trending-caption d-f jc-sb align-center">
            <h3 className="home-trending-title">Trending now</h3>
            <div className="home-trending-controls d-f">
              <button className='trending-controls-btn'>🠐</button>
              <button className='trending-controls-btn controls-btn__active'>🠒</button>
            </div>
          </div>
          <div className="home-trending-box d-f jc-sb">
            <ProductsListItem
              image='images/trending1.png'
              title='Shirt with insertion lace trims'
              price={49.95}
              rating={5}
              handleCartCount={handleCartCount}
            />
            <ProductsListItem
              image='images/trending2.png'
              title='Chrono watch with blue leather belt'
              price={120.60}
              rating={4}
              handleCartCount={handleCartCount}
            />
            <ProductsListItem
              image='images/trending3.png'
              title='Check coat with colour contrast'
              price={183.45}
              handleCartCount={handleCartCount}
            />
          </div>
          <button className='home-trending-btn'>Explore top sales</button>
        </div>
      </section>
      <section>
        <div className="home-sale">
          <div className="home-trending-caption d-f jc-sb align-center">
            <h3 className="home-trending-title">Sale up to 70%</h3>
            <div className="home-trending-controls d-f">
              <button className='trending-controls-btn'>🠐</button>
              <button className='trending-controls-btn controls-btn__active'>🠒</button>
            </div>
          </div>
          <div className="home-sale-box d-f">
            <ProductsListItem
              image='images/sale1.png'
              title='Leather crossbody bag with gold hardware'
              price={89.50}
              rating={5}
              oldPrice={179.00}
              sale={50}
              handleCartCount={handleCartCount}
            />
            <ProductsListItem
              image='images/sale2.png'
              title='Skinny push-up jeans'
              price={40.00}
              oldPrice={80.00}
              sale={50}
              handleCartCount={handleCartCount}
            />
            <ProductsListItem
              image='images/sale3.png'
              title='Wide heel suede ankle boots'
              price={119.16}
              rating={5}
              oldPrice={148.95}
              sale={20}
              handleCartCount={handleCartCount}
            />
          </div>
          <button className='home-trending-btn' style={{ width: "252px" }}>See all sale products</button>
        </div>

      </section>
      <section>
        <div className="home-mobile d-f jc-sb align-center">
          <div><img src="images/mobile.png" alt="mobile" /></div>
          <div>
            <div className="home-mobile-title">Enjoy mobile shopping with our Createx Store App!</div>
            <div className="home-mobile-actions d-f">
              <button className='home-mobile-apstore'><span>Download on the</span>App Store</button>
              <button className='home-mobile-gplay'><span>Get it on</span>Google Play</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="home-advantages d-f jc-sb">
          <div className="home-advantages-item">
            <div className="advantages-item-img"><img src="images/adv1.png" alt="advantages1" /></div>
            <div className="advantages-item-title">Fast Worldwide Shipping</div>
            <div className="advantages-item-subtitle">Get free shipping over $250</div>
          </div>
          <div className="home-advantages-item">
            <div className="advantages-item-img"><img src="images/adv2.png" alt="advantages2" /></div>
            <div className="advantages-item-title">24/7 Customer Support</div>
            <div className="advantages-item-subtitle">Friendly 24/7 customer support</div>
          </div>
          <div className="home-advantages-item">
            <div className="advantages-item-img"><img src="images/adv3.png" alt="advantages3" /></div>
            <div className="advantages-item-title">Money Back Guarantee</div>
            <div className="advantages-item-subtitle">We return money within 30 day</div>
          </div>
          <div className="home-advantages-item">
            <div className="advantages-item-img"><img src="images/adv4.png" alt="advantages4" /></div>
            <div className="advantages-item-title">Secure Online Payment</div>
            <div className="advantages-item-subtitle">Accept all major credit cards</div>
          </div>
        </div>
      </section>
      <section>
        <div className="home-instagram d-f jc-sb">
          <div>
            <div className="home-instagram-undertitle">Follow us on Instagram</div>
            <div className="home-instagram-title">@createx_store</div>
            <button className='home-instagram-btn'>Follow instagram</button>
          </div>
          <div className='home-instagram-img d-f'>
            <div><img src="images/instagram1.png" alt="instagram" /></div>
            <div><img src="images/instagram2.png" alt="instagram" /></div>
            <div><img src="images/instagram3.png" alt="instagram" /></div>
          </div>
        </div>
      </section>
      <section>
        <div className="home-fashion">
          <div className="d-f jc-sb">
            <h3 className="home-fashion-title">Fashion blog</h3>
            <button className="home-fashion-btn">View blog</button>
          </div>
          <div className="home-fashion-box d-f jc-sb">
            <div className="home-fashion-item">
              <div className="fashion-item-img"><img src="images/fashion1.png" alt="fashion1" /></div>
              <div className="fashion-item-title">Bag Trends for Summer 2020</div>
              <div className="fashion-item-info d-f">
                <div className="fashion-item-cat">Fashion</div>
                <div className="fashion-item-date">August 24, 2020</div>
                <div className="fashion-item-comments">No comments</div>
              </div>
              <div className="fashion-item-desc">
                Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel,
                venenatis nulla. Integer bibendum turpis convallis...
              </div>
            </div>
            <div className="home-fashion-item">
              <div className="fashion-item-img"><img src="images/fashion2.png" alt="fashion2" /></div>
              <div className="fashion-item-title">Top 10 of This Season’s Hottest Sneakers</div>
              <div className="fashion-item-info d-f">
                <div className="fashion-item-cat">Lifestyle</div>
                <div className="fashion-item-date">July 16, 2020</div>
                <div className="fashion-item-comments">4 comments</div>
              </div>
              <div className="fashion-item-desc">
                Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque.
                Rhoncus augue faucibus maecenas lacus...
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="home-brands d-f jc-sb">
          <div><img src="images/home-brands1.png" alt="home-brands1" /></div>
          <div><img src="images/home-brands2.png" alt="home-brands2" /></div>
          <div><img src="images/home-brands3.png" alt="home-brands3" /></div>
          <div><img src="images/home-brands4.png" alt="home-brands4" /></div>
          <div><img src="images/home-brands5.png" alt="home-brands5" /></div>
          <div><img src="images/home-brands6.png" alt="home-brands6" /></div>
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
              <div className='d-f' style={{marginBottom: "8px"}}>
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

export default Home