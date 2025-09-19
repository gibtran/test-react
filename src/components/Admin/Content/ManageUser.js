import ModalCreateUser from "./ModalCreateUser"



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
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}

export default ManageUser