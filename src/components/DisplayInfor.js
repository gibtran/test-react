import React from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'

const DisplayInfor = (props) => {
    const { listUsers } = props
    return (
        <div className="display-container">
            {true &&
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