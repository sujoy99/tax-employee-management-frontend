
import { Button , Modal} from "react-bootstrap";
// import SalaryTypeAdd from '../../views/salary_type/SalaryTypeAdd'
import { ToastContainer, toast } from "react-toastify";

const ModalStatus = (props) =>{
    console.log("Modal Form", props);
    const {show, handleModalClose, form, children,statusType,changeStatus,salaryTypeId,  ...rest} = props; 
    return (
        <div>
        <Modal show={show} onHide={handleModalClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>
                    Current Status: {statusType ? "ACTIVE" : "INACTIVE"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p >
            Do You want to Change the Current Status of the Salary Type to  {!statusType ? "ACTIVE" : "INACTIVE"}
            </p>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger"  onClick={handleModalClose}>
                    No
                </Button>
                <Button variant="outline-success" onClick={changeStatus}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
        
        </div>
    )

}
export default ModalStatus;