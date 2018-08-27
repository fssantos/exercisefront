import React, { Component } from "react";

import css from "../styles/dashboard.css";

import Widgets from "../containers/Widgets";
import Chat from "../containers/Chat";
import PageViewsGraph from "../containers/PageViewsGraph";

class Dashboard extends Component {
    render() {
        return (
            <div className={css.container}>
                <Widgets />
                <PageViewsGraph />
                <Chat />
            </div>
        )
    }
}

export default Dashboard;
