export const changeCatalogList = (payload) => {
    return {
        type: "CHANGE_CATALOG_LIST",
        payload
    }
}

export const changeLoading = (payload) => {
    return {
        type: "CHANGE_LOADING",
        payload
    }
}

export const fetchDevices = (getDevices, dispatch) => {
    dispatch(changeLoading(true))
    getDevices()
        .then((data) => {
            dispatch(changeCatalogList(data))
            dispatch(changeLoading(false))
        })
}