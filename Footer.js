import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
    return (
      
        <footer>
      <div className="footer">
        {/* <a href="#nav-top">
          <div className="footer__button">
            <span>Back to Top</span>
          </div>
        </a>
        <div className="footerSecondary"></div> */}
        <div className="top centered">
        <Link to="/">
          <a href="#nav-top">Back to top</a>
       </Link>    
        </div>

        <div className="middle">
          <div className="center">
            <ul>
              <li>
                <h3>Get to Know Us</h3>
              </li>
              <li>
                <a href="#Career">Careers</a>
              </li>
              <li>
                <a href="#about">About Amazon</a>
              </li>
              <li>
                <a href="#investor">Investor Relations</a>
              </li>
              <li>
                <a href="#devices">Amazon Devices</a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Make Money with Us</h3>
              </li>
              <li>
                <a href="#sell">Sell on Amazon</a>
              </li>
              <li>
                <a href="#aa">Sell Your Services on Amazon</a>
              </li>
              <li>
                <a href="#business">Sell on Amazon Business</a>
              </li>
              <li>
                <a href="#app">Sell Your Apps on Amazon</a>
              </li>
              <li>
                <a href="#aff">Become an Affiliate</a>
              </li>
              <li>
                <a href="#ads">Advertise Your Products</a>
              </li>
              <li>
                <a href="#self">Self-Publish with Us</a>
              </li>
              <li>
                <a href="#vendor">Become an Amazon Vendor</a>
              </li>
              <li>
                <a href="#subs">Sell Your Subscription on Amazon</a>
              </li>
              <li>
                <a href="#see">› See all</a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Amazon Payment Products</h3>
              </li>
              <li>
                <a href="#visa">Amazon Rewards Visa Signature Cards</a>
              </li>
              <li>
                <a href="#card">Amazon.com Store Card</a>
              </li>
              <li>
                <a href="#corp">Amazon.com Corporate Credit Line</a>
              </li>
              <li>
                <a href="#shop">Shop with Points</a>
              </li>
              <li>
                <a href="#card">Credit Card Marketplace</a>
              </li>
              <li>
                <a href="#balance">Reload Your Balance</a>
              </li>
              <li>
                <a href="#curreency">Amazon Currency Converter</a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Let Us Help You</h3>
              </li>
              <li>
                <a href="#account">Your Account</a>
              </li>
              <li>
                <a href="#orders">Your Orders</a>
              </li>
              <li>
                <a href="#shipping">Shipping Rates &amp; Policies</a>
              </li>
              <li>
                <a href="#prime">Amazon Prime</a>
              </li>
              <li>
                <a href="#returns">Returns &amp; Replacements</a>
              </li>
              <li>
                <a href="#content">Manage Your Content and Devices</a>
              </li>
              <li>
                <a href="#assistant">Amazon Assistant</a>
              </li>
              <li>
                <a href="#help">Help</a>
              </li>
            </ul>
          </div>

          <div className="centered">
            <ul className="copy">
              <li>
                {/* <Link to="/"> */}
                <img
                  className="logo"
                  src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                  alt=""
                />
                {/* </Link> */}
              </li>
              <li>
                <a href="#select" className="select">
                  <i className="fa fa-globe" aria-hidden="true"></i> English
                </a>
              </li>
              <li>
                <a href="#select2" className="select">
                  <i className="flag-icon-us"></i>United States
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="center">
            <ul>
              <li>
                <a href="#music">
                  Amazon Music
                  <br />
                  <span>
                    Stream millions
                    <br /> of songs
                  </span>
                </a>
              </li>
              <li>
                <a href="#fresh">
                  AmazonFresh
                  <br />
                  <span>
                    Groceries &amp; More
                    <br /> Right To Your Door
                  </span>
                </a>
              </li>
              <li>
                <a href="#web">
                  Amazon Web Services
                  <br />
                  <span>
                    Scalable Cloud
                    <br /> Computing Services
                  </span>
                </a>
              </li>
              <li>
                <a href="#east">
                  East Dane
                  <br />
                  <span>
                    Designer Men's
                    <br /> Fashion
                  </span>
                </a>
              </li>
              <li>
                <a href="#now">
                  Prime Now
                  <br />
                  <span>
                    FREE 2-Hour Delivery
                    <br /> on Everyday Items
                  </span>
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#drive">
                  Amazon Drive
                  <br />
                  <span>
                    Cloud storage
                    <br /> from Amazon
                  </span>
                </a>
              </li>
              <li>
                <a href="#global">
                  AmazonGlobal
                  <br />
                  <span>
                    Ship Orders
                    <br /> Internationally
                  </span>
                </a>
              </li>
              <li>
                <a href="#audible">
                  Audible
                  <br />
                  <span>
                    Download
                    <br /> Audio Books
                  </span>
                </a>
              </li>
              <li>
                <a href="#fabric">
                  Fabric
                  <br />
                  <span>
                    Sewing, Quilting
                    <br /> &amp; Knitting
                  </span>
                </a>
              </li>
              <li>
                <a href="#photos">
                  Prime Photos
                  <br />
                  <span>
                    Unlimited Photo Storage
                    <br /> Free With Prime
                  </span>
                </a>
              </li>
              <li>
                <a href="#woot">
                  Woot!
                  <br />
                  <span>
                    Deals and <br /> Shenanigans
                  </span>
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#time">
                  6pm
                  <br />
                  <span>
                    Score deals
                    <br /> on fashion brands
                  </span>
                </a>
              </li>
              <li>
                <a href="#homeas">
                  Home Services
                  <br />
                  <span>
                    Handpicked Pros
                    <br /> Happiness Guarantee
                  </span>
                </a>
              </li>
              <li>
                <a href="#book">
                  Book Depository
                  <br />
                  <span>
                    Books With Free
                    <br /> Delivery Worldwide
                  </span>
                </a>
              </li>
              <li>
                <a href="#good">
                  Goodreads
                  <br />
                  <span>
                    Book reviews
                    <br /> &amp; recommendations
                  </span>
                </a>
              </li>
              <li>
                <a href="#shopbop">
                  Shopbop
                  <br />
                  <span>
                    Designer
                    <br /> Fashion Brands
                  </span>
                </a>
              </li>
              <li>
                <a href="#zappos">
                  Zappos
                  <br />
                  <span>
                    Shoes &amp;
                    <br /> Clothing
                  </span>
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#addbooks">
                  AbeBooks
                  <br />
                  <span>
                    Books, art
                    <br /> &amp; collectibles
                  </span>
                </a>
              </li>
              <li>
                <a href="#inspire">
                  Amazon Inspire
                  <br />
                  <span>
                    Free Digital Educational
                    <br /> Resources
                  </span>
                </a>
              </li>
              <li>
                <a href="#box">
                  Box Office Mojo
                  <br />
                  <span>
                    Find Movie
                    <br /> Box Office Data
                  </span>
                </a>
              </li>
              <li>
                <a href="#imdb">
                  IMDb
                  <br />
                  <span>
                    Movies, TV
                    <br /> &amp; Celebrities
                  </span>
                </a>
              </li>
              <li>
                <a href="#ten">
                  TenMarks.com
                  <br />
                  <span>
                    Math Activities
                    <br /> for Kids &amp; Schools
                  </span>
                </a>
              </li>
              <li>
                <a href="#souq">
                  Souq.com
                  <br />
                  <span>
                    Shop Online in
                    <br /> the Middle East
                  </span>
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#acx">
                  ACX <br />
                  <span>
                    Audiobook Publishing
                    <br /> Made Easy
                  </span>
                </a>
              </li>
              <li>
                <a href="#rapids">
                  Amazon Rapids
                  <br />
                  <span>
                    Fun stories for
                    <br /> kids on the go
                  </span>
                </a>
              </li>
              <li>
                <a href="#comixoloxy">
                  ComiXology
                  <br />
                  <span>
                    Thousands of
                    <br /> Digital Comics
                  </span>
                </a>
              </li>
              <li>
                <a href="#imdpro">
                  IMDbPro
                  <br />
                  <span>
                    Get Info Entertainment
                    <br /> Professionals Need
                  </span>
                </a>
              </li>
              <li>
                <a href="#deals">
                  Warehouse Deals
                  <br />
                  <span>
                    Open-Box
                    <br /> Discounts
                  </span>
                </a>
              </li>
              <li>
                <a href="#subs">
                  Subscribe with Amazon
                  <br />
                  <span>
                    Discover &amp; try
                    <br /> subscription services
                  </span>
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#alexa">
                  Alexa
                  <br />
                  <span>
                    Actionable Analytics
                    <br /> for the Web
                  </span>
                </a>
              </li>
              <li>
                <a href="#res">
                  Amazon Restaurants
                  <br />
                  <span>
                    Food delivery from
                    <br /> local restaurants
                  </span>
                </a>
              </li>
              <li>
                <a href="#space">
                  CreateSpace
                  <br />
                  <span>
                    Indie Print Publishing
                    <br /> Made Easy
                  </span>
                </a>
              </li>
              <li>
                <a href="#junglee">
                  Junglee.com
                  <br />
                  <span>
                    Shop Online
                    <br /> in India
                  </span>
                </a>
              </li>
              <li>
                <a href="#whis">
                  Whispercast
                  <br />
                  <span>
                    Discover &amp; Distribute
                    <br /> Digital Content
                  </span>
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#amabusiness">
                  Amazon Business
                  <br />
                  <span>
                    Everything For
                    <br /> Your Business
                  </span>
                </a>
              </li>
              <li>
                <a href="#direct">
                  Amazon Video Direct
                  <br />
                  <span>
                    Video Distribution
                    <br /> Made Easy
                  </span>
                </a>
              </li>
              <li>
                <a href="#dpreview">
                  DPReview
                  <br />
                  <span>
                    Digital
                    <br /> Photography
                  </span>
                </a>
              </li>
              <li>
                <a href="#kindle">
                  Kindle Direct Publishing
                  <br />
                  <span>
                    Indie Digital Publishing
                    <br /> Made Easy
                  </span>
                </a>
              </li>
              <li>
                <a href="#withoutbox">
                  Withoutabox
                  <br />
                  <span>
                    Submit to
                    <br /> Film Festivals
                  </span>
                </a>
              </li>
            </ul>
            <div className="centered">
              <ul className="copy">
                <li>
                  <a href="#cpnd">Conditions of Use</a>
                </li>
                <li>
                  <a href="#privacy">Privacy Notice</a>
                </li>
                <li>
                  <a href="#interest">Interest-Based Ads</a>
                </li>
                <li>&copy; 2020, Sukesh</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
)
}

export default Footer
