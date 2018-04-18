import React from 'react';

export default class Login extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: ''
        };
    }

    handleUserNameChange = value => {
        console.log(value);
        this.setState({ userName: value });        
    };

    handlePasswordChange = value => {
        console.log(value);
        this.setState({ password: value });        
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(JSON.stringify(this.state));
    }

    render() {
        const {userName, password} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <label htmlFor="userName">Username</label>
                    <input type="text" name="userName" value={userName} onChange={({target}) => this.handleUserNameChange(target.value)} />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={atob(password)} onChange={({target}) => this.handlePasswordChange(btoa(target.value))} />
                    <br />
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
        );
    }
}