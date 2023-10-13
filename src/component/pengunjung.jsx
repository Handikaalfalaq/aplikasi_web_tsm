import {React, useState, useEffect} from 'react'
import '../assets/css/pengunjung.css'
import {Card, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import {getDataVisitorsFromData} from '../redux/action/getData'
import ModalTambahVisitors from '../modals/tambahVisitors'

function Pengunjung({dataRedux, getDataVisitors}){
    const [visitors, setVisitors] = useState()
    const [loading, setLoading] = useState(true)
    const [tambahVisitors, setTambahVisitors] = useState(false)
 
    useEffect(() => {
        getDataVisitors();
    }, [getDataVisitors]); 

    useEffect(() => { 
        if (visitors !== dataRedux.visitors) {
            setVisitors(dataRedux.visitors);
            setLoading(false); 
        }
    }, [dataRedux, visitors]); 

    return(
        <div className='containerPengunjung'>
            <div className='navbarPengunjung'>
                <div className='pengunjungTitle'>Visitor's</div>
                <Button className='pengunjungPlus' onClick={() => setTambahVisitors(true)}>+ Visitors</Button>
            </div>
            {loading ? (
                <div >Loading...</div>
                ):( 
                    <Card className='containerCardPengunjung'>
                        {visitors.map((data) => (
                            <Card.Body key={data.id} className='cardBodyPengunjung'>
                                <pre>
                                    <Card.Text className='cardTextPengunjung'>No. KTP       :{data.no_ktp}</Card.Text> 
                                    <Card.Text className='cardTextPengunjung'>Nama          :{data.nama}.</Card.Text> 
                                    <Card.Text className='cardTextPengunjung'>Tanggal Lahir :{data.tgl_lahir}</Card.Text> 
                                    <Card.Text className='cardTextPengunjung'>No. Handphone :{data.phone_number}</Card.Text> 
                                    <Card.Text className='cardTextPengunjung'>Nama Gedung   :{data.nama_gedung}.</Card.Text> 
                                    <Card.Text className='cardTextPengunjung'>Suhu          :{data.suhu}°C.</Card.Text> 
                                    <Card.Text className='cardTextPengunjung'>Jam Masuk     :{data.jam_masuk} WIB.</Card.Text> 
                                    <Card.Text className='cardTextPengunjung'>Jam Keluar    :{data.jam_keluar} WIB.</Card.Text>  
                                </pre>
                            </Card.Body>
                        ))}
                    </Card>
                )}
            <ModalTambahVisitors show={tambahVisitors} onHide={() => setTambahVisitors(false)} />
        </div>
    )
}

const reduxState = (state) => ({
    dataRedux: { 
      visitors: state.visitors,
    },
  });
  
  const reduxDispatch = (dispatch) => ({ 
    getDataVisitors: () => dispatch(getDataVisitorsFromData()),
  });

export default connect(reduxState, reduxDispatch) (Pengunjung)