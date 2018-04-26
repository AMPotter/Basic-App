import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormInput } from './FormInput';

export default class AuthComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        this.formView = {
            login: {
                fields: [{
                    inputName: 'userName',
                    label: 'Username',
                    value: this.state.userName
                }, {
                    inputName: 'password',
                    label: 'Password',
                    inputType: 'password',
                    value: this.state.password
                }],
                links: [{
                    path: '/register',
                    label: 'Not a user?'
                }]
            },
            register: {
                fields: [{
                    inputName: 'userName',
                    label: 'Username',
                    value: this.state.userName
                }, {
                    inputName: 'email',
                    label: 'Email',
                    value: this.state.email
                }, {
                    inputName: 'password',
                    label: 'Password',
                    value: this.state.password
                }, {
                    inputName: 'confirmPassword',
                    label: 'Confirm Password',
                    value: this.state.confirmPassword
                }],
                links: [{
                    path: '/login',
                    label: 'Already a user?'
                }]
            },
            forgotPassword: {
                fields: [{
                    inputName: 'email',
                    label: 'Email',
                    value: this.state.email
                }],
                links: [{
                    path: '/register',
                    label: 'Not a user?'
                }, {
                    path: '/login',
                    label: 'Already a user?'
                }]
            }
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
        const { userName, email, password, confirmPassword } = this.state;
        const { url } = this.props.match;
        const { view } = this.props.match.params;

        const hostString = url.substr(0, url.lastIndexOf('/'));

        if (!this.formView[view]) return <Redirect to={`${hostString}/login`} />;

        return (
            <form>
                <fieldset>
                    {
                        this.formView[view].fields.map(({inputName, userName, email, label, password, confirmPassword, inputType}, index) => <FormInput key={`${view}${index}`} inputName={inputName} userName={userName} email={email} password={password} confirmPassword={confirmPassword} label={label} inputType={inputType} changeFn={({target}) => this.handleInputChange({[inputName]: target.value})} />)
                    }
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
        );
    }


}