import { listPageViews } from "../utils/api";

export const REQUEST_PAGE_VIEWS = "REQUEST_PAGE_VIEWS";
export const RECEIVE_PAGE_VIEWS = "RECEIVE_PAGE_VIEWS";



export const requestPageViews = () => ({
    type: REQUEST_PAGE_VIEWS,
})

export const receivePageViews = (pageViews) => ({
    type: RECEIVE_PAGE_VIEWS,
    payload: { data: pageViews }
})

export const fetchPageViews = () => dispatch => {
    dispatch(requestPageViews());

    return listPageViews()
        .then(data => {
            if (typeof data.error == "undefined") {
                setTimeout(() => { dispatch(receivePageViews(data)); }, 2000)

            } else {
                console.error(data.error);
                dispatch(receivePageViews([]));
            }
        })
        .catch(error => {
            console.error(error);
        });
}

