export const changeCatalogState = (state, action) => {
    if(state === undefined) {
        return {
            data: [],
            loading: false
        }
    }

     switch (action.type) {
         case "CHANGE_CATALOG_LIST":
             return {
                 ...state.catalog,
                 data: action.payload
             };
         case "CHANGE_LOADING":
             return {
                 ...state.catalog,
                 loading: action.payload
             };
         default:
             return state.catalog
     }

}