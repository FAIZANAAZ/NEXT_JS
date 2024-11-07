

import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
    <div className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between gap-10">
            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">G lovely</h2>
                <p className="mb-2"><i className="fas fa-map-marker-alt"></i> Address : No 40 Baria Street 133/2, NewYork, USA.</p>
                <p className="mb-2 flex"> Phone<BsTelephoneFill size={20}/>
                : +92 123 456 789</p>
                <p className="mb-2 flex">Email <MdOutlineEmail size={20}/>: giftnaaz@gmail.com</p>
                <div className="flex mt-4">
                    <input type="email" placeholder="Enter your email" className="p-2 rounded-l-md text-black w-full" />
                    <button className="bg-blue-500 p-2 rounded-r-md">Subscribe</button>
                </div>
            </div>
            <div className="flex-1">
                <h2 className="text-xl font-bold mb-4">My Account</h2>
                <ul>
                    <li className="mb-2"><i className="fas fa-circle text-blue-500 mr-2"></i>Checkout</li>
                    <li className="mb-2"><i className="fas fa-circle text-blue-500 mr-2"></i>My Account</li>
                    <li className="mb-2"><i className="fas fa-circle text-blue-500 mr-2"></i>My Orders</li>
                    <li className="mb-2"><i className="fas fa-circle text-blue-500 mr-2"></i>My Credit Slips</li>
                    <li className="mb-2"><i className="fas fa-circle text-blue-500 mr-2"></i>My Addresses</li>
                    <li className="mb-2"><i className="fas fa-circle text-blue-500 mr-2"></i>My Personal Info</li>
                </ul>
            </div>
            <div className="flex-1">
                <h2 className="text-xl font-bold mb-4">Information</h2>
                <ul>
                    <li className="mb-2"><i className="fas fa-circle text-blue-500 mr-2"></i>Specials</li>
                    <li className="mb-2"><i className="fas fa-circle text-blue-500 mr-2"></i>New Products</li>
                    <li className="mb-2"><i className="fas fa-circle text-blue-500 mr-2"></i>Best Sellers</li>
                    <li className="mb-2"><i className="fas fa-circle text-blue-500 mr-2"></i>Our Stores</li>
                    <li className="mb-2"><i className="fas fa-circle text-blue-500 mr-2"></i>Contact Us</li>
                    <li className="mb-2"><i className="fas fa-circle text-blue-500 mr-2"></i>Secure Payment</li>
                </ul>
            </div>
            
        </div>
    </div>
    <div className="bg-yellow-300 text-center p-4 font-bold">
        <p>
        Every gift tells a story, every smile shares our love. 🎁 <br />Thank you for choosing us! 😊</p>
    </div>
      
    </div>
  )
}

export default Footer
