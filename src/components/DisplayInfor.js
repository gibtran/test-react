import React from "react";
import './DisplayInfor.scss'

class DisplayInfor extends React.Component {

    state = {
        isShow: true,
    }

    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        const { listUsers } = this.props
        return (
            <div className="display-container">
                <span onClick={() => this.handleShowHide()}>
                    {this.state.isShow === true ? "Hide list users" : "Show list users"}
                </span>

                {this.state.isShow &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <hr></hr>
                                </div>
                            );
                        })}
                    </div>
                }
            </div>
        );
    }
}

export default DisplayInfor