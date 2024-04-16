import React from 'react'

export default function Service() {
  return (
    <div className="serviceContainer">
    <h1 className="center"><u>Our Services</u></h1>
    <div className="firstService side">
        <div className="services">
            <img src="/IMAGE/service1.jpg" alt="CROP PROTECTION" width="600" height="400"/>
            <h3 className="serv-para">CROP PROTECTION</h3>
            <p className="serv-para">Accusantium doloremque laudantium, totam rem aperiam, eaqipsa quae ab illo
                inventore veritatis et
                quasi.</p>
        </div>
        <div className="services">
            <img src="/IMAGE/service2.jpg" alt="GROWING PLANTS IN GREENHOUSES" width="600" height="400"/>
            <h3 className="serv-para">GROWING PLANTS IN GREENHOUSES</h3>
            <p className="serv-para">Accusantium doloremque laudantium, totam rem aperiam, eaqipsa quae.</p>
        </div>
        <div className="services">
            <img src="/IMAGE/service3.jpg" alt="SEED TREATMENT" width="600" height="400"/>
            <h3 className="serv-para">SEED TREATMENT</h3>
            <p className="serv-para">Accusantium doloremque laudantium, totam rem aperiam, eaqipsa quae ab illo
                inventore veritatis et
                quasi.</p>
        </div>
        <div className="services">
            <img src="/IMAGE/service4.jpg" alt="COMPANY DISTRIBUTION" width="600" height="400"/>
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
                <img src="/IMAGE/sr1.png" alt=""/>
            </div>
            <div className="cont">
                <p className="red">Doloremque laudantium totam rem</p>
                <p>Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
            </div>
        </div>
        <div className="flex">
            <div className="img">
                <img src="/IMAGE/sr3.png" alt=""/>
            </div>
            <div className="cont">
                <p className="red">Doloremque laudantium totam rem</p>
                <p>Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
            </div>
        </div>
        <div className="flex">
            <div className="img" style="margin-right: 14px;">
                <img src="/IMAGE/sr2.png" alt=""/>
            </div>
            <div className="cont">
                <p className="red">Doloremque laudantium totam rem</p>
                <p>Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
            </div>
        </div>
        <div className="flex">
            <div className="img" style="margin-right: 14px;">
                <img src="/IMAGE/sr4.png" alt=""/>
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

