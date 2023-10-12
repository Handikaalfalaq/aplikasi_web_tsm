import {React , useState, useEffect} from 'react'
import '../assets/css/gedung.css'
import { Form, Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPen, faPeopleLine, faClock, faPhone, faHourglass } from '@fortawesome/free-solid-svg-icons';
import {getDataBuildingDataFromData} from '../redux/action/getData'
import { connect } from 'react-redux';

function Gedung({dataRedux, getDataBuildingData}){
    const [buildingData, setBuildingData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getDataBuildingData();
    }, [getDataBuildingData]);

    useEffect(() => {
        if (buildingData !== dataRedux.buildingData) {
        setBuildingData(dataRedux.buildingData);
        setSearchResults(dataRedux.buildingData);
        setLoading(false);
        }
    }, [dataRedux, buildingData]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filteredData = buildingData.filter(
        (data) =>
            data.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            data.address.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSearchResults(filteredData);
    };

    return(
        <div className='containerGedung'>
            <div className='headerGedung'>
                <div><FontAwesomeIcon icon={faLocationDot} size='2x'/></div>
                    <Form className='searchGedung'>
                        <Form.Control type='text' placeholder='Search' className='formSearchGedung' value={searchTerm} onChange={handleSearch} />
                        <Button className='buttonSearchGedung' type='submit'>
                            <FontAwesomeIcon icon={faPen} />
                        </Button>
                    </Form>
                </div>

            {loading ? (
                <div className='pesanGedung'>Loading...</div>
            ):( 
                searchResults.length === 0 ? (
                    <div className='pesanGedung'>Data Tidak Ada</div>
                ):(
                    <div className='containerCardBodyGedung'>
                        {searchResults.map((data) => (
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