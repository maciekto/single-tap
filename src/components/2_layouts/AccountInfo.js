import React, { Component } from 'react'
import Cropper from 'react-easy-crop'
import fire from '../../fire'
import { Switch, Route, withRouter } from 'react-router'
    

// assets

// Modules
import PopupAccounts from '../3_modules/PopupAccounts'

class AccountInfo extends Component {
    state = {
       paymentsRender: undefined
    }
    // IMAGE CROP
    componentDidMount = () => {
        this.readData();
        // console.log(this.props.AccountId)
        // console.log(this.props.user)
        // console.log(this.props.paymentsObject)
        
        
    }
    readData = () => {
        const Payments = this.props.paymentsObject;
        const PaymentsArray = Object.entries(Payments);
        const PaymentsArrayReverse = PaymentsArray.reverse()

        let htmlElement = [];
        let htmlOneElement = null;


        PaymentsArrayReverse.forEach(element => {
            console.log(element[1])
            let typeOfPayment;
            if(element[1].paymentType === 'Income') {
                typeOfPayment = 'AccountInfo-Data-Income'
            } else if(element[1].paymentType === 'Expense'){
                typeOfPayment = 'AccountInfo-Data-Expense'
            }
            htmlOneElement = 
            <div className={`AccountInfo-Data ${typeOfPayment}`}>
                <div className="AccountInfo-Data-Name">
                    Name: {element[1].paymentName}
                </div>
                <div className="AccountInfo-Data-Balance">
                    Balance:<b> {element[1].paymentBalance}{this.props.accountCurrency} </b>
                </div>
                <div className="AccountInfo-Data-Date">
                    Date: {element[1].paymentDate}
                </div>
                <div className="AccountInfo-Data-Notes">
                    Notes: {element[1].paymentNotes}
                </div>
            </div>
            htmlElement.push(htmlOneElement)
        });

        this.setState({
            paymentsRender: htmlElement
        })

    }
    
    render() {
        
        return (
            <div className='AccountInfo'>
                {this.state.paymentsRender}
                
            </div>
        )
    }
}
export default withRouter(AccountInfo);
