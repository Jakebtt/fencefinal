import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './styles.css';

import { Model as Modela } from './Modela';
import { Model as Modelb } from './Modelb';
import { Model as Modelc } from './Modelc';
import { Model as Modeld } from './Modeld';
import { Model as Modele } from './Modele';
import { Model as Modelf } from './Modelf';
import { Model as Modelg } from './Modelg';
import { Model as Modelh } from './Modelh';
import { Model as Modeli } from './Modeli';
import { Model as Modelj } from './Modelj';
import { Model as Modelk } from './Modelk';
import { Model as Modell } from './Modell';
import { Model as Modeltest } from './Modeltest';
import{ Model as Modelz} from './Modelz';

//2.5inch Slat Models 
import{ Model as Model2500} from "./Model2500";
import{ Model as Model2500v3} from "./Model2500v3";
import{ Model as Model25025} from "./Model25025";
import{ Model as Model2505} from "./Model2505";
import{ Model as Model2501} from "./Model2501";

//4inch Slat Models 
import{ Model as Model400} from "./Model400";
import{ Model as Model400v2} from "./Model400v2";
import{ Model as Model4025} from "./Model4025";
import{ Model as Model405} from "./Model405";
import{ Model as Model401} from "./Model401";


//6inch Slat Models 
import{ Model as Model600} from './Model600';
import{ Model as Model6025} from './Model6025';
import{ Model as Model605} from './Model605';
import{ Model as Model61} from './Model61';

import TextureButton from './TextureButton';
import DropdownMenu from './DropdownMenu';
import './styles.css';


const slatSizes = ['2.5inch slat', '4inch slat', '6inch slat'];
const spacerSizes = ['No Space', '0.25inch spacing', '0.5inch spacing', '1inch spacing'];

const modelMapping = {
  '1.5inch slat': {
    '0.25inch spacing': Modela,
    '0.5inch spacing': Modelb,
    '1inch spacing': Modelc,
  },
  '2.5inch slat': {
    "No Space": Model2500v3,
    '0.25inch spacing': Model25025,
    '0.5inch spacing': Model2505,
    '1inch spacing': Model2501,
  },
  '4inch slat': {
    "No Space": Model400v2,
    '0.25inch spacing': Model4025,
    '0.5inch spacing': Model405,
    '1inch spacing': Model401,
  },
  '6inch slat': {
    "No Space": Model600,
    '0.25inch spacing': Model6025,
    '0.5inch spacing': Model605,
    '1inch spacing': Model61,
  },
};

const categories = [
  'Standard Woodgrains',
  'Non-standard Woodgrains',
  'Colors of Aus',
  'Solid Colors',
];

const textures = [
  // Standard Woodgrains
  { url: '/3dfencept/Atlantic_Cedar.jpg', name: 'Atlantic Cedar', category: 'Standard Woodgrains' },
  { url: '/3dfencept/Blackbutt.jpg', name: 'Blackbutt', category: 'Standard Woodgrains' },
  { url: '/3dfencept/Bush_Cherry.jpg', name: 'Bush Cherry', category: 'Standard Woodgrains' },
  { url: '/3dfencept/Chestnut.jpg', name: 'Chestnut', category: 'Standard Woodgrains' },
  { url: '/3dfencept/Driftwood.jpg', name: 'Driftwood', category: 'Standard Woodgrains' },
  { url: '/3dfencept/Eastern_Mahogany.jpg', name: 'Eastern Mahogany', category: 'Standard Woodgrains' },
  { url: '/3dfencept/Grey_Ash.jpg', name: 'Grey Ash', category: 'Standard Woodgrains' },
  { url: '/3dfencept/Hickory.jpg', name: 'Hickory', category: 'Standard Woodgrains' },
  { url: '/3dfencept/Iroko.jpg', name: 'Iroko', category: 'Standard Woodgrains' },
  { url: '/3dfencept/Knotty_Pine.jpg', name: 'Knotty Pine', category: 'Standard Woodgrains' },
  { url: '/3dfencept/Kwila.jpg', name: 'Kwila', category: 'Standard Woodgrains' },
  { url: '/3dfencept/Light_Oak.jpg', name: 'Light Oak', category: 'Standard Woodgrains' },
  { url: '/3dfencept/Royal_Oak.jpg', name: 'Royal Oak', category: 'Standard Woodgrains' },
  { url: '/3dfencept/Savannah_Oak.jpg', name: 'Savannah Oak', category: 'Standard Woodgrains' },
  { url: '/3dfencept/Spotted_Gum.jpg', name: 'Spotted Gum', category: 'Standard Woodgrains' },
  { url: '/3dfencept/Tassie_Oak.jpg', name: 'Tassie Oak', category: 'Standard Woodgrains' },
  { url: '/3dfencept/Teak_Brown.jpg', name: 'Teak Brown', category: 'Standard Woodgrains' },
  { url: '/3dfencept/White_Ash.jpg', name: 'White Ash', category: 'Standard Woodgrains' },

  // Non-standard Woodgrains
  { url: '/3dfencept/Australian_Cedar.jpg', name: 'Australian Cedar', category: 'Non-standard Woodgrains' },
  { url: '/3dfencept/Black_Ash.jpg', name: 'Black Ash', category: 'Non-standard Woodgrains' },
  { url: '/3dfencept/Black_Walnut.jpg', name: 'Black Walnut', category: 'Non-standard Woodgrains' },
  { url: '/3dfencept/Charcoal_Ash.jpg', name: 'Charcoal Ash', category: 'Non-standard Woodgrains' },
  { url: '/3dfencept/English_Chestnut.jpg', name: 'English Chestnut', category: 'Non-standard Woodgrains' },
  { url: '/3dfencept/Iron_Bark.jpg', name: 'Iron Bark', category: 'Non-standard Woodgrains' },
  { url: '/3dfencept/Koa.jpg', name: 'Koa', category: 'Non-standard Woodgrains' },
  { url: '/3dfencept/Red_Gum.jpg', name: 'Red Gum', category: 'Non-standard Woodgrains' },
  { url: '/3dfencept/Tiger_Wood.jpg', name: 'Tiger Wood', category: 'Non-standard Woodgrains' },
  { url: '/3dfencept/Wenge.jpg', name: 'Wenge', category: 'Non-standard Woodgrains' },

  // Solid Colors
  { url: '/3dfencept/Admiral_Blue.jpg', name: 'Admiral Blue', category: 'Solid Colors' },
  { url: '/3dfencept/Carbon.jpg', name: 'Carbon', category: 'Solid Colors' },
  { url: '/3dfencept/Mistr.jpg', name: 'Mist', category: 'Solid Colors' },
  { url: '/3dfencept/Midnight_Black.jpg', name: 'Midnight Black', category: 'Solid Colors' },
  { url: '/3dfencept/Sandstone.jpg', name: 'Sandstone', category: 'Solid Colors' },
  { url: '/3dfencept/Slate_Grey.jpg', name: 'Slate Grey', category: 'Solid Colors' },
  { url: '/3dfencept/Smoke.jpg', name: 'Smoke', category: 'Solid Colors' },
  { url: '/3dfencept/White.jpg', name: 'White', category: 'Solid Colors' },
  { url: '/3dfencept/Vapor_Grey.jpg', name: 'Vapor Grey', category: 'Solid Colors' },
  { url: '/3dfencept/Sterling.jpg', name: 'Sterling', category: 'Solid Colors' },

  // Colors of Aus colors of 
  { url: '/3dfencept/Aspen.jpg', name: 'Aspen', category: 'Colors of Aus' },
  { url: '/3dfencept/Black_Cedar.jpg', name: 'Black Cedar', category: 'Colors of Aus' },
  { url: '/3dfencept/French_Walnut.jpg', name: 'French Walnut', category: 'Colors of Aus' },
  { url: '/3dfencept/Hamptons_Cedar.jpg', name: 'Hamptons Cedar', category: 'Colors of Aus' },
  { url: '/3dfencept/Hinoki.jpg', name: 'Hinoki', category: 'Colors of Aus' },
  { url: '/3dfencept/Nordic_Oak.jpg', name: 'Nordic Oak', category: 'Colors of Aus' },
  { url: '/3dfencept/Norwegian_Beech.jpg', name: 'Norwegian Beech', category: 'Colors of Aus' },
  { url: '/3dfencept/Pacific_Teak.jpg', name: 'Pacific Teak', category: 'Colors of Aus' },
  { url: '/3dfencept/Queensland_Walnut.jpg', name: 'Queensland Walnut', category: 'Colors of Aus' },
  { url: '/3dfencept/Red_Wood.jpg', name: 'Red Wood', category: 'Colors of Aus' },
  { url: '/3dfencept/Shou_Sugi_Ban.jpg', name: 'Shou Sugi Ban', category: 'Colors of Aus' },
  { url: '/3dfencept/Silver_Wattle.jpg', name: 'Silver Wattle', category: 'Colors of Aus' },
  { url: '/3dfencept/Spruce.jpg', name: 'Spruce', category: 'Colors of Aus' },
  { url: '/3dfencept/Sycamore.jpg', name: 'Sycamore', category: 'Colors of Aus' },
  { url: '/3dfencept/White_Ash.jpg', name: 'White Ash', category: 'Colors of Aus' },
];


const App = () => {
  const [textureUrl, setTextureUrl] = useState('/3dfencept/Light_Oak.jpg'); // Default texture URL
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSlatSize, setSelectedSlatSize] = useState('4inch slat');
  const [selectedSpacerSize, setSelectedSpacerSize] = useState('1inch spacing');
  const [selectedTexture, setSelectedTexture] = useState("Light Oak"); // For highlighting the selected texture
  

  const handleCategoryChange = (event) => setSelectedCategory(event.target.value);
  const handleSlatSizeChange = (event) => setSelectedSlatSize(event.target.value);
  const handleSpacerSizeChange = (event) => setSelectedSpacerSize(event.target.value);

  const ModelComponent = modelMapping[selectedSlatSize]?.[selectedSpacerSize] || null;

  const handleTextureClick = (texture) => {
    setTextureUrl(texture.url);
    setSelectedTexture(texture.name);
  };

  const filteredTextures = textures.filter((texture) => texture.category === selectedCategory);

  return (
    <div className="container">
      {/* Logo */}
      <img src="Alumarch.jpg" alt="Logo" className="logo" />

      {/* Dropdowns */}
      <select className="dropdown category-dropdown" onChange={handleCategoryChange} value={selectedCategory}>
  {categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ))}
</select>

<select className="dropdown slat-size-dropdown" onChange={handleSlatSizeChange} value={selectedSlatSize}>
  {slatSizes.map((size) => (
    <option key={size} value={size}>
      {size}
    </option>
  ))}
</select>

<select className="dropdown spacer-size-dropdown" onChange={handleSpacerSizeChange} value={selectedSpacerSize}>
  {spacerSizes.map((size) => (
    <option key={size} value={size}>
      {size}
    </option>
  ))}
</select>


      {/* Buttons for Textures */}
      <div className="button-container">
        {filteredTextures.map((texture) => (
          <TextureButton
            key={texture.name}
            textureUrl={texture.url}
            colorName={texture.name}
            isSelected={selectedTexture === texture.name}
            onClick={() => handleTextureClick(texture)}
          />
        ))}
      </div>

      {/* Canvas */}
      <div className="canvas-container">
        <Canvas camera={{ fov: 55, position: [8, 0, 0] }}>
          <OrbitControls />
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 10]} />
          {ModelComponent && <ModelComponent textureUrl={textureUrl} rotation={[0, Math.PI / 2, 0]} />}
        </Canvas>
      </div>
    </div>
  );
};

export default App;






