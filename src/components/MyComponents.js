import React from "react";
import AddUserInform from "./AddUserInform";
import DisplayInfor from "./DisplayInfor";


class MyComponents extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Brian", age: "23" },
            { id: 2, name: "Gib", age: "28" },
            { id: 3, name: "Tran", age: "15" },
        ]
    }

    handleAddUser = (user) => {
        this.setState({
            listUsers: [user, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = [...this.state.listUsers]
        let newList = listUsersClone.filter((user) => user.id !== userId)

        this.setState({
            listUsers: newList
        })
    }

    render() {
        return (
            <>
                <AddUserInform handleAddUser={this.handleAddUser}></AddUserInform>
                <br></br>
                <DisplayInfor listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser} />
            </>
        );
    }
}

export default MyComponents