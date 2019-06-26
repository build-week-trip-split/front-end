import React from 'react';

import { connect } from 'react-redux'; 

import { addNewTrip } from '../../actions';

class AddNewTrip extends React.Component {
    state = {
        newTrip: {
            tripname: '',
            startDate: '',
            endDate: '', 
            users: [],
        }
    }

    addNewTrip = e => {
        e.preventDefault();
        this.props.addNewTrip(this.state.newTrip)
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
                    <input 
                        type='text'
                        name='users'
                        placeholder='add friends'
                        value={this.state.newTrip.users}
                        onChange={this.handleChange}
                    />
                <button>Add</button>
                </form>

            </div>
        )
    }
}

const maptStateToProps = state => {
    console.log(state);
    return {
        destination: state.destination,
        startDate: state.startDate,
        endDate: state.endDate, 
        friends: state.friends,
        numberOfPeople: state.numberOfPeople,
        completed: state.completed
    }
}

export default connect (maptStateToProps, { addNewTrip})(AddNewTrip); 