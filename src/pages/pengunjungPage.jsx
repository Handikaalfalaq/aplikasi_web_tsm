import Navbar from '../component/navbar'
import Pengunjung from '../component/pengunjung'
import '../assets/css/pages.css'
import FolderImage from '../assets/image/folderImage';

function PengunjungPage(){
    return (
        <div className='pages' style={{backgroundImage: `url(${FolderImage.imageBackground1})`}}>
            <Navbar/>
            <Pengunjung/>
        </div>
    )
}

export default PengunjungPage