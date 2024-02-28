import clearImg from './assests/clear.png';
import cloudImg from './assests/cloud.png';
import mistImg from './assests/mist.png';
import rainImg from './assests/rain.png';
import snowImg from './assests/snow.png';

//This file is used to get the images for the current weather info based on the json.main[0] object in the API

export const CURRENT_WEATHER = [
    {
        case :'Clear',
        image: clearImg
    },
    {
        case :'Clouds',
        image:cloudImg
    },
    {
        case :'Haze',
        image:mistImg
    },
    {
        case :'Rain',
        image:rainImg
    },
    {
        case :'Snow',
        image:snowImg
    }
]