import React, { Component } from "react";
import css from "../styles/page_views_graph.css";
import LineChart from "react-chartjs/lib/line";

import { fetchPageViews } from "../actions/pageViewsActions";

import { connect } from "react-redux";



class PageViewsGraph extends Component {

    fillGraphData = (pageViews) => {
        const labels = pageViews.map(pageView => pageView.month);
        const data = pageViews.map(pageViews => pageViews.views);

        return {
            labels: labels,
            datasets: [{
                ...graphStyle,
                data: data
            }]
        }
    }

    render() {
        return (
            <div className={css.container}>
                <p className={css.header}>Site Traffic Overview</p>
                <div className={css.graph_wrapper}>
                    <LineChart className={css.graph} data={this.fillGraphData(this.props.pageViews)} options={{
                        responsive: true,
                        maintainAspectRatio: false,
                    }} />

                </div>

            </div>
        )
    }

    componentDidMount() {
        this.props.fetchPageViews();
    }
}

const mapStateToProps = state => {
    return (
        {
            pageViews: state.pageViewsReducer.data,
        }
    )
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchPageViews: () => { dispatch(fetchPageViews()) }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PageViewsGraph);

const graphStyle =
{
    label: "PageViews",
    fillColor: "rgba(151,187,205,0.2)",
    strokeColor: "rgba(151,187,205,1)",
    pointColor: "rgba(151,187,205,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(151,187,205,1)",
};
