//React snippets
import React, { Component } from 'react';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []
        }

    }

//tbody contains js code to return employee dinamic - add
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List                </h2>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key = {employee.id} >
                                        <td> { employee.firstname} </td>
                                        <td> { employee.lastname}</td>
                                        <td> { employee.id}</td>

                                    </tr>
                                )
                            }

                        </tbody>
                    
                    </table>

                </div>


            </div>
        );
    }
}

export default ListEmployeeComponent;