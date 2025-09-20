import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaRegClock } from 'react-icons/fa';
import { FcPlus } from "react-icons/fc";
import axios from 'axios';
const ModalCreateUser = (props) => {
    const { show, setShow } = props

    const handleClose = () => {
        setShow(false)
        setEmail("");
        setPassword("");
        setName("");
        setRole("USER");
        setImage("");
        setPreviewImage("");
    };
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const handleUploadImage = (event) => {
        setImage(event.target.files[0]);
        setPreviewImage(URL.createObjectURL(event.target.files[0]))
    }

    const handleSubmitCreateUser = async () => {

        const data = new FormData();
        data.append("email", email)
        data.append("password", password)
        data.append("username", name)
        data.append("role", role)
        data.append("userImage", image)

        let res = await axios.post("http://localhost:8081/api/v1/participant", data);
    }

    return (
        <>
            <Modal size="xl" show={show} onHide={handleClose} backdrop="static" className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email}
                                onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password}
                                onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">User name</label>
                            <input type="text" className="form-control" value={name}
                                onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" value={role} onChange={(event) => setRole(event.target.value)}>
                                <option value={'USER'}>USER</option>
                                <option value={"ADMIN"}>ADMIN</option>
                            </select>
                        </div>

                        <div className='col-md-12'>
                            <label className='form-label label-upload' htmlFor='labelUpload'>
                                <FcPlus />Upload File Image
                            </label>
                            <input type='file'
                                hidden id='labelUpload' onChange={(event) => handleUploadImage(event)} />
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
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser