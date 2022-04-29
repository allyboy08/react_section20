import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
    return (
        <section>
            <h1>welcome page</h1>
            <Link to="new-user">new user</Link>
            <Outlet />
        </section>
    )
};

export default Welcome;