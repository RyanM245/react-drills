import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.changeUsername = this.changeUsername.bind(this)
        this.changePass = this.changePass.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    changeUsername(name){
        this.setState({username: name})
    }

    changePass(pass){
        this.setState({password: pass})
    }

    handleLogin(){
        alert(`Username is "${this.state.username}". Password is "${this.state.password}".`)
    }

    render(){
        return(
            <div>
                <input onChange = {e => this.changeUsername(e.target.value)}/>
                <input onChange = {e => this.changePass(e.target.value)}/>
                <button onClick = {this.handleLogin}>Login</button>

            </div>
        )
    }
}

export default Login