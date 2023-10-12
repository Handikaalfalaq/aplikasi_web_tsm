import axios from "axios";

export const getDataVisitorsFromData = () => async (dispatch) => {
  try {
    const response = await axios.get("https://virtserver.swaggerhub.com/swaggerpayment/GetDataBuilding/1.0.0/visitors");
    const visitors = response.data;
    dispatch({ type: 'SET_VISITORS', value: visitors });
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const getDataBuildingDataFromData = () => async (dispatch) => {
  try {
    const response = await axios.get("https://virtserver.swaggerhub.com/swaggerpayment/GetDataBuilding/1.0.0/building_data");
    const buildingData = response.data;
    dispatch({ type: 'SET_BUILDING_DATA', value: buildingData });
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
