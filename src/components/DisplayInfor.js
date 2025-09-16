import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'

const DisplayInfor = (props) => {
    const { listUsers } = props
    const [isShowUser, setShowUser] = useState(true)

    const handleShowHideUser = () => {
        setShowUser(!isShowUser)
    }

    useEffect(() => {
        if (listUsers.length === 0) {
            alert("Delete All Users")
        }
        console.log("ComponentDidMount");

    }, [listUsers])

    return (
        <div className="display-container">
            <span onClick={() => handleShowHideUser()}>
                {isShowUser === true ? "Hide list users" : "Show list users"}
            </span>
            {isShowUser &&
                <>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                </div>

                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>

                                <hr></hr>
                            </div>
                        );
                    })}
                </>
            }
        </div>
    );
}

export default DisplayInfor