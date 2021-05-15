import React from 'react';

const User = () => {
    return(
        <div>
            <h1>ユーザータスク</h1>
            <div className="container">
    <table className="table table-hover">
        <thead className="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Person In Charge</th>
                <th scope="col">Show</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Title1</td>
                <td>Content1</td>
                <td>Ichiro</td>
                <td>
                    <button className="btn btn-primary">Show</button>
                </td>
                <td>
                    <button className="btn btn-success">Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Title2</td>
                <td>Content2</td>
                <td>Jiro</td>
                <td>
                    <button className="btn btn-primary">Show</button>
                </td>
                <td>
                    <button className="btn btn-success">Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Title3</td>
                <td>Content3</td>
                <td>Saburo</td>
                <td>
                    <button className="btn btn-primary">Show</button>
                </td>
                <td>
                    <button className="btn btn-success">Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
        </div>
    )
}

export default User;