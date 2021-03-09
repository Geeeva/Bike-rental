import React, { Component } from "react";
import {Container, Image, Row} from "react-bootstrap";
import {getBasketProductsWithCount, getTotalBasketCount, getTotalBasketPrice} from "../../store/selectors";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Checkout extends Component {
    state = {
        firstName: "",
        lastName: "",
        address: "",
        town:"",
        postNumber:"",
        phoneNumber:"",
        email: "",
        date: "",
        note:"",
        notificationErr: "",
        selectedRadio: "cash"
    }

    validate = e => {

        let isError = false;
        let notificationErr = "";

        let { firstName, lastName, address, town, postNumber, phoneNumber, email, date, note} = this.state;

        if (firstName.length === 0) {isError = true;}
        if (lastName.length === 0) {isError = true;}
        if (address.length === 0) {isError = true;}
        if (town.length === 0) {isError = true;}
        if (postNumber.length === 0) {isError = true;}
        if (phoneNumber.length === 0) {isError = true;}
        if (!email.includes("@")|| email.length === 0) {isError = true;}
        if (date.length === 0) {isError = true;}

        if(isError){
            notificationErr = "All * fields must be properly filled";
            this.setState({
                notificationErr: notificationErr
            })

        } else{
            this.setState({
                notificationErr: "",
            })
        }
        return isError;
    }

    handleRadioChange = (event) => {
        this.setState({
            selectedRadio: event.currentTarget.value
        })
    };

    submitHandler = (e) => {
        e.preventDefault();
        let { firstName, lastName, address, town, postNumber, phoneNumber, email, date, note } = this.state;

        const err = this.validate();

        if(err === false) {
            this.setState({
                firstName: "",
                lastName: "",
                address: "",
                town:"",
                postNumber:"",
                phoneNumber:"",
                email: "",
                date: "",
                note:"",
                notificationErr: "",
                selectedRadio: "cash"
            })

            const order = {
                ...this.state,
                orderItems: this.props.products
            }

            console.log(order);

        }
    }
    render() {
        const{totalPrice, products} = this.props;
        console.log(products);
        return (
            <Container className="checkout">
                <Row>
                    <section className="col-md-6 checkout-form">
                        <div className="col-md-12 checkout-form-caption"><h5>Data</h5></div>
                        <form id="checkoutForm"  name="checkoutForm"  >
                            <ul className="form-cover">
                                <li className="col-md-6">
                                    <input
                                        id="first-name"
                                        type="text"
                                        name="first-name"
                                        placeholder="First name *"
                                        value={this.state.firstName}
                                        onChange={e =>this.setState({ firstName: e.target.value })}
                                    />
                                </li>
                                <li className="col-md-6">
                                    <input
                                        id="last-name"
                                        type="text"
                                        name="last-name"
                                        placeholder="Last name *"
                                        value={this.state.lastName}
                                        onChange={e =>this.setState({ lastName: e.target.value })}
                                    />
                                </li>
                                <li className="col-md-12">
                                    <input
                                        id="address"
                                        type="text"
                                        name="address"
                                        placeholder="Address *"
                                        value={this.state.address}
                                        onChange={e =>this.setState({ address: e.target.value })}
                                    />
                                </li>
                                <li className="col-md-6">
                                    <input
                                        id="town"
                                        type="text"
                                        name="town"
                                        placeholder="Town *"
                                        value={this.state.town}
                                        onChange={e =>this.setState({ town: e.target.value })}
                                    />
                                </li>
                                <li className="col-md-6">
                                    <input
                                        id="post-number"
                                        type="text"
                                        name="post-number"
                                        placeholder="Post number *"
                                        value={this.state.postNumber}
                                        onChange={e =>this.setState({ postNumber: e.target.value })}
                                    />
                                </li>
                                <li className="col-md-6">
                                    <input
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        placeholder="Phone number *"
                                        value={this.state.phoneNumber}
                                        onChange={e =>this.setState({ phoneNumber: e.target.value })}
                                    />
                                </li>
                                <li className="col-md-6">
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Email *"
                                        value={this.state.email}
                                        onChange={e =>this.setState({ email: e.target.value })}
                                    />
                                </li>
                                <li className="col-md-12">
                                    <input
                                    id="date"
                                    type="text"
                                    name="date"
                                    placeholder="Pick up date *"
                                    value={this.state.date}
                                    onChange={e =>this.setState({ date: e.target.value })}
                                />
                                </li>
                                <li className="col-md-12">
                                    <textarea
                                        id="note"
                                        name="note"
                                        placeholder="Note"
                                        rows="4"
                                        value={this.state.note}
                                        onChange={e =>this.setState({ note: e.target.value })}
                                    >
                                    </textarea>
                                </li>
                            </ul>
                            <div className="col-md-12 notification-error">
                                <span
                                    className="">{this.state.notificationErr}
                                </span>
                            </div>
                        </form>
                            <div className="btn-form-cover">

                            </div>
                    </section>
                    <section className="col-md-6">
                        <Row>
                            <div className="col-md-12 checkout-total-caption"><h5>Order</h5></div>
                            <div className="checkout-total-details col-md-12">
                                <Row>
                                    <div className="col-md-6">Product</div>
                                    <div className="col-md-3">Days to rent</div>
                                    <div className="col-md-3">Total</div>
                                </Row>
                            </div>

                            {products.map((product, index) => (
                                    <div className="col-md-12" key={index} >
                                        <Row className="total-products">
                                            <div className="col-md-2">
                                                <Image
                                                    className="img-thumbnail"
                                                    src={product.photo}
                                                    alt={product.product_name}
                                                    thumbnail
                                                />
                                            </div>
                                            <div className="col-md-4">{product.product_name}</div>
                                            <div className="col-md-3">{product.quantity}</div>
                                            <div className="col-md-3">{product.full_day_rent}€</div>
                                        </Row>
                                    </div>
                                ))}
                            </Row>
                            <Row className="table-bottom">
                                <div className="col-md-12">
                                    <Row className="total-table">
                                    <div className="col-md-12">
                                    </div>
                                    <div className="col-md-9">
                                        Rent amount VAT included
                                    </div>
                                    <div className="col-md-3">
                                        {totalPrice} €
                                    </div>
                                    <div className="col-md-9">
                                        in Total
                                        </div>
                                        <div className="col-md-3">
                                        {totalPrice} €
                                    </div>
                            </Row>
                            <Row>
                                    <div className="radio-buttons col-md-12">
                                        <div>Type of payment:</div>
                                    <input
                                        id="cash"
                                        value="cash"
                                        name="cash"
                                        type="radio"
                                        checked={this.state.selectedRadio === "cash"}
                                        onChange={this.handleRadioChange}
                                    />
                                    <label htmlFor="pickup">cash on pick up</label>
                                    <input
                                        id="byCard"
                                        value="card"
                                        name="card"
                                        type="radio"
                                        disabled
                                        checked={this.state.selectedRadio === "card"}
                                        onChange={this.handleRadioChange}
                                    />
                                    <label htmlFor="card">by Card</label>
                                    </div>
                                    <div className="col-md-12 button-wrapper">
                                        <button
                                            id="#submit"
                                            type="submit"
                                            className="btn"
                                            onClick={e => this.submitHandler(e)}
                                        ><span>Continue to payment</span>
                                        </button>
                                    </div>
                            </Row>
                        </div>
                    </Row>
                    </section>

                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    products: getBasketProductsWithCount(state),
    totalPrice: getTotalBasketPrice(state)
})

export default connect(mapStateToProps, null)(Checkout);