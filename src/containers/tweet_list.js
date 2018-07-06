import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from "moment"
import ReactTable from "react-table";
import "react-table/react-table.css";

class TweetList extends Component {

    render() {
        const {tweets} = this.props;
        return (
            <div>
                <ReactTable className= "rtable"
                    data={tweets}
                    columns={[
                        {
                            Header: "Tweets",
                            columns: [
                                {
                                    Header: "#",
                                    id: "indexOf(id)",
                                    accessor:  n=>tweets.indexOf(n)+1,
                                    width: 50
                                },
                                {
                                    Header: "ID",
                                    accessor: "id",
                                    maxWidth: 200
                                },
                                {
                                    Header: "Time",
                                    id: "stamp",
                                    accessor: ts=>moment(ts.stamp).format("MMMM Do YYYY, h:mm:ss"),
                                    maxWidth: 250
                                },
                                {
                                    Header: "Tweet",
                                    id: "text",
                                    accessor: "text"
                                }
                            ]
                        },
                        {
                            Header: "Expand",
                            columns: [
                                {
                                    expander: true,
                                    Header: () => <strong>More</strong>,
                                    width: 100,
                                    Expander: ({ isExpanded, ...rest }) =>
                                        <div>
                                            {isExpanded
                                                ? <span>&#x2299;</span>
                                                : <span>&#x2295;</span>}
                                        </div>

                                }
                            ]
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    SubComponent={({original}) => {
                        return(<div className= "expandable">Text: {original.text}</div>)}
                    }
                />
            </div>

        )
    }

}

function mapStateToProps({tweets}) {
    return {tweets};
}
export default connect(mapStateToProps)(TweetList);