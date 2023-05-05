import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bar d-f jc-sb">
        <div className="footer-bar-item">
          <div className="footer-bar-title">Help</div>
          <ul className="footer-bar-list">
            <li className="bar-list-item"><a href="">Delivery & returns</a></li>
            <li className="bar-list-item"><a href="">FAQ</a></li>
            <li className="bar-list-item"><a href="">Track order</a></li>
            <li className="bar-list-item"><a href="">Contacts</a></li>
            <li className="bar-list-item"><a href="">Blog</a></li>
          </ul>
        </div>
        <div className="footer-bar-item">
          <div className="footer-bar-title">Shop</div>
          <ul className="footer-bar-list">
            <li className="bar-list-item"><a href="">New arrivals</a></li>
            <li className="bar-list-item"><a href="">FAQ</a></li>
            <li className="bar-list-item"><a href="">Trending now</a></li>
            <li className="bar-list-item"><a href="">Sales</a></li>
            <li className="bar-list-item"><a href="">Brands</a></li>
          </ul>
        </div>
        <div className="footer-bar-item">
          <div className="footer-bar-title">Get in touch</div>
          <div className="footer-bar-call"><span>Call: </span>(405) 555-0128</div>
          <div className="footer-bar-email"><span>Email: </span>hello@createx.com</div>
          <div className="footer-social d-f">
            <div className='footer-social-item'><a href=""><img src="images/social1.png" alt="social1" /></a></div>
            <div className='footer-social-item'><a href=""><img src="images/social2.png" alt="social2" /></a></div>
            <div className='footer-social-item'><a href=""><img src="images/social3.png" alt="social3" /></a></div>
            <div className='footer-social-item'><a href=""><img src="images/social4.png" alt="social4" /></a></div>
            <div className='footer-social-item'><a href=""><img src="images/social5.png" alt="social5" /></a></div>
          </div>
        </div>
        <div className="footer-bar-item">
          <div className="footer-bar-title">Download our app</div>
          <div className="home-mobile-actions d-f">
            <button className='home-mobile-apstore'><span>Download on the</span>App Store</button>
            <button className='home-mobile-gplay'><span>Get it on</span>Google Play</button>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-info d-f jc-sb">
          <div className="footer-rights d-f">
            <div>&copy; All rights reserved. Made with</div>
            <div><img src="images/heart.png" alt="heart" /></div>
            <div>by Createx Studio </div>
          </div>
          <div className="footer-top"><a href="">Go to top</a></div>
      </div>
    </footer>
  )
}

export default Footer