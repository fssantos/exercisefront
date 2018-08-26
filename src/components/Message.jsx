import React, { Component } from "react";

import css from "../styles/message.css"


class Message extends Component {
    render() {
        return (
            <div style={this.props.displayPortraitLeft ? { flexDirection: "row" } : { flexDirection: "row-reverse" }} className={css.container}>
                <div style={{ backgroundImage: `url(${this.props.portrait})` }} className={css.profile_picture}>
                </div>
                <div className={css.infos_and_message_wrapper}>
                    <div className={css.infos_wrapper}>
                        <p className={css.author}>{this.props.userName}</p>
                        <p className={css.time}>{this.props.time}</p>
                    </div>
                    <p className={css.message}>{this.props.message}</p>
                </div>

            </div >
        )
    }
}

export default Message;