import React from 'react'
import './TrackOrder.css'

const TrackOrder = () => {
    return (
        <main>
            <div className="track d-f">
                <div>
                    <h3 className="track-title">Track your order</h3>
                    <div className="track-subtitle">
                        This form allows you to search for tracking details from anywhere within Createx Tracking Service.
                    </div>
                    <form className="track-fm">
                        <label htmlFor="order">Order No</label>
                        <div className="input-bl d-f">
                            <input type="text" name='order' id='order' placeholder='# 34BV66580K92' />
                            <button>Search</button>
                        </div>
                        <div className="track-result">
                            <div className="track-result-item d-f">
                                <div className="track-result-title">Order No:</div>
                                <div className="track-result-info">34BV66580K92</div>
                            </div>
                            <div className="track-result-item d-f">
                                <div className="track-result-title">Shiped via:</div>
                                <div className="track-result-info">UPS Ground</div>
                            </div>
                            <div className="track-result-item d-f">
                                <div className="track-result-title">Shipped on:</div>
                                <div className="track-result-info">August 29, 2020, 6:00 pm</div>
                            </div>
                            <div className="track-result-item d-f">
                                <div className="track-result-title">Destination:</div>
                                <div className="track-result-info">London, United Kingdom</div>
                            </div>
                            <div className="track-result-item d-f">
                                <div className="track-result-title">Expected date:</div>
                                <div className="track-result-info">September 4, 2020</div>
                            </div>
                            <div className="track-result-item d-f">
                                <div className="track-result-title">Status:</div>
                                <div className="track-result-info">In Transit</div>
                            </div>
                        </div>
                        <div className="check-bl d-f align-center">
                            <input type="checkbox" name="notify" id="notify" />
                            <label htmlFor="notify">Notify me when order is delivered</label>
                        </div>
                    </form>

                </div>
                <div className='track-about-wr d-f'>
                    <div className='track-about-line'><img src="images/line.png" alt="line" /></div>
                    <div className="track-about">
                        <table>
                
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>Location</th>
                                     <th>Date</th>  
                                     <th>Time</th>             
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Order Placed</td>
                                    <td>New York, USA</td>
                                    <td>August 29, 2020</td>
                                    <td>2:00 pm</td>
                                </tr>
                                <tr>
                                    <td>Documentation Prepared</td>
                                    <td>New York, USA</td>
                                    <td>August 29, 2020</td>
                                    <td>3:30 pm</td>
                                </tr>
                                <tr>
                                    <td>Booking Arranged</td>
                                    <td>New York, USA</td>
                                    <td>August 29, 2020</td>
                                    <td>3:35 pm</td>
                                </tr>
                                <tr>
                                    <td>Collected</td>
                                    <td>New York, USA</td>
                                    <td>August 29, 2020</td>
                                    <td>4:00 pm</td>
                                </tr>
                                <tr>
                                    <td>In Transit to Destination</td>
                                    <td>New York, USA</td>
                                    <td>August 29, 2020</td>
                                    <td>4:00 pm</td>
                                </tr>
                                <tr>
                                    <td className='td__unactive'>Arrived at Destination</td>
                                    <td className='td__unactive'>London, United Kingdom</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='td__unactive'>Out for Delivery</td>
                                    <td className='td__unactive'>London, United Kingdom</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='td__unactive'>Delivered</td>
                                    <td className='td__unactive'>London, United Kingdom</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default TrackOrder