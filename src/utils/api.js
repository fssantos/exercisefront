import "whatwg-fetch";
const apiUrl = "http://dev.4all.com:3050";


const resource = {
    widgets: "widgets"
}


// Widgets 

export const listWidgets = () =>
    fetchList(resource.widgets).then(response => response.json());



// Commum methods
const fetchList = resource =>
    fetch(`${apiUrl}/${resource}/`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    });

