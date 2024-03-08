import clearImg from './src/assets/clear.png';
import cloudImg from './src/assets/cloud.png';
import mistImg from './src/assets/mist.png';
import rainImg from './src/assets/rain.png';
import snowImg from './src/assets/snow.png';

//This file is used to get the images for the current weather info based on the json.main[0] object in the API

export const CURRENT_WEATHER = [
    {
        weatherDesc :'Clear',
        image: clearImg
    },
    {
        weatherDesc :'Clouds',
        image:cloudImg
    },
    {
        weatherDesc :'Haze',
        image:mistImg
    },
    {
        weatherDesc :'Rain',
        image:rainImg
    },
    {
        weatherDesc :'Snow',
        image:snowImg
    },
    {
        
    }
]