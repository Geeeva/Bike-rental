import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {searchProduct} from "../../store/products.actions"


class Search extends Component{
    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchProduct(this.state.value)
    }

    render(){
        return(
            <form className="subscribe-form" onSubmit={this.handleSubmit}>
                <input className="inp-form" type="text" name="serach" placeholder="Search" onChange={this.handleChange} />
                <button  className="btn btn-form"><span>FIND</span></button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchProduct: bindActionCreators(searchProduct, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Search)