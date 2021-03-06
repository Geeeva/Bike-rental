import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Sidebar from './Sidebar/Sidebar';
import Products from './Products/Products';
import {getActiveCategoryId} from "../../store/selectors";

const BikeRental = ({categories, activeCategoryId}) => {
    const activeCategoryIdNumber = Number(activeCategoryId.id);
    let categoryName;
    if(Object.entries(activeCategoryId).length === 0){
        categoryName = "all";
    } else{
        categories.filter((category, index) => {
            if(category._id === activeCategoryIdNumber) {
                categoryName = category.name
            }
        })
    }

    return(
        <section className="shop">
            <section className="s-header-title">
                <div className="container">
                    <h1>Bikes to rent</h1>
                        <ul className="breadcrambs">
                            <li><Link to="/">Home</Link></li>
                            <li className="category-name">{categoryName}</li>
                        </ul>
                    </div>
            </section>
            <div className="container bike-rental-wrapper">
                <div className="shop-sidebar-btn btn"><span>filter</span> </div>
                <div className="row">
                    <Sidebar />
                    <div className="col-12 col-lg-9 shop-cover">
                        <Products />
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state, ownProps) => ({
    categories: state.categories.categories,
    activeCategoryId: getActiveCategoryId(ownProps)
})

export default connect(mapStateToProps, null)(BikeRental);