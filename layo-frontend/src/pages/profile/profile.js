import React from "react";
import $ from 'jquery';
import Account from "./account";
import AddressBook from "./addressBook";
import Measurement from "./measurement";
import Orders from "./orders";

export default class Profile extends React.Component {
    constructor() {
        super()    
        this.state = {
            pages: ['account', 'addressBook', 'measurement', 'orders', 'wishlist', 'recentlyViewed'],
            selected: 0,
        }
    }

    componentDidMount() {
        $(`#${this.state.selected}${this.state.pages[this.state.selected]}`).addClass('selected')

        $('.Profile .row .sidenav .nav-item').on('click', (e) => {
            $('.Profile .row .sidenav .nav-item').removeClass('selected')
            this.setState({selected: parseInt(e.currentTarget.id[0])})
        })
    }

    componentDidUpdate() {
        $(`#${this.state.selected}${this.state.pages[this.state.selected]}`).addClass('selected')
    }

    showContent = () => {
        const page = this.state.pages[this.state.selected]
        if (page == 'account') {
            return <Account />
        }    
        else if (page == 'addressBook') {
            return <AddressBook />
        }
        else if (page == 'measurement') {
            return <Measurement />
        }
        else if (page == 'orders') {
            return <Orders />
        }
    }

    render() {
        return(
            <div className="Profile container  mt-5 ms-0">
                <div className="row">
                    <div className="sidenav col-2 align-items-center d-flex flex-column border pt-2 shadow-sm">
                        <p class="nav-item" id="0account" >Account</p>
                        <p class="nav-item" id="1addressBook" >Address book</p>
                        <p class="nav-item" id="2measurement" >Measurement</p>
                        <p class="nav-item" id="3orders" >Orders</p>
                        <p class="nav-item" id="4wishlist" >Wishlist</p>
                        <p class="nav-item" id="5recentlyViewed" >Recently Viewed</p>
                    </div>
                    <div className="col-9 ms-4">
                        {this.showContent()}
                    </div>
                </div>
            </div>    
        )
    }
}