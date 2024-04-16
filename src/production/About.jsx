import React from 'react'

export default function About() {
    return (
        <div className="aboutContainer"><br />
            <div className="aboutSection">

                <div className="about">
                    <h2>About Us</h2>
                    <p>From wide varieties of seeds, to a complete range of pesticides and fertilizers, we go a long way in
                        improving the quality of farmer's lives. We, Grain Agrotech located in Malad West, Mumbai,
                        Maharashtra,
                        offer agronomy services to the farmers with the objective to increase farmer profitability. We also
                        manufacture and market crop protection products including insecticides, fungicides, herbicides and
                        plant
                        growth regulators.</p>
                </div>
                <div className="aboutSecImg">
                    <img src="/IMAGE/bg3.jpg" alt="" />
                </div>
            </div>
            <h2 className="center">Contact us</h2>
            <div className="aboutSection height">
                <div className="contactUs">
                    <h3 className="ourinfo">Our information</h3>
                    <div className="contactRow">
                        <div className="deta">
                            <h4 className="center">Shop Addres</h4>
                            <p>near Shiv temple road,<br /> jaidebvihar,bhubaneswar, Odisha 729005</p>
                        </div>
                        <div className="deta">
                            <h4 className="center">General Inquiries</h4>
                            <p>chandanfertilizer@gmail.com</p>
                        </div>
                        <div className="deta">
                            <h4 className="center">Call us</h4>
                            <p>+91-0188-0853-25</p>
                        </div>
                        <div className="deta">
                            <h4 className="center">Our Timeing</h4>
                            <p>Mon-Sun: 10AM - 8PM</p>
                        </div>
                    </div>
                </div>
                <div className="enquiry">
                    <h4 className="center">Enquiry Form</h4>
                    <input type="text" className="inp1 mar-1" name="name" placeholder="Name*" /><br />
                    <input type="number" className="inp1 mar-1" name="contact" placeholder="Contact No*" /><br />
                    <input type="email" className="inp2 mar-1" name="Email" placeholder="Email Id*" /><br />
                    <textarea name="subject" style="height: 100px; padding-top: 10px;" className="inp3 mar-1"
                        placeholder="Your Message*"></textarea><br />

                    <div className="rating">
                        <p>Share your rating with us :</p>
                        <i className="fa-solid fa-star star"></i>
                        <i className="fa-solid fa-star star"></i>
                        <i className="fa-solid fa-star star"></i>
                        <i className="fa-solid fa-star star"></i>
                        <i className="fa-solid fa-star star"></i>
                    </div>

                    <button className="btn">Submit</button>
                </div>
            </div><br />
        </div>
    )
}