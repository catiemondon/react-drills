import React, { Component } from "react"

class Login extends Component{
    constructor(){
        super()
        this.state={
            username: '',
            password: ''
        }
        this.handleLogin= this.handleLogin.bind(this)
    }
handleUpdateUsername(name){
    this.setState({username: name})
}

handleUpdatePassword(word){
    this.setState({password: word})
}

handleLogin(e){
    alert(`Username:${this.state.username} Password:${this.state.password}`)
}

render(){
    return(
        <div>
            <input placeholder="username" onChange={(e)=> this.handleUpdateUsername(e.target.value)}></input>
            <input placeholder="password" onChange={(e)=> this.handleUpdatePassword(e.target.value)}></input>
            <button onClick={this.handleLogin}>Login</button>
        </div>
    )
}
}



export default Login