import React from "react"
import { Link } from "react-router-dom"
import service1 from './IMAGE/service1.jpg'
import service2 from './IMAGE/service2.jpg'
import service3 from './IMAGE/service3.jpg'
import service4 from './IMAGE/service4.jpg'
import sr1 from './IMAGE/sr1.png'
import sr2 from './IMAGE/sr2.png'
import sr3 from './IMAGE/sr3.png'
import sr4 from './IMAGE/sr4.png'

export default function Service() {
  return (
    <div className="serviceContainer">
    <h1 className="center"><u>Our Services</u></h1>
    <div className="firstService side">
        <div className="services">
            <Link>
            <img src={service1} alt="CROP PROTECTION" width="600" height="400"/>
            </Link>
            <h3 className="serv-para">CROP PROTECTION</h3>
            <p className="serv-para">Accusantium doloremque laudantium, totam rem aperiam, eaqipsa quae ab illo
                inventore veritatis et
                quasi.</p>
        </div>
        <div className="services">
            <Link>
            <img src={service2} alt="GROWING PLANTS IN GREENHOUSES" width="600" height="400"/>
            </Link>
            <h3 className="serv-para">GROWING PLANTS IN GREENHOUSES</h3>
            <p className="serv-para">Accusantium doloremque laudantium, totam rem aperiam, eaqipsa quae.</p>
        </div>
        <div className="services">
            <Link>
            <img src={service3} alt="SEED TREATMENT" width="600" height="400"/>
            </Link>
            <h3 className="serv-para">SEED TREATMENT</h3>
            <p className="serv-para">Accusantium doloremque laudantium, totam rem aperiam, eaqipsa quae ab illo
                inventore veritatis et
                quasi.</p>
        </div>
        <div className="services">
            <Link>
            <img src={service4} alt="COMPANY DISTRIBUTION" width="600" height="400"/>
            </Link>
            <h3 className="serv-para">COMPANY DISTRIBUTION</h3>
            <p className="serv-para">Accusantium doloremque laudantium, totam rem aperiam, eaqipsa quae ab illo
                inventore veritatis et
                quasi.</p>
        </div>
    </div>
    <div className="secondServices">
        <h3><u>GENERAL CONSULTING SERVICES TO OUR CLIENTS</u></h3>

        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
            Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit
            varius mi. Cum sociis natoque penat et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui.
            Fusce feugiat malesuada odio. Morbi nunc odio, gravida cursus nec, luctus a, lorem. Maecenas tristique
            orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam
            leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.</p>
    </div>
    <div className="thirdServices">
        <div className="flex">
            <div className="img">
                <Link>
                <img src={sr1} alt=""/>
                </Link>
            </div>
            <div className="cont">
                <p className="red">Doloremque laudantium totam rem</p>
                <p>Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
            </div>
        </div>
        <div className="flex">
            <div className="img">
                <Link>
                <img src={sr3} alt=""/>
                </Link>
            </div>
            <div className="cont">
                <p className="red">Doloremque laudantium totam rem</p>
                <p>Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
            </div>
        </div>
        <div className="flex">
            <div className="img" >
                <Link>
                <img src={sr2} alt=""/>
                </Link>
            </div>
            <div className="cont">
                <p className="red">Doloremque laudantium totam rem</p>
                <p>Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
            </div>
        </div>
        <div className="flex">
            <div className="img" >
                <Link>
                <img src={sr4} alt=""/>
                </Link>
            </div>
            <div className="cont">
                <p className="red">Doloremque laudantium totam rem</p>
                <p>Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
            </div>
        </div>
    </div>
</div>
  )
}

