import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import { useState } from 'react';
import TableUser from "./TableUser";
import { useEffect } from 'react';
import { getAllUsers } from '../../../service/apiService';
import ModalUpdateUser from "./ModalUpdateUser";
const ManageUser = (props) => {

    const [showModalCreateUser, setShoModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [listUsers, setListUsers] = useState([])
    const [dataUpdate, setDataUpdate] = useState({})

    useEffect(() => {
        fetchListUsers()
    }, [])

    const fetchListUsers = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUsers(res.DT)
        }

    }

    const hanldeClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                ManageUser
            </div>

            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary"
                        onClick={() => setShoModalCreateUser(true)}>
                        <FcPlus />Add new users
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser listUsers={listUsers} hanldeClickBtnUpdate={hanldeClickBtnUpdate} />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShoModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />

                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                />
            </div>
        </div>
    )
}

export default ManageUser