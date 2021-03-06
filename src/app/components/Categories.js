import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {compose} from 'redux'
import {Link} from 'react-router-dom';
import {getActiveCategoryId} from "../../store/selectors";

const Categories = ({categories, activeCategoryId}) => {
    const activeCategoryIdNumber = Number(activeCategoryId.id);

    const renderAllCategory = () => {
        return (
            <Link to={`/bike-rental`} >
                <p className={"categories" + (Object.entries(activeCategoryId).length === 0 ? " active" : "")}><span>All</span></p>
            </Link>
        )
    }
    const renderCategory = (category, index) => {
        return (
            <Link to={`/categories/${category._id}`} key={index}>
                <p className={"categories" + (category._id === activeCategoryIdNumber? " active" : "")}><span>{category.name}</span></p>
            </Link>
        )
    }
    return (
        <li className="widget wiget-shop-category">
            <h5 className="title">bikes</h5>
            <ul>
                {renderAllCategory()}
                {categories.map((category, index) => renderCategory(category, index))}
            </ul>
        </li>
    )
}

const mapStateToProps = (state, ownProps) => ({
    categories: state.categories.categories,
    activeCategoryId: getActiveCategoryId(ownProps)
})


export default compose (
    withRouter,
    connect(mapStateToProps, null))(Categories)