import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCaretSquareRight } from "react-icons/fa";
import "./Product.css";
function Product() {
  return (
    <div className="pro_container">
      <div className="left">
        <div className="img">
          <img
            src="../public/imphoto-ezgif.com-webp-to-jpg-converter.png"
            alt="image" />

          <div className="img1" >
            <img src="K800247-001_T.png" alt="image" />
          </div>
          <div className="img2">
            <img src="../public/istockphoto-1372927070-612x612 (1).png" alt="image" />
          </div>
          <div className="img3">
            <img src="../public/istockphoto-1372927070-612x612 (1).png" alt="image" />
          </div>
        </div>
      </div>
      <div className="ryt">
        <div className="pro_desc">
          <h1>Product Name</h1>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <div className="ico">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="grey" />
          </div>
          <div className="p">
            <p className="price">$120</p>
            <p className="style">style #:279hfd</p>
          </div>

          <form>
            <select name="" id="">
              <option value="">#r24b</option>
            </select>
            <select name="" id="">
              <option value="">Qty24a</option>
            </select>
            <button>ADD TO CART</button>
          </form>
        </div>
      </div>
      <div className="container2">
        <div className="sub-container">
          <input type="search" name="" placeholder="Search for Items" id="" />
          <FaCaretSquareRight className="icon" />
        </div>
        <div className="writeup">
<h1>Fuhueii</h1>
<h2>Lorem Fujiwara's Fragment Collaboration With Nike</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima velit commodi iste voluptatem, expedita rerum numquam. Corporis aut saepe placeat iste illo maiores, vel alias qui nulla deleniti, quisquam velit unde necessitatibus odio illum omnis facilis vitae, culpa magnam quidem laboriosam nemo id eveniet sit? Dolores beatae enim deleniti! Vel.</p>
</div>
      </div>
      <div className="container3">
<div className="shoe-left">
<img src="../public/imphoto-ezgif.com-webp-to-jpg-converter.png" alt="image" />
</div>
<div className="shoe-right">
<h1>Hyjadkjfjkj Fijiwara's X Nike</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusamus minima quo sit quasi, omnis maxime! In, dolorum? </p>
<button className="button1">Click To Buy</button>
</div>
      </div>
    </div>

  );
}

export default Product;
