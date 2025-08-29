import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
function ApiCallingExample() {
    let [post,setPosts] = useState([]); //create empty state array
    useEffect(() => {
        let apiAddress = "https://jsonplaceholder.typicode.com/posts";
        fetch(apiAddress)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            //store data into state array
            setPosts(data);
        })
        .catch((error) => {
            console.log(error);
        });
    });

    return (<div className="container">
        <div className="row mt-5">
            <div className="col-12">
                <div className="card shadow">
                    <div className="card-header">
                        <h3>API calling using fetch Method</h3>
                    </div>
                    <div className="card-body">
                        <div className="table-container">
                            <div className="table-responsive">
                                <table className="table table-hover table-striped align-middle">
                                    <thead>
                                        <tr>
                                            <th scope="col">userId</th>
                                            <th scope="col">id</th>
                                            <th scope="col">title</th>
                                            <th scope="col">body</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>
                                                sunt aut facere
                                            </td>
                                            <td className="pre-line">
                                                quia et suscipit
                                            </td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ApiCallingExample />);