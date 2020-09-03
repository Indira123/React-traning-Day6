import React, { Component } from 'react';

class StockList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: [
                {
                    id: 1,
                    name: 'TCS'

                },
                {
                    id: 2,
                    name: 'Infosys'
                },
                {
                    id: 3,
                    name: 'Reliance'
                }
            ]
        }
    }

    render() {
        return (
            <div className="container">
                <h2>{this.props.name}</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.stocks.map((object, i) =>
                            <tr>
                                <td>
                                    {object.id}
                                </td>
                                <td>
                                    {object.name}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default StockList;