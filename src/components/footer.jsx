import React from 'react';
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/x.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16 p-6 flex flex-wrap justify-between">
      <div className="w-full md:w-1/5 p-2">
        <h3 className="text-lg border-b border-white pb-2 mb-2">Popular Brands</h3>
        <ul className="list-none p-0">
          <li>Apple</li>
          <li>Samsung</li>
          <li>Xiaomi</li>
          <li>Realme</li>
          <li>Oppo</li>
          <li>Huawei</li>
          <li>Infinix</li>
          <li>Nokia</li>
          <li>Oneplus</li>
          <li>Google</li>
        </ul>
      </div>
      <div className="w-full md:w-1/5 p-2">
        <h3 className="text-lg border-b border-white pb-2 mb-2">Popular Mobiles</h3>
        <ul className="list-none p-0">
          <li>iPhone 15 Pro</li>
          <li>Samsung Galaxy S22</li>
          <li>OnePlus 12R</li>
          <li>Realme C67</li>
          <li>Oppo A18</li>
          <li>Xiaomi Redmi Note 13</li>
          <li>Samsung Galaxy S23</li>
          <li>Infinix Hot 40 Pro</li>
        </ul>
      </div>
      <div className="w-full md:w-1/5 p-2">
        <h3 className="text-lg border-b border-white pb-2 mb-2">Want to be a Partner</h3>
        <a href="/contact" className="text-blue-400">Contact Us</a>
      </div>
      <div className="w-full md:w-1/5 p-2">
        <h3 className="text-lg border-b border-white pb-2 mb-2">Subscribe to our newsletter</h3>
        <input type="email" placeholder="name@email.com" className="p-2 text-black w-full mb-2 rounded-3xl" />
        <button className="bg-blue-500 p-2 text-white w-full rounded-3xl">Subscribe</button>
      </div>
      <div className="w-full md:w-1/5 p-2">
        <h3 className="text-lg border-b border-white pb-2 mb-2">Follow Us</h3>
        <div className="flex space-x-2">
          <a href="https://facebook.com" className="text-blue-600 w-7 h-7"><img src={facebook} alt="" /></a>
          <a href="https://instagram.com" className="text-pink-500 w-7 h-7"><img src={instagram} alt="" /></a>
          <a href="https://twitter.com" className="text-blue-400 w-7 h-7"><img src={twitter} alt="" /></a>
        </div>
      </div>
      <div className="w-full text-center pt-4 border-t border-gray-700 mt-4">
        <p>Copyright © 2003 - 2024 ] Ltd. - All Rights Reserved.</p>
        <p>Reproduction of material from any pages without permission is strictly prohibited.</p>
      </div>
    </footer>
  );
};

export default Footer;
