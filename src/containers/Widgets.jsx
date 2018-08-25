import React, { Component } from "react";
import { connect } from "react-redux";

import Widget from "../components/Widget";

import { fetchWidgets } from "../actions/widgetActions";

import css from "../styles/widgets_container.css";
import { faCreditCard, faComments, faUser, faNewspaper } from "@fortawesome/free-regular-svg-icons";

const colors = {
    blue: "#5484FF",
    yellow: "#FDC012",
    green: "#00C7B0",
    red: "#FF0022"
}


class WidgetsContainer extends Component {

    componentDidMount() {
        this.props.fetchWidgets();
    }


    render() {

        const { newOrders, comments, newUsers, pageViews } = this.props.widgets
        return (
            <div id="widgets_container" className={css.container}>
                <p id="header_text" className={css.header}>Dashboard</p>
                <div id="widgets_wrapper" className={css.wrapper}>
                    <Widget
                        value={newOrders}
                        description={"New Orders"}
                        icon={faCreditCard}
                        color={colors.blue}
                    />
                    <Widget
                        value={comments}
                        description={"Comments"}
                        icon={faComments}
                        color={colors.yellow} />

                    <Widget
                        value={newUsers}
                        description={"New Users"}
                        icon={faUser}
                        color={colors.green} />
                    <Widget
                        value={pageViews}
                        description={"Page Views"}
                        icon={faNewspaper}
                        color={colors.red} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        widgets: state.widgetsReducer.data
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        fetchWidgets: () => { dispatch(fetchWidgets()) }
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(WidgetsContainer);