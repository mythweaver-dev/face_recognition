import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/image_link_form/ImageLinkForm'
import Rank from './components/rank/Rank'
import ParticlesBg from 'particles-bg'
import './App.css'

const App = () => {
  return (
    <>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
      <ParticlesBg type="circle" bg={true} />
    </>
  )
}

export default App
