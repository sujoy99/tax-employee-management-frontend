import React, {useState, useEffect} from 'react'
import { Button, Card, Col, Form, InputGroup, Nav, Row, FormControl, } from "react-bootstrap";

const Pagination = (props) => {
    console.log("props", props)
    const {currentPage,pageNo, totalPages, setCurrentPage, ...rest} = props.meta;

    console.log("currentPage::", currentPage);
    console.log("total", pageNo)
    console.log("")
    
    // const [pageNo, setPageNo] = useState(0)
    // const totalPages = pageNo;

    const pageNumCss = {
        width: "45px",
        border: "1px solid #17A2B8",
        color: "#17A2B8",
        textAlign: "center",
        fontWeight: "bold"
    };

    const changePage = event => {
        event.target.value = event.target.value ? setCurrentPage(parseInt(event.target.value)) : 0;
    };

    const firstPage = () => {
        if (currentPage > 1) {
            setCurrentPage(1)
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    };

    const lastPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(totalPages)
            // setIsLoading(true)
        }
    };


    const nextPage = () => { console.log("d")
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
            // setIsLoading(true)
        }
    };

    return (
        <div className='mb-5'>
                <div style={{ "float": "left" }}>
                    Showing Page {currentPage} of {totalPages}
                </div>

                <div style={{ "float": "right" }}>

                    <InputGroup size="sm">

                        <InputGroup.Prepend>
                            <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                onClick={firstPage}
                            >
                                First
                            </Button>
                            <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                onClick={prevPage}
                            >
                                Prev
                            </Button>
                        </InputGroup.Prepend>

                        <FormControl style={pageNumCss} className={"bg-dark"} name="currentPage" value={currentPage}
                            onChange={changePage}
                        />
                        <InputGroup.Append>
                            <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                                onClick={nextPage}
                            >
                                Next
                            </Button>
                            <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                                onClick={lastPage}
                            >
                                Last
                            </Button>
                        </InputGroup.Append>

                    </InputGroup>
                </div>
        </div>
    )
}

export default Pagination
