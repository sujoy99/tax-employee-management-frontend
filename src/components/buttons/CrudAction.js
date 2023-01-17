import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faEye, faTrashAlt, faPercent,faCircleInfo} from "@fortawesome/free-solid-svg-icons";

import {Nav} from "react-bootstrap";

const CrudAction = (props) => {
    const {onShowClick, onEditClick, onDeleteClick, checkButton, onSalaryTaxClick, onStatusChangeClick} = props;
    return (
        <article>
            <Nav fill className="flex-column flex-sm-row">
                {onShowClick !== undefined &&
                    <Nav.Item onClick={onShowClick} className="m-1 mr-3">
                        <FontAwesomeIcon
                            icon={faEye}
                            className=" text-success"
                            title="View Details"
                        />
                    </Nav.Item>
                }
                {onEditClick !== undefined &&
                    <Nav.Item onClick={onEditClick} className="m-1 mr-3">
                        {checkButton === undefined && (
                            <FontAwesomeIcon
                                icon={faEdit}
                                className=" text-info"
                                title="Edit"
                            />
                        )}
                    </Nav.Item>
                }

                {onStatusChangeClick !== undefined &&
                    <Nav.Item onClick={onStatusChangeClick} className="m-1 mr-3">
                        {checkButton === undefined && (
                            <FontAwesomeIcon
                                icon={faCircleInfo}
                                className=" text-info"
                                title="Change Status"
                            />
                        )}
                    </Nav.Item>
                }
                

                {/* {onDeleteClick !== undefined &&
                    <Nav.Item onClick={onDeleteClick} className="m-1 mr-3">
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                            className=" text-danger"
                            title="Remove"
                        />
                    </Nav.Item>
                } */}
                {onSalaryTaxClick !== undefined &&
                    <Nav.Item onClick={onSalaryTaxClick} className="m-1 mr-3">
                    <FontAwesomeIcon
                        icon={faPercent}
                        className=" text-danger"
                        title="Tax Calculation"
                    />
                </Nav.Item>
                }
            </Nav>
        </article>
    );
};
export default CrudAction;
