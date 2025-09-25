import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import { useState } from 'react';
import TableUser from "./TableUser";
import { useEffect } from 'react';
import { getAllUsers, getListUserWithPaginate } from '../../../service/apiService';
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
const ManageUser = (props) => {
    const LIMIT_USER = 3;
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const [showModalCreateUser, setShoModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showViewUser, setShowViewUser] = useState(false)
    const [showDeleteUser, setShowDeleteUser] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});

    useEffect(() => {
        fetchListUsersWithPaginate(1)
    }, [])

    const fetchListUsers = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const fetchListUsersWithPaginate = async (page) => {
        let res = await getListUserWithPaginate(page, LIMIT_USER)

        if (res.EC === 0) {
            setListUsers(res.DT.users)
            setPageCount(res.DT.totalPages)
        }

    }

    const hanldeClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }

    const handleClickBtnDelete = (user) => {
        setShowDeleteUser(true);
        setDataDelete(user)

    }

    const handleClickBtnView = (user) => {
        setShowViewUser(true);
        setDataUpdate(user)
    }

    const resetDataUpdate = () => {
        setDataUpdate({})
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
                    {/* <TableUser
                        listUsers={listUsers}
                        hanldeClickBtnUpdate={hanldeClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}

                    <TableUserPaginate
                        listUsers={listUsers}
                        hanldeClickBtnUpdate={hanldeClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShoModalCreateUser}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetDataUpdate={resetDataUpdate}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <ModalViewUser
                    show={showViewUser}
                    setShow={setShowViewUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetDataUpdate={resetDataUpdate}
                />

                <ModalDeleteUser
                    show={showDeleteUser}
                    setShow={setShowDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default ManageUser