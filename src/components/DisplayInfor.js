import React from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'

class DisplayInfor extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isShow: true,
        }
    }

    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    componentDidMount = () => {
        setTimeout(() => {
            document.title = "Brian learn IT"
        }, 3000)
    }


    componentDidUpdate = (prevProps, prevState, snapShot) => {
        console.log(this.props, prevProps);
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert("5 users")
            }
        }
    }

    render() {
        const { listUsers } = this.props
        return (
            <div className="display-container">
                {/* <img src={logo} /> */}
                <span onClick={() => this.handleShowHide()}>
                    {this.state.isShow === true ? "Hide list users" : "Show list users"}
                </span>

                {this.state.isShow &&
                    <>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                    </div>

                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
}

export default DisplayInfor