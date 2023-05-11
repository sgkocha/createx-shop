import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 512,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type HeaderProps = {
    cartCount: number
}

const Header = ({ cartCount }: HeaderProps) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [signin, setSignin] = React.useState(false)
    const handleSignin = () => {
        setSignin((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <div className='header'>
            <div className="header-info d-f jc-sb align-center">
                <div className="header-info-available">Available 24/7 at <span>(405) 555-0128</span></div>
                <nav>
                    <ul className="header-nav-list d-f align-center">
                        <li className="nav-list-item"><Link to="single-product">Delivery & returns</Link></li>
                        <li className="nav-list-item"><Link to="track-order">Track order</Link></li>
                        <li className="nav-list-item"><Link to="blog">Blog</Link></li>
                        <li className="nav-list-item"><Link to="contacts">Contacts</Link></li>
                    </ul>
                </nav>
                <div className="header-info-lang">Eng / $</div>
                <div className="header-info-login d-f">
                    <div><img src="images/person.png" alt="person" /></div>
                    <div>
                        <button className='info-login-btn' onClick={handleOpen}>Log in / Register</button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title"
                                    variant="h3" component="h3"
                                    style={{
                                        fontWeight: 700,
                                        fontSize: "28px",
                                        lineHeight: "150%",
                                        textAlign: "center",
                                        color: "#1E212C"
                                    }}>
                                    {signin ? "Sign in" : "Sign Up"}
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: "24px" }}
                                    style={{
                                        width: "390px",
                                        fontWeight: 400,
                                        fontSize: "14px",
                                        lineHeight: "150%",
                                        textAlign: "center",
                                        color: "#787A80"
                                    }}
                                >
                                    {signin ? "Sign in to your account using email and password provided during registration." : 
                                    "Registration takes less than a minute but gives you full control over your orders"}
                                </Typography>
                                <form action="" className='header-signup-fm'>
                                    <div className= {signin ? "d-n": "signup-input-block"}  >
                                        <label htmlFor="fullName">Full Name</label>
                                        <input type="text" name="fullName" id="fullName" placeholder='Your full name' />
                                    </div>
                                    <div className="signup-input-block">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" placeholder='Your working email' />
                                    </div>
                                    <div className="signup-input-block">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password" placeholder='******************' />
                                    </div>
                                    <div className={signin ? "d-n" : "signup-input-block"} >
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder='******************' />
                                    </div>
                                    <div className="signup-check-block d-f align-center">
                                        <input type="checkbox" name="remember" id="remember" />
                                        <label htmlFor="remember">{signin ? "Keep me signed in" : "Remember me"}</label>
                                    </div>
                                    <button className='signup-btn' onClick={handleClose}> {signin ? "Sign in" : "Sign up"} </button>
                                    <div className="signup-already">
                                       {signin ? "Don't have an account?" : "Already have an account?" } 
                                        <span onClick={handleSignin}>{signin ? "Sign up" : "Sign in"} </span> 
                                    </div>
                                </form>
                                <div className="signup-social">
                                    <div className="signup-social-title">Or sign in with</div>
                                    <div className="signup-social-box d-f">
                                        <div><img src="images/signup-social/facebook.png" alt="facebook" /></div>
                                        <div><img src="images/signup-social/google.png" alt="google" /></div>
                                        <div><img src="images/signup-social/twitter.png" alt="twitter" /></div>
                                        <div><img src="images/signup-social/linkedin.png" alt="linkedin" /></div>
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className="header-bar d-f jc-sb align-center">
                <div className="header-logo"> <Link to="/"><img src="images/logo.png" alt="logo" /></Link> </div>
                <nav>
                    <ul className="header-bar-list d-f align-center">
                        <li className="bar-list-item"><Link to="women">Women</Link></li>
                        <li className="bar-list-item"><a href="">Men</a></li>
                        <li className="bar-list-item"><a href="">Girls</a></li>
                        <li className="bar-list-item"><a href="">Boys</a></li>
                        <li className="bar-list-item"><a href="">Sale</a></li>
                    </ul>
                </nav>
                <div className='header-bar-stats d-f align-center'>
                    <form className="header-search-fm d-f">
                        <input type="text" name='query' placeholder='Search for products...' />
                        <button><img src="images/search.png" alt="search" /></button>
                    </form>
                    <div className="header-bar-like d-f">
                        <img src="images/outline.png" alt="outline" />
                        <div className="bar-like-count">2</div>
                    </div>
                    <div className="header-bar-cart d-f">
                        <img src="images/cart.png" alt="cart" />
                        <div className="bar-cart-count">{cartCount}</div>
                    </div>
                </div>
            </div>
            <div className="header-sale">
                <div className="header-sale-content d-f align-center">
                    <div><img src="images/left-chevron.png" alt="left-chevron" /></div>
                    <div className="header-sale-title">
                        Up to 70% Off.
                        <a href="">Shop our latest sale styles</a>
                    </div>
                    <div><img src="images/right-chevron.png" alt="right-chevron" /></div>
                </div>
            </div>
        </div>
    )
}

export default Header