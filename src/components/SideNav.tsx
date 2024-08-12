import { Link, Outlet } from "react-router-dom";

const SideNav = () => {
    return (
        <>
            <nav>
                <Link to="/"> <h1>finance</h1> </Link>
                <Link to="/"> Overview </Link>
                <Link to="/transactions"> Transactions </Link>
                <Link to="/budgets"> Budgets </Link>
                <Link to="/pots"> Pots </Link>
                <Link to="/recur_bills"> Recurring Bills </Link>
            </nav>
            <Outlet/>
        </>
    )
}

export default SideNav;