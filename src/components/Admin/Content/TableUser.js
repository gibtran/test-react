import { useEffect, useState } from 'react';
import { getAllUsers } from '../../../service/apiService';

const TableUser = () => {

    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        fetchListUsers()
    }, [])

    const fetchListUsers = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUsers(res.DT)
        }

    }
    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 ?
                        listUsers.map((user, index) => {
                            return (
                                <tr key={`table-users-${index}  `}>
                                    <td>{index + 1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                </tr>
                            )
                        }) :
                        <tr>
                            <td colSpan={'4'}>Not Found Data</td>
                        </tr>}
                </tbody>
            </table>
        </>
    )
}

export default TableUser