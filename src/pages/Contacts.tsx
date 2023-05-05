import React from 'react'
import './Contacts.css'

const Contacts = () => {
    const [tabNum, setTabNum] = React.useState(1)

    const handleTabNum = (num: number) => {
        return (
            setTabNum(num)
        )
    }

    const [showAnswerOne, setShowAnswerOne] = React.useState(false)
    const [showAnswerTwo, setShowAnswerTwo] = React.useState(false)
    const [showAnswerThree, setShowAnswerThree] = React.useState(false)
    const [showAnswerFour, setShowAnswerFour] = React.useState(false)
    const [showAnswerFive, setShowAnswerFive] = React.useState(false)
    const [showAnswerSix, setShowAnswerSix] = React.useState(false)
    const [showAnswerSeven, setShowAnswerSeven] = React.useState(false)
    const [showAnswerEight, setShowAnswerEight] = React.useState(false)
    const [showAnswerNine, setShowAnswerNine] = React.useState(false)

    const handleShowAnswerOne = () => {
        setShowAnswerOne((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleShowAnswerTwo = () => {
        setShowAnswerTwo((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleShowAnswerThree = () => {
        setShowAnswerThree((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleShowAnswerFour = () => {
        setShowAnswerFour((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleShowAnswerFive = () => {
        setShowAnswerFive((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleShowAnswerSix = () => {
        setShowAnswerSix((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleShowAnswerSeven = () => {
        setShowAnswerSeven((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleShowAnswerEight = () => {
        setShowAnswerEight((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleShowAnswerNine = () => {
        setShowAnswerNine((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <main>
            <section>
                <div className="contacts-main d-f">
                    <div className="contacts-menu">
                        <div
                            className={tabNum === 1 ? "contacts-menu-item menu-item__active" : "contacts-menu-item"}
                            onClick={() => handleTabNum(1)}
                        >
                            Contact Us
                        </div>
                        <div
                            className={tabNum === 2 ? "contacts-menu-item menu-item__active" : "contacts-menu-item"}
                            onClick={() => handleTabNum(2)}
                        >
                            Outlet Stores
                        </div>
                        <div
                            className={tabNum === 3 ? "contacts-menu-item menu-item__active" : "contacts-menu-item"}
                            onClick={() => handleTabNum(3)}
                        >
                            FAQ
                        </div>
                    </div>
                    <div className={tabNum === 1 ? "contacts-content" : "d-n"} >
                        <h3 className="contacts-content-title" style={{ width: "810px" }}>
                            If you have any questions, concerns or comments, we would love to hear from you!
                            Submit your query using any of the methods below:
                        </h3>
                        <div className="contacts-content-info">
                            <div className="contacts-content-phone">(405) 555-0128</div>
                            <div className="contacts-content-email">Send us an email</div>
                            <div className="contacts-content-messenger">Connect on Messenger</div>
                            <div className="contacts-content-tweet">Tweet us</div>
                        </div>
                        <form className="contacts-content-fm">
                            <h3 className="contacts-content-title">Or get in touch with us by completing the below form:</h3>
                            <div className="contacts-input-box d-f">
                                <div className='contacts-input-bl'>
                                    <label htmlFor="customerName">Full Name</label>
                                    <input type="text" name='customerName' id='customerName' placeholder='Your full name' />
                                </div>
                                <div className='contacts-input-bl'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name='email' id='email' placeholder='Your working email' />
                                </div>
                                <div className='contacts-input-bl'>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" name='phone' id='phone' placeholder='Your phone number' />
                                </div>
                                <div className='contacts-input-bl'>
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" name='subject' id='phone' placeholder='Title your message' />
                                </div>
                            </div>
                            <div className="contacts-msg-bl">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" placeholder='Write your message here' />
                            </div>
                            <button type="submit" onClick={(event) => event.preventDefault()}>Send message</button>
                        </form>
                    </div>
                    <div className={tabNum === 2 ? "contacts-content" : "d-n"} >
                        <div className="contacts-content-box d-f">
                            <div className="contacts-content-item">
                                <div className="content-item-img"><img src="images/contacts-location1.png" alt="contacts-location" /></div>
                                <div className="content-item-location">New York, USA</div>
                                <div className="content-item-phone">(405) 555-0128</div>
                                <div className="content-item-email">hello@createx.com</div>
                                <div className="content-item-time">Daily from 9 am to 9 pm</div>
                                <div className="content-item-address">20 W 29th Street New York, NY 10001</div>
                            </div>
                            <div className="contacts-content-item">
                                <div className="content-item-img"><img src="images/contacts-location2.png" alt="contacts-location" /></div>
                                <div className="content-item-location">Delaware, USA</div>
                                <div className="content-item-phone">(808) 555-0111</div>
                                <div className="content-item-email">delaware@createx.com</div>
                                <div className="content-item-time">Daily from 10 am to 9 pm</div>
                                <div className="content-item-address">6391 Elgin St. Celina, Delaware 10299</div>
                            </div>
                            <div className="contacts-content-item">
                                <div className="content-item-img"><img src="images/contacts-location3.png" alt="contacts-location" /></div>
                                <div className="content-item-location">New Jersey, USA</div>
                                <div className="content-item-phone">(702) 555-0122</div>
                                <div className="content-item-email">newjersey@createx.com</div>
                                <div className="content-item-time">Daily from 9 am to 8 pm</div>
                                <div className="content-item-address">2464 Royal Ln. Mesa, New Jersey 45463</div>
                            </div>
                            <div className="contacts-content-item">
                                <div className="content-item-img"><img src="images/contacts-location4.png" alt="contacts-location" /></div>
                                <div className="content-item-location">Maine, USA</div>
                                <div className="content-item-phone">(219) 555-0114</div>
                                <div className="content-item-email">maine@createx.com</div>
                                <div className="content-item-time">Daily from 9 am to 9 pm</div>
                                <div className="content-item-address">8502 Preston Rd. Inglewood, Maine 98380</div>
                            </div>
                        </div>
                    </div>
                    <div className={tabNum === 3 ? "contacts-content" : "d-n"} >
                        <div className='faq-item'>
                            <div className="faq-question-wr d-f">
                                <h3 className="faq-question">Do I need to register to place an order?</h3>
                                <div style={{ cursor: "pointer" }} onClick={() => handleShowAnswerOne()}>
                                    <img src={showAnswerOne ? "images/minus.png" : "images/plus.png"} alt="minus/plus" />
                                </div>
                            </div>
                            <p className={showAnswerOne ? "faq-answer" : "d-n"}>
                                Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus.
                                Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.
                            </p>
                        </div>
                        <div className='faq-item'>
                            <div className="faq-question-wr d-f">
                                <h3 className="faq-question">What is the estimated delivery time?</h3>
                                <div style={{ cursor: "pointer" }} onClick={() => handleShowAnswerTwo()}>
                                    <img src={showAnswerTwo ? "images/minus.png" : "images/plus.png"} alt="minus/plus" />
                                </div>
                            </div>
                            <p className={showAnswerTwo ? "faq-answer" : "d-n"}>
                                Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus.
                                Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.
                            </p>
                        </div>
                        <div className='faq-item'>
                            <div className="faq-question-wr d-f">
                                <h3 className="faq-question">How can I pay for my order?</h3>
                                <div style={{ cursor: "pointer" }} onClick={() => handleShowAnswerThree()}>
                                    <img src={showAnswerThree ? "images/minus.png" : "images/plus.png"} alt="minus/plus" />
                                </div>
                            </div>
                            <p className={showAnswerThree ? "faq-answer" : "d-n"}>
                                Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus.
                                Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.
                            </p>
                        </div>
                        <div className='faq-item'>
                            <div className="faq-question-wr d-f">
                                <h3 className="faq-question">Can I get a refund if the price has changed since I ordered it?</h3>
                                <div style={{ cursor: "pointer" }} onClick={() => handleShowAnswerFour()}>
                                    <img src={showAnswerFour ? "images/minus.png" : "images/plus.png"} alt="minus/plus" />
                                </div>
                            </div>
                            <p className={showAnswerFour ? "faq-answer" : "d-n"}>
                                Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus.
                                Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.
                            </p>
                        </div>
                        <div className='faq-item'>
                            <div className="faq-question-wr d-f">
                                <h3 className="faq-question">Do you refund delivery charges if I return something?</h3>
                                <div style={{ cursor: "pointer" }} onClick={() => handleShowAnswerFive()}>
                                    <img src={showAnswerFive ? "images/minus.png" : "images/plus.png"} alt="minus/plus" />
                                </div>
                            </div>
                            <p className={showAnswerFive ? "faq-answer" : "d-n"}>
                                Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus.
                                Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.
                            </p>
                        </div>
                        <div className='faq-item'>
                            <div className="faq-question-wr d-f">
                                <h3 className="faq-question">What documents will be provided with the order?</h3>
                                <div style={{ cursor: "pointer" }} onClick={() => handleShowAnswerSix()}>
                                    <img src={showAnswerSix ? "images/minus.png" : "images/plus.png"} alt="minus/plus" />
                                </div>
                            </div>
                            <p className={showAnswerSix ? "faq-answer" : "d-n"}>
                                Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus.
                                Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.
                            </p>
                        </div>
                        <div className='faq-item'>
                            <div className="faq-question-wr d-f">
                                <h3 className="faq-question">Can I return the order to the courier if anything does not suit me?</h3>
                                <div style={{ cursor: "pointer" }} onClick={() => handleShowAnswerSeven()}>
                                    <img src={showAnswerSeven ? "images/minus.png" : "images/plus.png"} alt="minus/plus" />
                                </div>
                            </div>
                            <p className={showAnswerSeven ? "faq-answer" : "d-n"}>
                                Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus.
                                Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.
                            </p>
                        </div>
                        <div className='faq-item'>
                            <div className="faq-question-wr d-f">
                                <h3 className="faq-question">What should I do if my order hasn't been delivered yet?</h3>
                                <div style={{ cursor: "pointer" }} onClick={() => handleShowAnswerEight()}>
                                    <img src={showAnswerEight ? "images/minus.png" : "images/plus.png"} alt="minus/plus" />
                                </div>
                            </div>
                            <p className={showAnswerEight ? "faq-answer" : "d-n"}>
                                Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus.
                                Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.
                            </p>
                        </div>
                        <div className='faq-item'>
                            <div className="faq-question-wr d-f">
                                <h3 className="faq-question">What is your Returns Policy?</h3>
                                <div style={{ cursor: "pointer" }} onClick={() => handleShowAnswerNine()}>
                                    <img src={showAnswerNine ? "images/minus.png" : "images/plus.png"} alt="minus/plus" />
                                </div>
                            </div>
                            <p className={showAnswerNine ? "faq-answer" : "d-n"}>
                                Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus.
                                Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.
                            </p>
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

export default Contacts