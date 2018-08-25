import React, { Component } from "react";

import Widget from "../components/Widget";

import css from "../styles/widgets_container.css";
import { faCreditCard, faComments, faUser, faNewspaper } from "@fortawesome/free-regular-svg-icons";

const colors = {
    blue: "#5484FF",
    yellow: "#FDC012",
    green: "#00C7B0",
    red: "#FF0022"
}


class WidgetsContainer extends Component {
    render() {
        return (
            <div id="widgets_container" className={css.container}>
                <p id="header_text" className={css.header}>Dashboard</p>
                <div id="widgets_wrapper" className={css.wrapper}>
                    <Widget
                        value={"120"}
                        description={"New Orders"}
                        icon={faCreditCard}
                        color={colors.blue}
                    />
                    <Widget
                        value={"52"}
                        description={"Comments"}
                        icon={faComments}
                        color={colors.yellow} />

                    <Widget
                        value={"24"}
                        description={"New Users"}
                        icon={faUser}
                        color={colors.green} />
                    <Widget
                        value={"25.2K"}
                        description={"Page Views"}
                        icon={faNewspaper}
                        color={colors.red} />
                </div>
            </div>
        )
    }
}
export default WidgetsContainer;