import React from 'react';

export default class Login extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            userName: ''
        };
    }

    handleInputChange = value => {
        console.log(value);
        this.setState({ userName: value });        
    };

    render() {
        const {userName} = this.state;

        return (
            <form>
                <input type="text" name="userName" value={userName} onChange={({target}) => this.handleInputChange(target.value)} />
            </form>
        );
    }
}