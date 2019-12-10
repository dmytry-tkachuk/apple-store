export const changeCatalogList = (payload) => {
    return {
        type: "CHANGE_CATALOG_LIST",
        payload
    }
};

export const changeLoading = (payload) => {
    return {
        type: "CHANGE_LOADING",
        payload
    }
};

export const fetchDevices = (getDevices, dispatch, id) => {
    dispatch(changeLoading(true));
    getDevices(id)
        .then((data) => {
            dispatch(changeCatalogList({data, id}));
            dispatch(changeLoading(false))
        })
};

export const fetchCurrentDevice = (getCurrentDevice, dispatch, id) => {
    getCurrentDevice(id)
        .then((data) => {
            dispatch(createCurrentDevice(data));
        })
};

export const createCurrentDevice = (payload) => {
    return {
        type: "CREATE_CURRENT_DEVICE",
        payload
    }
};