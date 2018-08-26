import "whatwg-fetch";
const apiUrl = "http://dev.4all.com:3050";


const resource = {
    widgets: "widgets",
    chatMessages: "messages",
    pageViews: "pageViews",
}


// Widgets 
export const listWidgets = () =>
    fetchList(resource.widgets).then(response => response.json())


// Chat
export const listChatMessages = () =>
    fetchList(resource.chatMessages).then(response => response.json())

export const createChatMessage = data =>
    fetchCreate(resource.chatMessages, data).then(response => response.status)


// Page Views
export const listPageViews = () =>
    fetchList(resource.pageViews).then(response => response.json())






// Commum methods
const fetchList = resource =>
    fetch(`${apiUrl}/${resource}/`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    });

const fetchCreate = (resource, data) =>
    fetch(`${apiUrl}/${resource}/`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
    });


