import React, { Component } from 'react';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    name: 'Krunal'

                },
                {
                    id: 2,
                    name: 'Ankit'
                },
                {
                    id: 3,
                    name: 'Rushabh'
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
                        {this.state.users.map((object, i) =>
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