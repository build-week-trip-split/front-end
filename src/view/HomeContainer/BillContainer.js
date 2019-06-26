import React from 'react';


class BillContainaer extends React.Component {
    
    componentDidMount(){
        this.props.getBills()
    }

    render() {
        return (
            <div>
           
            </div>
        )
    }
}


export default BillContainaer; 