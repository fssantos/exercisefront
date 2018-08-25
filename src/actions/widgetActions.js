import listWidgets from "../utils/api";

export const REQUEST_WIDGETS = "REQUEST_WIDGETS";
export const RECEIVE_WIDGETS = "RECEIVE_WIDGETS";



export const requestWidgets = () => {
    return dispatch => {
        dispatch({
            type: REQUEST_WIDGETS,
        }
        )
    }
}

export const fetchWidgets = () => dispatch => {
    dispatch(requestWidgets());

    /* return listWidgets()
        .then(data => {
            if (typeof data.error == "undefined") {
                dispatch(receiveWidgets(data));
            } else {
                console.error(data.error);
                dispatch(receiveWidgets([]));
            }
        })
        .catch(error => {
            console.error(error);
        }); */



}

export const receiveWidgets = (widgets) => {
    return dispatch => {
        dispatch({
            type: RECEIVE_WIDGETS,
            payload: { data: widgets }
        })
    }
}