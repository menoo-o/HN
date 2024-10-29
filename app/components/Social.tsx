
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faSpotify,
  faSoundcloud,
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

export default function Social() {
  return (
    <>
        <div className='icons-left'>
            <FontAwesomeIcon icon={faYoutube} className='social-icons' id='yt' /> 
            <FontAwesomeIcon icon={faSpotify} className='social-icons' /> 
            <FontAwesomeIcon icon={faSoundcloud} className='social-icons' /> 
        </div>

        <div className='icons-right'>
            <FontAwesomeIcon icon={faFacebook} className='social-icons' /> 
            <FontAwesomeIcon icon={faInstagram} className='social-icons' /> 
            <FontAwesomeIcon icon={faTwitter} className='social-icons' /> 
        </div> 
    </>
  )
}
