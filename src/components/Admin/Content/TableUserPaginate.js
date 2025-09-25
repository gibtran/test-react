import ReactPaginate from "react-paginate";
import { useEffect, useState } from 'react';


const TableUserPaginate = (props) => {

    const { listUsers, fetchListUsersWithPaginate, pageCount, currentPage, setCurrentPage } = props


    const handlePageClick = (event) => {
        // console.log(`User requested page number ${currentPage}`);
        // setCurrentPage()
        setCurrentPage(+event.selected + 1)
    };

    useEffect(() => {
        fetchListUsersWithPaginate(currentPage);
    }, [currentPage]);

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
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
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button className='btn btn-secondary ' onClick={() => props.handleClickBtnView(user)}>View</button>
                                        <button className='btn btn-warning mx-3' onClick={() => props.hanldeClickBtnUpdate(user)}>Update</button>
                                        <button className='btn btn-danger ' onClick={() => props.handleClickBtnDelete(user)}>Delete</button>

                                    </td>
                                </tr>
                            )
                        }) :
                        <tr>
                            <td colSpan={'4'}>Not Found Data</td>
                        </tr>}
                </tbody>
            </table>

            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination justify-content-center"
                activeClassName="active"
                renderOnZeroPageCount={null}
                forcePage={currentPage - 1}
            />

        </>
    )
}

export default TableUserPaginate