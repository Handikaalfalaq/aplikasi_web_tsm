const initialState = {
    buildingData:[],
    visitors:[], 
  }

const reducer = (state=initialState, action) => { 
    if(action.type === 'SET_BUILDING_DATA'){
        return {
            ...state,
            buildingData: action.value
        }
    }
    if(action.type === 'SET_VISITORS'){
        return {
            ...state,
            visitors: action.value
        }
    }
    return state;
}

export default reducer