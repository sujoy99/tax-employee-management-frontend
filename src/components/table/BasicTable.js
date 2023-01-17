import * as React from "react";
import { useState } from 'react';
import { Button, Card, Col, InputGroup, Nav, Row, Table, } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
// import Pagination from "react-js-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Pagination from '../pagination/Pagination';
import { redirect, useParams, useNavigate } from 'react-router-dom';
const BasicTable = (props) => {
    const {
        headers,
        perPage,
        onSearchChange,
        onSizeChange,
        meta,
        onPageChange,
        totalData,
        // onSearch,
        onChangeSearchValue,
        children,
        setCurrentPage
    } = props;

    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate();
    return (
        <>
            <Card border="white" className="table-wrapper ">
                <Card.Body>
                    <div className="table-settings d-block mb-15">
                        <Row className="justify-content-between align-items-center">
                            {/* IF need to use table without search and pagination */}
                            {perPage ? (
                                <>
                                    <Col xs={8} md={6} lg={6} xl={4}>
                                        {/* <Form> */}
                                            <InputGroup>
                                                <InputGroup.Text>
                                                    <FontAwesomeIcon icon={faSearch} />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    as="input"
                                                    type="text"
                                                    placeholder="Search"
                                                    onChange={(e) => setSearchValue(e.target.value)}                                             
                                                    value={searchValue}
                                                    
                                                    />
                                                <Button className="btn btn-primary"
                                                onClick={() => {
                                                    onChangeSearchValue(searchValue)
                                                }}
                                                >Search</Button>
                                            </InputGroup>
                                        {/* </Form> */}
                                    </Col>

                                    <Col xs={4} md={4} lg={2} xl={2} className="ps-md-0 text-end">
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Control as="select"
                                                onChange={
                                                    (e) => 
                                                    onSizeChange(e.target.value)

                                                }
                                                >
                                                    <option defaultValue>Show</option>
                                                    {perPage.map((size, index) => (
                                                        <option value={size} key={index}>
                                                            {size}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </>
                            ) : (
                                    ""
                                )}
                        </Row>
                    </div>

                    <div className="table-responsive">
                        <Table striped hover className="user-table align-items-center ">
                            <thead>
                                <tr>
                                    {headers.map((header, headerIndex) => {
                                        if (header.width !== undefined) {
                                            return (
                                                <th
                                                    key={headerIndex}
                                                    className="border-bottom text-center"
                                                    style={{ width: header.width }}
                                                >
                                                    {header.label}
                                                </th>
                                            );
                                        } else {
                                            return (
                                                <th key={headerIndex} className="border-bottom">
                                                    {header.label}
                                                </th>
                                            );
                                        }
                                    })}
                                </tr>
                            </thead>
                            <tbody style={{ minHeight: "800px !important" }}>
                                {children}
                            </tbody>
                        </Table>
                    </div>
                    {/* IF need to use table without meta data and pagination */}
                    {meta ? (
                        // <Card.Footer className="px-0 border-0 d-lg-flex align-items-center justify-content-between pb-0">
                        //     <Nav>
                        //         <Pagination
                        //             innerClass="pagination"
                        //             itemClass="page-item"
                        //             linkClass="page-link"
                        //             activePage={meta.currentPage}
                        //             itemsCountPerPage={meta.size}
                        //             totalItemsCount={meta.total}
                        //             pageRangeDisplayed={10}
                        //             onChange={(page) => onPageChange(page)}
                        //         />
                        //     </Nav>
                        //     <small className="fw-bold">
                        //         Showing <b>{meta.size > meta.total ? meta.total : totalData >= meta.size ? (totalData * meta.currentPage) : (meta.size * meta.currentPage - (meta.size - totalData))}</b>{" "}
                        //         out of <b>{meta.total}</b> entries
                        //     </small>
                        // </Card.Footer>
                        <Card.Footer>
                            <Pagination meta={meta} setCurrentPage={setCurrentPage} />
                        </Card.Footer>
                    ) : (
                            ""
                        )}
                </Card.Body>
            </Card>
        </>
    )
};
export default BasicTable;