import Menu from "./menu";
import NavBar from "./Navbar";

export default function AdminAddCategory() {
    return (<div id="wrapper">
        {/* Sidebar */}
        <Menu />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <NavBar />
                {/* End of Topbar */}
                {/* Begin Page Content */}
                <div className="container-fluid mt-3">
                    {/* Page Heading */}
                    <h4 className="text-dark font-weight-bold">Add - Category Management</h4>
                    {/* DataTales Example */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex justify-content-between">
                            <h5 className="m-0 text-dark">New category</h5>
                            <a href="category.html" className="btn btn-primary">Back</a>
                        </div>
                        <div className="card-body">
                            <form action method="post">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="photo" className="form-label">Select Photo</label>
                                    <input type="file" className="form-control" id="photo" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Description</label>
                                    <textarea className="form-control" id="description" required defaultValue={"                                    "} />
                                </div>
                                <div className="d-flex justify-content-end">
                                    <input type="submit" className="btn btn-primary" defaultValue="Save" />&nbsp;
                                    <input type="submit" className="btn btn-dark" defaultValue="clear" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright © Your Website 2025</span>
                    </div>
                </div>
            </footer>
            {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
    </div>
    );
}