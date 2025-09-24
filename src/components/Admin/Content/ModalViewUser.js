import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaRegClock } from 'react-icons/fa';
import { FcPlus } from "react-icons/fc";
import axios from 'axios';
import { toast } from 'react-toastify';
import { postCreateNewUser } from '../../../service/apiService';
import _ from 'lodash';
const ModalViewUser = (props) => {
    const { show, setShow, dataUpdate } = props

    const handleClose = () => {
        setShow(false)
        setEmail("");
        setPassword("");
        setName("");
        setRole("USER");
        setImage("");
        setPreviewImage("");
        props.resetDataUpdate()
    };
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            setEmail(dataUpdate.email)
            setName(dataUpdate.username)
            setRole(dataUpdate.role)
            setImage(dataUpdate.image)
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
            }
        }
    }, [dataUpdate])


    return (
        <>
            <Modal size="xl" show={show} onHide={handleClose} backdrop="static" className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>View User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email}
                                onChange={(event) => setEmail(event.target.value)} disabled />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password}
                                onChange={(event) => setPassword(event.target.value)} disabled />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">User name</label>
                            <input type="text" className="form-control" value={name}
                                onChange={(event) => setName(event.target.value)} disabled />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" value={role} onChange={(event) => setRole(event.target.value)} disabled>
                                <option value={'USER'}>USER</option>
                                <option value={"ADMIN"}>ADMIN</option>
                            </select>
                        </div>


                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage}></img>
                                :
                                <span>Preview Image</span>
                            }
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalViewUser