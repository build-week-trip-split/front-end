import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions';

class SignUp extends React.Component {
    state = {
        newUser: {
            first_name: '',
            last_name: '',
            email: '',
            phone_number: ''
        }
    };

    handleChange = e => {
        this.setState({
            newUser: {
                ...this.state.newUser,
                [e.target.name]: e.target.value
            }
        })
    }

    signUp = e => {
        e.preventDefault();
        this.props.signUp(this.state.newUser);
    }

    pushToLoginForm = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.signUp}>
                    <input 
                        type='text'
                        name='first_name'
                        placeholder='first name'
                        value={this.state.newUser.first_name}
                        onChange={this.handleChange}
                        required
                    />
                    <input 
                        type='text'
                        name='last_name'
                        placeholder='last name'
                        value={this.state.newUser.last_name}
                        onChange={this.handleChange}
                        required
                    />
                    <input 
                        type='text'
                        name='email'
                        placeholder='email'
                        value={this.state.newUser.email}
                        onChange={this.handleChange}
                        required
                    />
                    <input 
                        type='tel'
                        name='phone_number'
                        placeholder='phone number'
                        value={this.state.newUser.phone_number}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        onChange={this.handleChange}
                        required
                    />
                    <small>Format: 123-456-7890</small>
                    <button>Sign Up</button>
                    <button onClick={this.pushToLoginForm}>Log In</button>
                </form>
            </div>
        )
    }
}

const maptStateToProps = state => {
    console.log(state)
    return{
        error: state.errorj,
        isSigningUp: state.isSigningUp
    }
}

export default connect (maptStateToProps, { signUp })(SignUp)