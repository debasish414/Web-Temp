import React  from 'react'
import Logo1 from './IMAGE/v1.png'
import Logo2 from './IMAGE/v2.png'
import Logo3 from './IMAGE/v3.png'
import Logo4 from './IMAGE/v4.png'
import bgColor from './IMAGE/bg2.jpg'

export default function Home() {


    return (
        <div className="content">
            <div className="homeSection" style={{backgroundImage : `url(${bgColor})`}}>
                <h1 style={{margin: "10px"}}><u>Home</u></h1>
                <section>
                    <h2 className="text-3xl font-bold underline">We implement new technologies <br />for agriculture growth</h2>
                    <p style={{padding: '10px'}}>In India farmers face many problems in procuring good quality fertilizers and hence it leads to less
                        production of crops. To deal with this problem AgriBegri has come up with a wide range of best
                        quality
                        fertilizers which would definitely help the farmers in growing good amount of crops and hence
                        earning
                        huge profits as we too keep in mind in providing fertilizers at very cheap rates</p>
                </section>
            </div>
            <div className="variety">
                <div className="ver">
                    <img src={Logo1} alt="" />
                    <h3>LAUDANTIUM</h3>
                    <p>Accusantium doloremque laudantium, totam rem aperiam, eaqipsa quae ab illo inventore veritatis et
                        quasi.
                    </p>
                </div>
                <div className="ver">
                    <img src={Logo2} alt="" />
                    <h3>TOTAM REM APERIAM</h3>
                    <p>Accusantium doloremque laudantium, totam rem aperiam, eaqipsa quae ab illo inventore veritatis et
                        quasi.
                    </p>
                </div>
                <div className="ver">
                    <img src={Logo3} alt="" />
                    <h3>EAQIPSA QUAE ABILLO</h3>
                    <p>Accusantium doloremque laudantium, totam rem aperiam, eaqipsa quae ab illo inventore veritatis et
                        quasi.
                    </p>
                </div>
                <div className="ver">
                    <img src={Logo4} alt="" />
                    <h3>INVENTORE VERITATIS</h3>
                    <p>Accusantium doloremque laudantium, totam rem aperiam, eaqipsa quae ab illo inventore veritatis et
                        quasi.
                    </p>
                </div>
            </div>
        </div>
    )
}

