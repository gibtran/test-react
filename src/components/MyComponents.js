import React, { useState } from "react";
import AddUserInform from "./AddUserInform";
import DisplayInfor from "./DisplayInfor";



const MyComponents = () => {

    const [listUsers, setListUsers] = useState([
        { id: 1, name: "Brian", age: "23" },
        { id: 2, name: "Gib", age: "28" },
        { id: 3, name: "Tran", age: "15" },])

    const handleAddUser = (user) => {
        setListUsers([user, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers]
        let newList = listUsersClone.filter((user) => user.id !== userId)

        setListUsers(newList)
    }
    return (
        <>
            <AddUserInform handleAddUser={handleAddUser}></AddUserInform>
            <br></br>
            <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
        </>
    );
}

export default MyComponents