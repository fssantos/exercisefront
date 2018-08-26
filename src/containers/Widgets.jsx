import React, { Component } from "react";
import { connect } from "react-redux";

import Widget from "../components/Widget";
import Loader from "react-loader-spinner";
import { fetchWidgets } from "../actions/widgetActions";

import css from "../styles/widgets_container.css";
import { faCreditCard, faComments, faUser, faNewspaper } from "@fortawesome/free-regular-svg-icons";

const colors = {
    blue: "#5484FF",
    yellow: "#FDC012",
    green: "#00C7B0",
    red: "#FF0022"
}


class Widgets extends Component {

    componentDidMount() {
        this.props.fetchWidgets();
    }


    render() {

        const { newOrders, comments, newUsers, pageViews } = this.props.widgets
        const { isFetching } = this.props

        if (isFetching) {
            return (
                <div className={css.loader_wrapper}>
                    <Loader type="Oval" color="#4B9C33" height={80} width={80} />
                </div>)
        }

        return (

            < div id="widgets_container" className={css.container} >
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
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        widgets: state.widgetsReducer.data,
        isFetching: state.widgetsReducer.isFetching,
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        fetchWidgets: () => { dispatch(fetchWidgets()) }
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(Widgets);