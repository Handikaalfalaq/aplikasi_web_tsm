import {React} from 'react'
import '../assets/css/seacrhGedung.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons';

function SeacrhGedung(){
    return(
        <div className='containerSeacrhGedung'>
            <FontAwesomeIcon icon={faMagnifyingGlass} size='2x'/>
            <FontAwesomeIcon icon={faBell} size='2x'/>
            <div className='notifSeacrhGedung'>1</div>
        </div>
    )
}

export default SeacrhGedung