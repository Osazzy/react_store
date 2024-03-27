import React from 'react'
import "./Product1.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
function Product1() {
  return (
    <div className="next-section">
      <div className="section1">
        <h1>Other Great Shoes</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, ipsam. Praesentium id, vero molestias rerum optio?</p>
      </div>
      <div className="images">
      <FaCaretLeft className='greater'/>

        <div className="blue">
          <img src="./public/istockphoto-1372927070-612x612 (1).png" alt="image" />
          <h1>Nike With Gold</h1>
          <p>It's Still in Stock</p>
          <h2>$120</h2>
        </div>
        <div className='blue1'>
          <img src="./public/istockphoto-1372927070-612x612 (1).png" alt="image" />
          <h1>Nike With Silver</h1>
          <p>Get a Discount Now</p>
          <h2>$95</h2>
        </div>
        <div className='blue2'>
          <img src="./public/istockphoto-1372927070-612x612 (1).png" alt="image" />
          <h1>Nike With White</h1>
          <p>Buy While Over Last</p>
          <h2>$85</h2>
        </div>
        <FaCaretRight className='greater1'/>
      </div>
      <div className='write'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
    </div>

  )
}

export default Product1