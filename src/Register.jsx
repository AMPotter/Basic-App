import React from 'react';
import { Link } from 'react-router-dom';

export default class Register extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            userName: '',
            password: '',
            confirmPassword: '',
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
        const { userName, password, email, confirmPassword } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <label htmlFor="userName">Username</label>
                    <input 
                        type="text" 
                        name="userName" 
                        value={userName} 
                        onChange={({target}) => this.handleInputChange('userName',target.value)} />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        value={email} 
                        onChange={({target}) => this.handleInputChange('email',target.value)} />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="text" 
                        name="password" 
                        value={atob(password)} 
                        onChange={({target}) => this.handleInputChange('password', btoa(target.value))} />
                    <br />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        value={atob(confirmPassword)} 
                        onChange={({target}) => this.handleInputChange('confirmPassword', btoa(target.value))} />
                    <br />
                    <input type="submit" value="Submit" />
                    <Link to="/login">Already a user?</Link>
                </fieldset>
            </form>
        );
    }
}