import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <section class="page-error">
            <div class="container">
                <h1 class="name">Oops!</h1>
                <h3>Error code: 404</h3>
                <p>We can't seem to find the page you're looking for.</p>
                <Link to="/" class="btn"><span>home</span></Link>
            </div>
        </section>
    )
}

export default NotFound;