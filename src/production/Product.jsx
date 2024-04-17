import React from 'react'
import { Link } from 'react-router-dom'
import pr1 from './IMAGE/pr1.jpg'
import pr3 from './IMAGE/pr3.png'
import pr4 from './IMAGE/pr4.jpg'
import pr5 from './IMAGE/pr5.jpg'
import pr6 from './IMAGE/pr6.jpg'
import pr7 from './IMAGE/pr7.jpg'
import pr8 from './IMAGE/pr8.jpg'
import pr9 from './IMAGE/pr9.jpg'
import pr10 from './IMAGE/pr10.jpg'
import pr11 from './IMAGE/pr11.jpg'


export default function Product() {
  return (
<div>
<h1 className="center" style={{backgroundColor: '#dfd9d9'}} ><u>Our Products</u></h1>
    <div className="productContainer">
        {/* <!-- <img src="/IMAGE/bg-4.jpg" alt="Bg"> --> */}
        <div className=" box">
            <div className="cartImg box1">
                <Link>
                <img src={pr1} alt="TIGER N 20"/>
                </Link>
            </div>
            <div className="cartDetails">
                <p>TIGER N 20 - Liquid Sulphur Is An Effective Fungicide and Plant Nutrient.
                    5.00 liter1 Ltr x 5 Qty</p>
            </div>
            <div className="cartPrice">
                <h2>₹ <span className="price">884</span>.00</h2>
            </div>
            <button className="cartBtn">Add to Cart</button>
        </div>
        <div className=" box">
            <div className="cartImg box3">
                <Link>
                <img src={pr3} alt="Novatec Solub"/>
                </Link>
            </div>
            <div className="cartDetails">
                <p>Compo Expert Novatec Solub NPK 14:08:30 Water Soluble Fertilizer, Higher Productivity And
                    5.00 kg1 Kg x 5 Qty</p>
            </div>
            <div className="cartPrice">
                <h2>₹ <span className="price">279</span>.00</h2>
            </div>
            <button className="cartBtn">Add to Cart</button>
        </div>
        <div className=" box">
            <div className="cartImg box4">
                <Link>
                <img src={pr4} alt="Hilfiger"/>
                </Link>
            </div>
            <div className="cartDetails">
                <p>Hilfiger Proino Micronutrient (Protein Amino Acid 80%), Helps In Immunity & Growth In All Crops
                    900.00 gm900 Gm x 1 Qty</p>
            </div>
            <div className="cartPrice">
                <h2>₹ <span className="price">206</span>.00</h2>
            </div>
            <button className="cartBtn">Add to Cart</button>
        </div>
        <div className=" box">
            <div className="cartImg box5">
                <Link>
                <img src={pr5} alt="Hilfiger"/>
                </Link>
            </div>
            <div className="cartDetails">
                <p>Hilfiger Chem Proino Plus Protein Hydrolysates, Amino Acids And Aascophyllum , Spray And Drip
                    Use. spa
                    900.00 gm900 Gm x 1 Qty</p>
            </div>
            <div className="cartPrice">
                <h2>₹ <span className="price">155</span>.00</h2>
            </div>
            <button className="cartBtn">Add to Cart</button>
        </div>
        <div className=" box">
            <div className="cartImg box6">
                <Link>
                <img src={pr6} alt="Cabbage"/>
                </Link>
            </div>
            <div className="cartDetails">
                <p>Tokai F1 Hybrid Cabbage Red Ball Seeds, Roundhead and deep red in color.
                    50.00 gm10 Gm x 5 Qty</p>
            </div>
            <div className="cartPrice">
                <h2>₹ <span className="price">2835</span>.00</h2>
            </div>
            <button className="cartBtn">Add to Cart</button>
        </div>
        <div className=" box">
            <div className="cartImg box7">
                <Link>
                <img src={pr7} alt="Pumpkin"/>
                </Link>
            </div>
            <div className="cartDetails">
                <p>Iris Hybrid Vegetable Seeds Pumpkin, Kaddu Ke Beej, Koda Na Bee, Bhopla Ke Beej (15 Seeds)
                    15.00 no1 Packet</p>
            </div>
            <div className="cartPrice">
                <h2>₹ <span className="price">88</span>.00</h2>
            </div>
            <button className="cartBtn">Add to Cart</button>
        </div>
        <div className=" box">
            <div className="cartImg box8">
                <Link>
                <img src={pr8} alt="Brinjal"/>
                </Link>
            </div>
            <div className="cartDetails">
                <p>VNR Mukta Moti F1 Hybrid Brinjal Seeds, Bengan Ke Beej, Oval Fruits with Purple Calyx
                    20.00 gm10 Gm x 2 Qty</p>
            </div>
            <div className="cartPrice">
                <h2>₹ <span className="price">84</span>.00</h2>
            </div>
            <button className="cartBtn">Add to Cart</button>
        </div>
        <div className=" box">
            <div className="cartImg box9">
                <Link>
                <img src={pr9} alt="Carrot"/>
                </Link>
            </div>
            <div className="cartDetails">
                <p>Iris Hybrid Carrot Vegetable Seeds, Excellent Germination, Used For Indoor And Outdoor Gardening
                    80.00 no80 Seeds x 1 Qty</p>
            </div>
            <div className="cartPrice">
                <h2>₹ <span className="price">179</span>.00</h2>
            </div>
            <button className="cartBtn">Add to Cart</button>
        </div>
        <div className=" box">
            <div className="cartImg box10">
                <Link>
                <img src={pr10} alt="Beet Root"/>
                </Link>
            </div>
            <div className="cartDetails">
                <p>Urja Beet Root Ruby Queen Seeds Imported, Rounded Red Roots, Chukandar Ke Beej, Sweet In Taste.
                    100.00 gm50 Gm x 2 Qty</p>
            </div>
            <div className="cartPrice">
                <h2>₹ <span className="price">269</span>.00</h2>
            </div>
            <button className="cartBtn">Add to Cart</button>
        </div>
        <div className=" box">
            <div className="cartImg box10">
                <Link>
                <img src={pr11} alt="Beet Root"/>
                </Link>
            </div>
            <div className="cartDetails">
                <p><b>pesticide sprayer</b> Rounded Red Roots Urja Beet Root Ruby Queen Seeds Imported, Rounded Red Roots, Chukandar Ke Beej, Sweet In Taste.
                    15 Ltr Gm x 1 Qty</p>
            </div>
            <div className="cartPrice">
                <h2>₹ <span className="price">2500</span>.00</h2>
            </div>
            <button className="cartBtn">Add to Cart</button>
        </div>
    </div>
</div>
  )
}
