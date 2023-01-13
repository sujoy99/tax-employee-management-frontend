
import { Button , Modal} from "react-bootstrap";
// import SalaryTypeAdd from '../../views/salary_type/SalaryTypeAdd'
import { ToastContainer, toast } from "react-toastify";

const ModalForm = (props) =>{
    console.log("Modal Form", props);
    const {show, handleClose, form,  ...rest} = props; 
    return (
        <div>
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Add Salary Type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {form}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        
        </div>
    )

}
export default ModalForm;