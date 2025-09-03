export default function Menu()
{
return (<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">Online shop</div>
    </a>
    <hr className="sidebar-divider my-0" />
    <li className="nav-item">
        <a className="nav-link" href="admin_dashboard.html">
            <i className="fas fa-hand-point-right" />
            <span>Dashboard</span>
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="admin_category.html">
            <i className="fas fa-hand-point-right" />
            <span>Category</span>
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="admin_products.html">
            <i className="fas fa-hand-point-right" />
            <span>Products</span>
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="admin_users.html">
            <i className="fas fa-hand-point-right" />
            <span>Users</span>
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="admin_orders.html">
            <i className="fas fa-hand-point-right" />
            <span>Orders</span>
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="admin_change_password.html">
            <i className="fas fa-hand-point-right" />
            <span>Change Password</span>
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">
            <i className="fas fa-hand-point-right" />
            <span>Logout</span>
        </a>
    </li>
</ul>);
}