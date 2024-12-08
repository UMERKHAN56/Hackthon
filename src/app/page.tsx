import './globals.css';
import Image from 'next/image';
import Navbar from './Navbar';

export default function Home(){
  return( 
  <div>
    <div className='section'>
    <Navbar/>
    <div className="homepage">
    <div ><span className='head'>Rocket single <br></br>seater</span>
      <div className='shop'>Shop Now</div>
    </div>
   
  <img src="/images/image1.png" alt="" /></div>
</div>
<div className='centresection'>
  <div className='table'><img src="/images/image2.png" alt="" />
  </div>
  <div className='sofa'> <img src="/images/image3.png" alt="" /></div>
  <div className='write'><h1>Side Table</h1>
  <div className='heading1'><h1>View More</h1></div>
  </div>
  <div className='write2'><h1>Side Table</h1>
  <div className='heading2'><h1>View More</h1></div>
  </div>
</div>
<div>
  <div className='heading3'><h1>Top Picks For You</h1></div>
  <div className='line'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</div>
</div>
<div className='chair'>
  <div className='trenton'><img src="images/image4.png" alt="" />
  <h1>Trenton modular sofa_3</h1>
  <h2>Rs. 25,000.00</h2>
  </div>
  <div className='dining'> <img src="images/image5.png" alt="" />
  <h1>Granite dining table with dining chair</h1>
  <h2>Rs. 25,000.00</h2>
  </div>
  <div className='bar'><img src="images/image6.png" alt="" />
  <h1>Outdoor bar table and stool</h1>
  <h2>Rs. 25,000.00</h2>
  </div>
  <div className='plain'>
    <img src="images/image7.png" alt="" />
    <h1>Plain console with teak mirror</h1>
    <h2>Rs. 25,000.00</h2>
  </div>
</div>
{/* <table>
  <tr>
    <td>
      <img src="images/image4.png" alt="Trenton modular sofa_3" />
      <div className="product-name">Trenton modular sofa_3</div>
      <div className="product-price">Rs. 25,000.00</div>
    </td>
    <td>
      <img src="images/image5.png" alt="Granite dining table with dining chair" />
      <div className="product-name">Granite dining table with dining chair</div>
      <div className="product-price">Rs. 25,000.00</div>
    </td>
    <td className="stool">
      <img src="images/image6.png" alt="Outdoor bar table and stool" />
      <div className="product-name">Outdoor bar table and stool</div>
      <div className="product-price">Rs. 25,000.00</div>
    </td>
    <td>
      <img src="images/image7.png" alt="Plain console with teak mirror" />
      <div className="product-name">Plain console with teak mirror</div>
      <div className="product-price">Rs. 25,000.00</div>
    </td>
  </tr>
</table> */}

  <div className='heading4'><h1>View More</h1></div>
<div>

</div>
<div className='grd'>
  <div><img src="images/image8.png" alt="" /></div>
  <div className='h5'><p>New Arrivals</p>
  <h1>Asgaard Sofa</h1>
  <button>Open</button>
  </div>

</div>

<div>
  <div className='heading '>
<h1>
  Our Blogs 
</h1>
<p>
Find a bright ideal to suit your taste with our great selection
</p></div>
<div className='images'>
 <div className='i1'> <img src="/images/image9.jpg" alt="" />
 <p>Going all-in with millennial design</p>
 <h1>Read More</h1>
 </div>
  <div className='i2'><img src="/images/image10.jpg" alt="" />
  <p>Going all-in with millennial design</p>
 <h1>Read More</h1>
  </div>
 <div className='i3'> <img src="/images/image11.jpg" alt="" />
 <p>Going all-in with millennial design</p>
 <h1>Read More</h1>
 </div>
</div>
<div className='post'><h1>View All Post</h1></div>
</div>

<div className='image'>
  <div  className='follow'> <h1>Our Instagram</h1>
  <h2>Follow our store on Instagram</h2>
  <button>Follow us</button></div>
</div>
<footer>
<footer className="footer">
      <div className="footer-container">
        {/* Address Section */}
        <div className="footer-column">
          <p>400 University Drive Suite 200<br />Coral Gables, FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="footer-column">
          <h3>Help</h3>
          <ul>
            <li><a href="#">Payment Options</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-column">
          <h3>Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="newsletter-input"
            />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>2022 Meubel House. All rights reserved</p>
      </div>
    </footer>

</footer>

    </div>
    
  )
}