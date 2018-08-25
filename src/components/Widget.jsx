import React, { Component } from "react";

import css from "../styles/widget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class Widget extends Component {

    render() {
        return (
            <div id="widget" className={css.container}>
                <div id="icon_wrapper" style={{ backgroundColor: this.props.color }} className={css.icon_wrapper}>
                    <FontAwesomeIcon icon={this.props.icon} className={css.icon} />
                </div>
                <div id="wrapper" className={css.wrapper}>
                    <p className={css.text_value}>{this.props.value}</p>
                    <p className={css.text_description}>{this.props.description}</p>
                </div>

            </ div>
        )
    }
}

export default Widget;