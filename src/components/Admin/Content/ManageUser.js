import ModalCreateUser from "./ModalCreateUser"
import './ModalCreateUser.scss'

const ManageUser = (props) => {
    return (
        <div>
            <div className="title">
                ManageUser
            </div>

            <div className="users-content">
                <div>
                    <button>Add new users</button>
                </div>
                <div>
                    table users

                </div>
                <ModalCreateUser />
            </div>
        </div>
    )
}

export default ManageUser