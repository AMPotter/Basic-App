import React from 'react';
import { Link } from 'react-router-dom';

export default class ForgotPassword extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
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
        const { email } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        value={email} 
                        onChange={({target}) => this.handleInputChange({email: target.value})} />
                    <br />
                    <input type="submit" value="Submit" />
                    <Link to="/login">Not a user?</Link>
                </fieldset>
            </form>
        );
    }
}