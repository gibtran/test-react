import React from "react";

class UserInform extends React.Component {

    state = {
        name: "Brian",
        address: "Sydney",
        message: "",
        age: 18
    }

    handleOnClick = () => {
        this.setState({
            name: "Gib",
            age: Math.floor(Math.random() * 100 + 1)
        })
    }

    handleOnHover = () => {
        this.setState({
            message: "Hi there!"
        })
    }

    handleOnChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        alert("Hi")
    }


    render() {
        return (
            <>
                <div>My name is {this.state.name}, I live in {this.state.address}, I'm {this.state.age} years olds</div>
                <p>{this.state.message}</p>
                <button onClick={this.handleOnClick}>Click me</button>
                <button onMouseOver={this.handleOnHover}>Hover me</button>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input type="text" onChange={(event) => this.handleOnChange(event)}></input>
                    <button>submmit</button>

                    <label>Your age: </label>
                    <input type="text" onChange={(event) => this.handleOnChangeAge(event)}></input>
                    <button>submmit</button>
                </form>
            </>
        );


    }
}

export default UserInform;