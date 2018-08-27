import { listChatMessages, createChatMessage } from "../utils/api";

export const REQUEST_CHAT_MESSAGES = "REQUEST_CHAT_MESSAGES";
export const RECEIVE_CHAT_MESSAGES = "RECEIVE_CHAT_MESSAGES";
export const CREATE_CHAT_MESSAGE = "CREATE_CHAT_MESSAGE";



export const requestChatMessages = () => ({
    type: REQUEST_CHAT_MESSAGES,
})

export const receiveChatMessages = (messages) => ({
    type: RECEIVE_CHAT_MESSAGES,
    payload: { data: messages }
})

export const fetchChatMessages = () => dispatch => {
    dispatch(requestChatMessages());

    return listChatMessages()
        .then(data => {
            if (typeof data.error == "undefined") {
                setTimeout(() => { dispatch(receiveChatMessages(data)); }, 2000)

            } else {
                console.error(data.error);
                dispatch(receiveChatMessages([]));
            }
        })
        .catch(error => {
            console.error(error);
        });
}

export const postMessage = data => dispatch => {
    return createChatMessage({ message: data })
        .then(status => {
            if (status === 201) {
                dispatch({
                    type: CREATE_CHAT_MESSAGE, payload: {
                        message: {
                            userName: "eu",
                            time: "1 min ago",
                            displayPortraitLeft: true,
                            portrait: "https://goo.gl/NC1dKL",
                            message: data
                        }
                    }
                });
            } else {
                console.log("Error while saving the message");
                console.log(status);
            }
        })
}

