import React from 'react';

class Bill extends React.Component{


    render(){
        return(
            <div>
                <p>Title: {this.props.bill.billTitle}</p>
                <p>Amount: ${this.props.bill.billAmount}</p>
                <p>Paid By: {this.props.bill.paidBy.username}</p>
            </div>
        )
    }
}