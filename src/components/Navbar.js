import React from "react";
import CurrencySelectCont from "./CurrencySelectCont";
import CartOverlay from './CartOverlay';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
    constructor() {
        super();
        this.handleCategory = (e) => {
            const newCategory = e.target.textContent.toLowerCase();
            this.props.changeCategory(newCategory);
        }
        this.currentCategoryStyle = 'currentCategoryStyle';
    }
    render() {
        return <header>
            <div className="nav-links">
                <Link rel="stylesheet" to="/all" className={this.props.currentCategory==='all' ? this.currentCategoryStyle:''} onClick={this.handleCategory.bind(this)}>ALL</Link>
                <Link rel="stylesheet" to="/clothes" className={this.props.currentCategory==='clothes' ? this.currentCategoryStyle:''} onClick={this.handleCategory.bind(this)}>CLOTHES</Link>
                <Link rel="stylesheet" to="/tech" className={this.props.currentCategory==='tech' ? this.currentCategoryStyle:''} onClick={this.handleCategory.bind(this)}>TECH</Link>
            </div>
            <img src="/images/a-logo.svg" alt="logo" id="central-logo" />
            <div className="cart-currency-func">
                <CurrencySelectCont gql={this.props.gql} client={this.props.client} changeTotalPriceOfCartItems={this.props.changeTotalPriceOfCartItems} currencies={this.props.currencies} popUpsClosed={this.props.popUpsClosed} setPopUpWindowsClosed={this.props.setPopUpWindowsClosed} currentCurrency={this.props.currentCurrency} changeCurrency={this.props.changeCurrency} />
                
                <CartOverlay betterPrices={this.props.betterPrices} changeTotalPriceOfCartItems={this.props.changeTotalPriceOfCartItems} 
                cartItemObjectKeys={this.props.cartItemObjectKeys} rebuildCart={this.props.rebuildCart} changeSpecificItemAmount={this.props.changeSpecificItemAmount} 
                totalPriceOfCartItems={this.props.totalPriceOfCartItems} totalItems={this.props.totalItems} popUpsClosed={this.props.popUpsClosed} cartItemObjects={this.props.cartItemObjects} 
                currentCurrency={this.props.currentCurrency} setPopUpWindowsClosed={this.props.setPopUpWindowsClosed}
                 />
            </div>
        </header>
    }
}
export default Navbar;