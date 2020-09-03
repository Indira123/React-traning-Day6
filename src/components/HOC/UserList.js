import React, { Component } from 'react';

class UserList extends Component {
    constructor(props) {
        super(props);
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
                        {this.props.data.map((object, i) =>
                            <tr>
                                <td>
                                    {object.id}
                                </td>
                                <td>
                                    {object.name}
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default UserList;