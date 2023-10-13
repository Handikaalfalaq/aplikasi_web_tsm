import Navbar from '../component/navbar'
import Gedung from '../component/gedung'
import SeacrhGedung from '../component/seacrhGedung'
import '../assets/css/pages.css'
import FolderImage from '../assets/image/folderImage';

function GedungPage(){
    return (
        <div className='pages' style={{backgroundImage: `url(${FolderImage.imageBackground1})`}}>
            <SeacrhGedung/>
            <Navbar/>
            <Gedung/>
        </div>
    )
}

export default GedungPage