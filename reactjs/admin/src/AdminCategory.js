import { Link } from "react-router-dom";
import Menu from "./menu";
import NavBar from "./Navbar";
import { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
export default function AdminCategory() {
    //create function display 
    let display = function (item) {
        return (<tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td width="20%">
                <img src={"http://www.theeasylearnacademy.com/shop/images/category/" + item.photo} alt className="img-fluid" />
            </td>
            <td>{(item.islive === '1') ? "Yes" : "No"}</td>
            <td width="15%">
                <Link to="/edit-category/1" className="btn btn-warning btn-sm">Edit</Link>
                <a href="#" className="btn btn-danger btn-sm">Delete</a>
            </td>
        </tr>);
    }
    //create empty state array
    var [items, setItems] = useState([]);
    useEffect(() => {
        if (items.length == 0) {
            let apiAddress = "https://theeasylearnacademy.com/shop/ws/category.php";
            axios({
                url: apiAddress,
                method: 'get',
                responseType: 'json'
            }).then((response) => {
                console.log(response.data);
                /*
                [
                    0 {"error":"no"},
                    1 {"total":6},
                    2 {"id":"1","title":"laptop","photo":"laptop.jpg","islive":"1","isdeleted":"0"},
                    3 {"id":"2","title":"mobile","photo":"mobile.jpg","islive":"1","isdeleted":"0"},
                    4{"id":"3","title":"book","photo":"books.jpg","islive":"1","isdeleted":"0"}
                ]
                */
                let error = response.data[0]['error'];
                console.log(error);
                if (error != 'no') {
                    alert(error);
                }
                else {
                    let total = response.data[1]['total'];
                    console.log(total);
                    if (total === 0) {
                        alert('no category found');
                    }
                    else {
                        //remove 2 elements from array @ begining
                        response.data.splice(0, 2);
                        console.log(response.data);
                        //now copy this into state array
                        setItems(response.data);
                        toast.success('Categories fetched', {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            transition: Bounce,
                        });
                    }
                }
            }).catch((error) => {
                if (error.code === 'ERR_NETWORK')
                    // alert('either you are offline of server is offline');
                    toast.error('either you are offline of server is offline', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                    });
            });
        }
    })
    return (<div id="wrapper">
        <Menu />
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
                <NavBar />
                <div className="container-fluid">
                    <ToastContainer />
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex justify-content-between">
                                    <h5 className="m-0 font-weight-bold text-primary">Category</h5>
                                    <Link to='/add-category' className="btn btn-primary btn-sm">Add
                                        <i className="fa fa-plus" />
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>Title</th>
                                                <th>Photo</th>
                                                <th>is live</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items.map((item) => display(item))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
        </div>
        {/* End of Content Wrapper */}
    </div>
    );
}