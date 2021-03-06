import { Component } from 'react';
import BasketCart from "../../components/BasketCart";
import Search from "../../components/Search";
import Categories from "../../components/Categories";

class SideBar extends Component {
    render () {
        return (
            <div className="col-12 col-lg-3 shop-sidebar">
                <ul className="widgets wigets-shop">
                    <Search />
                    <BasketCart />
                    <Categories />
                </ul>
            </div>
        );
    }
}

export default SideBar;

