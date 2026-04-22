import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/image_link_form/ImageLinkForm'
import Rank from './components/rank/Rank'
import FaceRecognition from './components/face_recognition/FaceRecognition'
import SignIn from './components/signin/SignIn'
import Register from './components/register/Register'
import ParticlesBg from 'particles-bg'
import { use, useState } from 'react'
import './App.css'

const App  = () => {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('')
  const [box, setBox] = useState({})
  const [route, setRoute] = useState('signin')
  const [isSignIn, setIsSignIn] = useState(false)

  const onInputChange = (event) => {
    setInput(event.target.value)
  
  }

  const calculateFaceLocation = (regions) => {
    const faceRegion = regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: faceRegion.left_col * width,
      topRow: faceRegion.top_row * height,
      rightCol: width - (faceRegion.right_col * width),
      bottomRow: height - (faceRegion.bottom_row * height)
    }
  }

  const displayFaceBox = (box) => {
    setBox(box)
  }


  const onButtonSubmit = (requestOptions) => {
    setImageUrl(input)
    const MODEL_ID = 'face-detection';
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions)
        .then(response => response.json())
        .then(result => {
            const regions = result.outputs[0].data.regions;
            displayFaceBox(calculateFaceLocation(regions))
        })
        .catch(error => console.log('error', error));
  }

  const setUpClarifai = () => {

    const PAT = import.meta.env.VITE_PAT;
    const USER_ID = import.meta.env.VITE_USER_ID;
    const APP_ID = import.meta.env.VITE_APP_ID;
    const MODEL_ID = 'face-no-depiction-detection';
    const IMAGE_URL = input;

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                        // "base64": IMAGE_BYTES_STRING
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };
    
    return requestOptions
  }
  const onSubmit = () => {
    onButtonSubmit(setUpClarifai())
  }

  const onRouteChange = (route) => {
    if (route === 'signout') {
      setIsSignIn(false)
    } else if (route === 'home') {
      setIsSignIn(true)
    }
    setRoute(route)
  }
  return (
    <>
      <Navigation isSignedIn={isSignIn} onRouteChange={onRouteChange} />
      {route === 'home' ? <div><Logo />
      <Rank />
      <ImageLinkForm value={input} onInputChange={onInputChange} onSubmit={onSubmit} />
      <FaceRecognition box={box} imageUrl={imageUrl}/></div>: ( route === 'signin' ? <SignIn onRouteChange={onRouteChange}/> : <Register onRouteChange={onRouteChange} />)
      }
      <ParticlesBg type="circle" bg={true} />
    </>
  )
}

export default App
