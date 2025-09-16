import React, { useEffect, useState } from "react";

const AddUserInform = (props) => {

    const [name, setName] = useState("Brian");
    const [address, setAddress] = useState("Sydney");
    const [message, setMessage] = useState("");
    const [age, setAge] = useState(18);

    const handleOnClick = () => {
        setName("Gib");
        setAge(Math.floor(Math.random() * 100 + 1))
    }

    const handleOnHover = () => {
        setMessage("Hi there!")
    }

    const handleOnChange = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        props.handleAddUser({
            id: Math.floor(Math.random() * 100 + 1) + " -random",
            name: name,
            age: age
        })
    }
    return (
        <>
            <div>My name is {name}, I live in {address}, I'm {age} years olds</div>
            <p>{message}</p>
            <button onClick={() => handleOnClick()}>Click me</button>
            <button onMouseOver={() => handleOnHover()}>Hover me</button>

            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name: </label>
                <input type="text" onChange={(event) => handleOnChange(event)}></input>

                <label>Your age: </label>
                <input type="text" onChange={(event) => handleOnChangeAge(event)}></input>
                <button>submmit</button>
            </form>
        </>
    );
}

export default AddUserInform;