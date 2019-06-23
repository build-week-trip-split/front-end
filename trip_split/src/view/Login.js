import React from 'react';

import { connect } from 'react-redux';
import { logIn } from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            user: '',
            password: ''
        }
    }

    logIn = e => {
        e.preventDefault();
        this.props.logIn(this.state.credentials)
        this.setState({
            credentials: {
                user: '',
                password: ''
            }
        })
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.smurf,
                [e.target.name]: e.target.value
            }
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.logIn}>
                    <input 
                        type='text'
                        name='user'
                        placeholder='user'
                        value={this.state.credentials.user}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='password'
                        name='password'
                        placeholder='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

const maptStateToProps = state => {
    console.log(state);
    return {
        error: state.error,
        isLoggingIn: state.isLoggingIn
    }
}

export default connect (maptStateToProps, { logIn })(Login);