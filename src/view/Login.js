import React from 'react';

import { connect } from 'react-redux';
import { logIn } from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    logIn = e => {
        e.preventDefault();
        this.props.logIn(this.state.credentials)
        .then(res => {
            if(res) {
                this.props.history.push('/user')
            }
        })
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    pushToSignUpForm = () => {
        this.props.history.push('/signup')
    }


    render() {
        return (
            <div>
                <form onSubmit={this.logIn}>
                    <input 
                        type='text'
                        name='username'
                        placeholder='username'
                        value={this.state.credentials.username}
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
                    <button onClick={this.pushToSignUpForm}>Sign Up</button>
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