import Navbar from '../component/navbar'
import Home from '../component/home'
import '../assets/css/pages.css'
import FolderImage from '../assets/image/folderImage';

function HomePage(){
    return (
        <div className='pages' style={{backgroundImage: `url(${FolderImage.imageBackground1})`}}>
            <Navbar/>
            <Home/>
        </div>
    )
}

export default HomePage