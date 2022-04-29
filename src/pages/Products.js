import { Link } from "react-router-dom";

const Products = () => {
    return (
        <section>
            <h1>products page</h1>
            <ul>
                <li><Link to='/products/p1'>book</Link></li>
                <li><Link to='/products/p2'>manga</Link></li>
                <li><Link to='/products/p3'>course</Link></li>
            </ul>
        </section>
    )
};

export default Products;