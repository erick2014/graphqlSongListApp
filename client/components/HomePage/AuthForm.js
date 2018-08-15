import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputOne: '',
            inputTwo: ''
        }
    }

    hangleInputChange(page) {
        this.setState({ page })
    }

    buildPageContent() {
        const { route: { path } } = this.props
        const { inputOne, inputTwo } = this.state;
        let pageTitle = ''
        let inputOneText = ''

        if (!path.length) return null

        else if (path === 'signUp') {
            pageTitle = 'Sign Up'
            inputOneText = 'Email'
        }
        else if (path === 'signIn') {
            pageTitle = 'Sign In'
            inputOneText = 'Email'
        }

        return (
            <div className="auth-form-container">
                <u className="sign-up-title">{pageTitle}</u>
                <div className="sign-up-field-box">
                    <div>{inputOneText}</div>
                    <div>
                        <input
                            onChange={e => { this.hangleInputChange('inputOne', e.target.value) }}
                            value={inputOne} />
                    </div>
                </div>
                <div>
                    <div>Password</div>
                    <div>
                        <input
                            type="password"
                            onChange={e => { this.hangleInputChange('inputTwo', e.target.value) }}
                            value={inputTwo} />
                    </div>
                </div>
            </div>
        )
    }


    render() {
        return this.buildPageContent()
    }
}



export default AuthForm