import {changeCatalogState} from "./change-catalog-state";
import {createCurrentDevice} from "./create-current-device";

const reducer = (state, action) => {
    // console.log("MAIN STATE", state);
    return {
        catalog: changeCatalogState(state, action),
        currentDevice: createCurrentDevice(state, action),
        bestSales: []
    }
};

export default reducer



//
// const initialState = {
//     catalog: [],
//     loading: false
// };
//
// const reducer = (state, action) => {
//
//     if(state === undefined){
//         return initialState
//     }
//
//     switch (action.type) {
//         case "CHANGE_CATALOG_LIST":
//             return {
//                 ...state,
//                 catalog: action.payload
//             };
//         case "CHANGE_LOADING":
//             return {
//                 ...state,
//                 loading: action.payload
//             };
//         default:
//             return state
//     }
// };
//
// export default reducer