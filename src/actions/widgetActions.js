import { listWidgets } from "../utils/api";

export const REQUEST_WIDGETS = "REQUEST_WIDGETS";
export const RECEIVE_WIDGETS = "RECEIVE_WIDGETS";



export const requestWidgets = () => ({
    type: REQUEST_WIDGETS,
})

export const receiveWidgets = (widgets) => ({
    type: RECEIVE_WIDGETS,
    payload: { data: widgets }
})

export const fetchWidgets = () => dispatch => {
    dispatch(requestWidgets());

    return listWidgets()
        .then(data => {
            if (typeof data.error == "undefined") {
                setTimeout(() => { dispatch(receiveWidgets(data)); }, 5000)

            } else {
                console.error(data.error);
                dispatch(receiveWidgets([]));
            }
        })
        .catch(error => {
            console.error(error);
        });
}

