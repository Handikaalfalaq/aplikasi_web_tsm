import {React, useState, useEffect} from 'react'
import '../assets/css/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faPeopleGroup, faArrowUpWideShort, faArrowDownShortWide} from '@fortawesome/free-solid-svg-icons';
import FolderImage from '../assets/image/folderImage'
import {getDataBuildingDataFromData} from '../redux/action/getData'
import { connect } from 'react-redux';

function Home({getDataBuildingData, dataRedux}){
    const [buildingData, setBuildingData] = useState()
    const [loading, setLoading] = useState(true)
    const [maxCapasitas, setMaxCapasitas] = useState(0)
    const [minCapasitas, setMinCapasitas] = useState(0)
 
    useEffect(() => {
        getDataBuildingData();
    }, [getDataBuildingData]); 

    useEffect(() => { 
        if (buildingData !== dataRedux.buildingData) {
            setBuildingData(dataRedux.buildingData);
            setLoading(false);
        }
        if( buildingData !== undefined){
            setMaxCapasitas(Math.max(...buildingData.map(item => item.allowed_capacity)));
            setMinCapasitas(Math.min(...buildingData.map(item => item.allowed_capacity)));
        }
    }, [dataRedux, buildingData]); 
    return(
        <div className='containerHome'>
            <div className='homeTitle'>Summary</div>
            <div className='homeCard'>
                <div className='containerLine'>
                    <div className='lineHome' style={{backgroundImage: `url(${FolderImage.line})`}}></div>
                </div>
                <div className='containerDataHome'>
                    <div className='logoDataHome'><FontAwesomeIcon icon={faBuilding} size="2x"/></div>
                    <div className='logoDataHome'><FontAwesomeIcon icon={faPeopleGroup} size="2x"/> <FontAwesomeIcon icon={faArrowUpWideShort} /></div>
                    <div className='logoDataHome'><FontAwesomeIcon icon={faPeopleGroup} size="2x"/> <FontAwesomeIcon icon={faArrowDownShortWide} /></div>
                </div>
                
                {loading ? (
                    <div>Loading...</div>
                ): (
                    <div className='containerDataHome'>
                        <div className='dataHome'>  
                            <div>jumlah Gedung</div>
                            <div>{buildingData.length}</div> 
                        </div>
                        <div className='dataHome'>  
                            <div>Kapasitas Terbesar</div>
                            <div>{maxCapasitas} orang</div> 
                        </div>
                        <div className='dataHome'>  
                            <div>Kapasitas Terkecil</div>
                            <div>{minCapasitas} orang</div> 
                        </div>
                    </div>
                )} 
            </div>
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

export default connect(reduxState, reduxDispatch) (Home)


