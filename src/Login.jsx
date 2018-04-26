import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: ''
        };
    }

    handleInputChange = (name, value) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        const { submitFn } = this.props;
        e.preventDefault();
        if(submitFn) submitFn(this.state);
    }

    render() {
        const { userName, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <label htmlFor="userName">Username</label>
                    <input type="text" name="userName" value={userName} onChange={({target}) => this.handleInputChange('userName', target.value)} />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={atob(password)} onChange={({target}) => this.handleInputChange('password', btoa(target.value))} />
                    <br />
                    <input type="submit" value="Submit" />
                    <Link to="/register">Not a user?</Link>
                </fieldset>
            </form>
        );
    }
}