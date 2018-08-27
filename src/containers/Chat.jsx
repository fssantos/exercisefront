import React, { Component } from "react";
import { connect } from "react-redux";

import Message from "../components/Message"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";

import { fetchChatMessages, postMessage } from "../actions/chatActions";
import css from "../styles/chat.css";

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messageToSend: "",
        }
    }

    componentDidMount() {
        this.props.fetchChatMessages();
    }


    handleOnChange = (e) => {
        this.setState({
            messageToSend: e.target.value,
        })

    }
    handleOnClick = (e) => {
        if (this.state.messageToSend !== "") {
            this.props.sendMessage(this.state.messageToSend);
            this.setState({ messageToSend: "" })
        }
    }

    render() {
        return (


            <div className={css.container}>

                <div className={css.header}>

                    <FontAwesomeIcon icon={faComments} className={css.header_icon} />
                    <p className={css.header_text}>Chat</p>
                </div>
                <div className={css.messages_wrapper}>

                    {this.props.messages.map((message, index) => {
                        return (
                            <Message
                                portrait={message.portrait}
                                userName={message.userName}
                                displayPortraitLeft={message.displayPortraitLeft}
                                time={message.time}
                                message={message.message}
                                key={index}
                            />
                        )
                    })
                    }
                </div>


                <div className={css.bottom_wrapper}>
                    <input className={css.message_input}
                        onChange={this.handleOnChange}
                        value={this.state.messageToSend}
                        placeholder={"Type your message here...."}>
                    </input>
                    <button className={css.btn_send} onClick={this.handleOnClick}>Send</button>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            messages: state.chatReducer.data,
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            fetchChatMessages: () => { dispatch(fetchChatMessages()) },
            sendMessage: (message) => { dispatch(postMessage(message)) }
        }
    )
}



export default connect(mapStateToProps, mapDispatchToProps)(Chat);