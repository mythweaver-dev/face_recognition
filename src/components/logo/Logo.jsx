import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from '../../assets/brain.png'
const Logo = () => {
    return(
        <div className="m-8 mt-0">
            <Tilt>
                <div className='rounded shadow-md p-4 dimension'>
                    <img className='logo' src={brain} alt='logo' />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo