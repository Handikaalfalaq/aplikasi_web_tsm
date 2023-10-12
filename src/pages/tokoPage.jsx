import Navbar from '../component/navbar'
import Toko from '../component/toko'
import '../assets/css/pages.css'
import FolderImage from '../assets/image/folderImage';

function TokoPage(){
    return (
        <div className='pages' style={{backgroundImage: `url(${FolderImage.imageBackground1})`}}>
            <Navbar/>
            <Toko/>
        </div>
    )
}

export default TokoPage