import React from "react";
import UserInform from "./UserInform";
import DisplayInfor from "./DisplayInfor";

class MyComponents extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Brian", age: 23 },
            { id: 2, name: "Gib", age: 28 },
            { id: 3, name: "Tran", age: 15 },
        ]
    }

    render() {
        return (
            <>
                <UserInform></UserInform>
                <br></br>
                <DisplayInfor listUsers={this.state.listUsers} />
            </>
        );
    }
}

export default MyComponents