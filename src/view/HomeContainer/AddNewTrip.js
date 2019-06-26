import React from 'react';




class AddNewTrip extends React.Component {
    state = {
        newTrip: {
            tripname: '',
            startDate: '',
            endDate: '', 
        }
    }

    addNewTrip = e => {
        e.preventDefault();
        this.props.addNewTrip(this.state.newTrip)
        .then(() => {
            this.props.getTrips()
        })
    }

    handleChange = e => {
        this.setState({
            newTrip: {
                ...this.state.newTrip,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewTrip}>
                    <input 
                        type='text'
                        name='tripname'
                        placeholder='tripname'
                        value={this.state.newTrip.tripname}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='date'
                        name='startDate'
                        placeholder='start date'
                        value={this.state.newTrip.startDate}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='date'
                        name='endDate'
                        placeholder='end date'
                        value={this.state.newTrip.endDate}
                        onChange={this.handleChange}
                    />
                <button>Add</button>
                </form>

            </div>
        )
    }
}



export default AddNewTrip; 