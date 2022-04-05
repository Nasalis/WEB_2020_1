import './App.css';

import { World } from './components/World'
import { Arena } from './components/Arena'
import { Hero } from './components/Hero'
import { Enemy } from './components/Enemy'


import SilverSurferImg from "./assets/images/silver-surfer.jpg"
import DonatelloImg from "./assets/images/donatello.jpg"
import WonderWomanImg from "./assets/images/wonder-woman.jpg"
import Galactus from "./assets/images/galactus.jpg"
import AbominationImg from "./assets/images/enemy2.jpg"
import GigantaImg from "./assets/images/giganta.jpg"
import VersusImg from "./assets/images/versus.png"


function App() {

  const statuses = [
    [
      {
        skill: "INT",
        value: 56, 
      },
      {
        skill: "STR",
        value: 100, 
      },
      {
        skill: "SPD",
        value: 100, 
      },
      {
        skill: "DUR",
        value: 90,
      },
      {
        skill: "POW",
        value: 100, 
      },
      {
        skill:"CMB",
        value: 32 
      },
    ],

    [
      {
        skill: "INT",
        value: 100, 
      },
      {
        skill: "STR",
        value: 100, 
      },
      {
        skill: "SPD",
        value: 83, 
      },
      {
        skill: "DUR",
        value: 100,
      },
      {
        skill: "POW",
        value: 100, 
      },
      {
        skill:"CMB",
        value: 50, 
      },
    ],

    [
      {
        skill: "INT",
        value: 88, 
      },
      {
        skill: "STR",
        value: 14, 
      },
      {
        skill: "SPD",
        value: 46, 
      },
      {
        skill: "DUR",
        value: 60,
      },
      {
        skill: "POW",
        value: 58, 
      },
      {
        skill:"CMB",
        value: 75, 
      },
    ],

    [
      {
        skill: "INT",
        value: 63, 
      },
      {
        skill: "STR",
        value: 80, 
      },
      {
        skill: "SPD",
        value: 53, 
      },
      {
        skill: "DUR",
        value: 90,
      },
      {
        skill: "POW",
        value: 62, 
      },
      {
        skill:"CMB",
        value: 95, 
      },
    ],

    [
      {
        skill: "INT",
        value: 88, 
      },
      {
        skill: "STR",
        value: 100, 
      },
      {
        skill: "SPD",
        value: 79, 
      },
      {
        skill: "DUR",
        value: 100,
      },
      {
        skill: "POW",
        value: 100, 
      },
      {
        skill:"CMB",
        value: 100, 
      },
    ],

    [
      {
        skill: "INT",
        value: 81, 
      },
      {
        skill: "STR",
        value: 89, 
      },
      {
        skill: "SPD",
        value: 23, 
      },
      {
        skill: "DUR",
        value: 85,
      },
      {
        skill: "POW",
        value: 32, 
      },
      {
        skill:"CMB",
        value: 42, 
      },
    ]
  ]

  return (
    <div className="App">
      <World>
          <h1 style={{color: "#fff"}}>Passe o mouse por cima dos cards</h1>
          <Arena arena="Andromeda">
              <Hero name="Silver Surfer" image={SilverSurferImg} statuses={statuses[0]}/>
              <img  className="app-versus" src={VersusImg} alt="versus"/>
              <Enemy name="Galactus" image={Galactus} statuses={statuses[1]} />
          </Arena>
          <Arena arena="New York">
              <Hero name="Donatello" image={DonatelloImg} statuses={statuses[2]} />
              <img  className="app-versus" src={VersusImg} alt="versus"/>
              <Enemy name="Abomination" image={AbominationImg} statuses={statuses[3]} />
          </Arena>
          <Arena arena="Washington">
              <Hero name="Wonder Woman" image={WonderWomanImg} statuses={statuses[4]} />
              <img  className="app-versus" src={VersusImg} alt="versus"/>
              <Enemy name="Giganta" image={GigantaImg} statuses={statuses[5]} />
          </Arena>
      </World>
    </div>
  );
} 

export default App;
