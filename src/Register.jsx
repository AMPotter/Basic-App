import React from 'react';
import { Link } from 'react-router-dom';
import { FormInput } from './FormInput';

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

    handleInputChange = (userInput) => {
        this.setState(prevState => Object.assign({}, prevState, userInput));        
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
                    <FormInput
                        inputName="userName"
                        label="Username"
                        value={userName}
                        changeFn={({target}) => this.handleInputChange({userName: target.value})} />
                    <br />
                    <FormInput
                        inputName="email"
                        label="Email"
                        value={email}
                        changeFn={({target}) => this.handleInputChange({email: target.value})} />
                    <br />
                    <FormInput
                        inputName="password"
                        label="Password"
                        inputType="password"
                        value={password}
                        changeFn={({target}) => this.handleInputChange({password: target.value})} />
                    <br />
                    <FormInput
                        inputName="confirmPassword"
                        label="Confirm Password"
                        inputType="password"
                        value={confirmPassword}
                        changeFn={({target}) => this.handleInputChange({confirmPassword: target.value})} />
                    <br />
                    <input type="submit" value="Submit" />
                    <Link to="/login">Already a user?</Link>
                </fieldset>
            </form>
        );
    }
}