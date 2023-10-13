import {React , useState, useEffect} from 'react'
import '../assets/css/gedung.css'
import { Form, Button, Card, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPen, faPeopleLine, faClock, faPhone, faHourglass } from '@fortawesome/free-solid-svg-icons';
import {getDataBuildingDataFromData} from '../redux/action/getData'
import { connect } from 'react-redux';
import ModalTambahBuildingData from '../modals/tambahBuildingData'

function Gedung({dataRedux, getDataBuildingData}){
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [hasilPencarian, setHasilPencarian] = useState([]);
    const [titleKapasitas, setTitleKapasitas] = useState('Kapasitas Gedung');
    const [tambahBuildingData, setTambahBuildingData] = useState(false)

    useEffect(() => {
        getDataBuildingData();
    }, [getDataBuildingData]);

    useEffect(() => {
        if (dataRedux.buildingData && dataRedux.buildingData.length > 0) {
            setHasilPencarian(dataRedux.buildingData);
            setLoading(false);
        }
    }, [dataRedux]);

    useEffect(() => {
        let filteredData = dataRedux.buildingData;
        if (search) {
            filteredData = dataRedux.buildingData.filter(
                (data) =>
                data.name.toLowerCase().includes(search.toLowerCase()) ||
                data.address.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (titleKapasitas === 'Kapasitas Terbesar') {
            filteredData = [...filteredData].sort((a, b) => b.allowed_capacity - a.allowed_capacity);
        } else if (titleKapasitas === 'Kapasitas Terkecil') {
            filteredData = [...filteredData].sort((a, b) => a.allowed_capacity - b.allowed_capacity);
        }

        setHasilPencarian(filteredData);
    }, [search, titleKapasitas, dataRedux]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchButtonClick = () => {
        setSearch('')
    };
    return(
        <div className='containerGedung'>
            <div className='headerGedung'>
                <div><FontAwesomeIcon icon={faLocationDot} size='2x'/></div>
                    <Form className='searchGedung'>
                        <Form.Control type='text' placeholder='Search' className='formSearchGedung' value={search} onChange={handleSearch} />
                        <Button className='buttonSearchGedung' onClick={handleSearchButtonClick}>
                            <FontAwesomeIcon icon={faPen} />
                        </Button>
                    </Form>
                    <NavDropdown className='dropdownGedung' title={titleKapasitas} id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => setTitleKapasitas('Kapasitas Terbesar')}>Kapasitas Terbesar</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setTitleKapasitas('Kapasitas Terkecil')}>Kapasitas Terkecil</NavDropdown.Item>
                    </NavDropdown>
                    {titleKapasitas !== 'Kapasitas Gedung' ? (
                        <Button className='buttonClear' onClick={() => setTitleKapasitas('Kapasitas Gedung')}>clear</Button>
                    ):(
                        <></>
                    )}
                    <Button className='pengunjungPlus' onClick={() => setTambahBuildingData(true)}>+ Visitors</Button>
                </div>

            {loading ? (
                <div className='pesanGedung'>Loading...</div>
            ):( 
                hasilPencarian.length === 0 ? (
                    <div className='pesanGedung'>Data Tidak Ada</div>
                ):(
                    <div className='containerCardBodyGedung'>
                        {hasilPencarian.map((data) => (
                            <Card.Body key={data.id} className='cardBodyGedung'> 
                                <Card.Title className='cardTitleGedung'>{data.name}</Card.Title>
                                <div className='cardInformasiGedung'>
                                    <Card.Text className='cardTextGedung'> <FontAwesomeIcon icon={faPeopleLine} /> Max : {data.allowed_capacity}</Card.Text>
                                    <Card.Text className='cardTextGedungRight'><FontAwesomeIcon icon={faPhone} /> {data.phone_number}</Card.Text>
                                </div>
                                <div className='cardInformasiGedung'>
                                    <Card.Text className='cardTextGedung'><FontAwesomeIcon icon={faClock} /> Wkt. Kunj: 09:00 - 18.00</Card.Text>
                                    <Card.Text className='cardTextGedungRight'><FontAwesomeIcon icon={faHourglass} /> 8 jam</Card.Text>
                                </div> 
                                <Card.Text className='cardAddressGedung'>
                                    <a href={`https://www.google.com/maps/place/${data.latitude},${data.longitude}`} target="_blank" rel="noopener noreferrer">
                                        {data.address}
                                    </a>
                                </Card.Text>
                            </Card.Body> 
                        ))}
                    </div>
                )
            )}
            <ModalTambahBuildingData show={tambahBuildingData} onHide={() => setTambahBuildingData(false)} />
        </div>
    )
}

const reduxState = (state) => ({
    dataRedux: { 
      buildingData: state.buildingData,
    },
  });
  
  const reduxDispatch = (dispatch) => ({ 
    getDataBuildingData: () => dispatch(getDataBuildingDataFromData()),
  });

export default connect(reduxState, reduxDispatch) (Gedung)