import React,  { Component, useState,  useEffect} from "react";
import CardAddRow from "components/Cards/CardAddRow";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  //get all table from server
  const [ools, setOols] = useState([]);
  //search on table
  const [searchTerm, setSearchTerm] = useState('');

  const [open, setOpen] = useState(false);

  //insert the data from server to ools
  useEffect(() => {
    fetch('/table').then(response =>
      response.json().then(data => {
        setOols(data.tableToo);
      })
    );
  }, []);

  const handleClickOpen = () => {
  setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //filter the table by the search input
  const filterOols=(searchTerm)=> {
    return (
      ools.filter((ools)=> {
        if (searchTerm == "") {
          return ools;
        } else if (ools.ID.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  //ools.Date_Create.toString().includes(searchTerm.toString()) ||
                  ools.Kama.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  ools.Last_i.includes(searchTerm)  ||
                  ools.Birth_Date.toString().includes(searchTerm.toString()) ||
                  ools.Last_Date.toString().includes(searchTerm.toString()) ||
                  ools.ID_Family.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  ools.Op_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  ools.Aad_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  ools.Ik.includes(searchTerm) ||
                  ools.Omp.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  ools.Unit.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  ools.Comments.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  ools.Insertion_Time.includes(searchTerm)
                 ) {
          return ools;
        }
      }
    ))
  };


  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">ool Table</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped" >
                  <thead>
                    <tr>
                      <th>
                        <Button className="button-add-row" onClick={handleClickOpen}>+</Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                           <DialogContent>
                             <DialogContentText>
                               <input className="input-Dialog"
                                 type="text"
                                 placeholder="ID"
                                 onChange={(event) => {
                                   setSearchTerm(event.target.value);
                                 }}
                                />
                                <input className="input-Dialog"
                                  type="text"
                                  placeholder="Date Create"
                                  onChange={(event) => {
                                    setSearchTerm(event.target.value);
                                  }}
                                 />
                                 <input className="input-Dialog"
                                   type="text"
                                   placeholder="Kama"
                                   onChange={(event) => {
                                     setSearchTerm(event.target.value);
                                   }}
                                  />
                                  <input className="input-Dialog"
                                    type="text"
                                    placeholder="Last i"
                                    onChange={(event) => {
                                      setSearchTerm(event.target.value);
                                    }}
                                   />
                                   <input className="input-Dialog"
                                     type="text"
                                     placeholder="Birth Date"
                                     onChange={(event) => {
                                       setSearchTerm(event.target.value);
                                     }}
                                    />
                                    <input className="input-Dialog"
                                      type="text"
                                      placeholder="Last Date"
                                      onChange={(event) => {
                                        setSearchTerm(event.target.value);
                                      }}
                                     />
                                     <input className="input-Dialog"
                                       type="text"
                                       placeholder="ID Family"
                                       onChange={(event) => {
                                         setSearchTerm(event.target.value);
                                       }}
                                      />
                                      <input className="input-Dialog"
                                        type="text"
                                        placeholder="Op Nam"
                                        onChange={(event) => {
                                          setSearchTerm(event.target.value);
                                        }}
                                       />
                                       <input className="input-Dialog"
                                         type="text"
                                         placeholder="Aad Name"
                                         onChange={(event) => {
                                           setSearchTerm(event.target.value);
                                         }}
                                        />
                                        <input className="input-Dialog"
                                          type="text"
                                          placeholder="Ik"
                                          onChange={(event) => {
                                            setSearchTerm(event.target.value);
                                          }}
                                         />
                                         <input className="input-Dialog"
                                           type="text"
                                           placeholder="Omp"
                                           onChange={(event) => {
                                             setSearchTerm(event.target.value);
                                           }}
                                          />
                                          <input className="input-Dialog"
                                            type="text"
                                            placeholder="Unit"
                                            onChange={(event) => {
                                              setSearchTerm(event.target.value);
                                            }}
                                           />
                                           <input className="input-Dialog"
                                             type="text"
                                             placeholder="Comments"
                                             onChange={(event) => {
                                               setSearchTerm(event.target.value);
                                             }}
                                            />
                                            <input className="input-Dialog"
                                              type="text"
                                              placeholder="Insertion Time"
                                              onChange={(event) => {
                                                setSearchTerm(event.target.value);
                                              }}
                                             />
                                             <input className="input-Dialog"
                                               type="text"
                                               placeholder="Dashboreds"
                                               onChange={(event) => {
                                                 setSearchTerm(event.target.value);
                                               }}
                                              />
                             </DialogContentText>
                           </DialogContent>
                           <DialogActions>
                             <Button onClick={handleClose} color="primary">
                               Cancel
                             </Button>
                             <Button onClick={handleClose} color="primary">
                               Submit
                             </Button>
                           </DialogActions>
                         </Dialog>
                       </th>
                      </tr>
                      <tr>
                       <th>
                        <input className="input-container"
                          type="text"
                          placeholder="search.."
                          onChange={(event) => {
                            setSearchTerm(event.target.value);
                          }}
                      />
                      </th>
                    </tr>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Date Create</th>
                      <th className="border-0">Kama</th>
                      <th className="border-0">Last i</th>
                      <th className="border-0">Birth Date</th>
                      <th className="border-0">Last Date</th>
                      <th className="border-0">ID Family</th>
                      <th className="border-0">Op Name</th>
                      <th className="border-0">Aad Name</th>
                      <th className="border-0">Ik</th>
                      <th className="border-0">Omp</th>
                      <th className="border-0">Unit</th>
                      <th className="border-0">Comments</th>
                      <th className="border-0">Insertion Time</th>
                      <th className="border-0">Dashboreds</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterOols(searchTerm).map((ools, key) => (
                    <tr>
                      <td key="{ools.ID}">{ools.ID} </td>
                      <td key="{ools.Date_Create}">{ools.Date_Create} </td>
                      <td key="{ools.Kama}">{ools.Kama} </td>
                      <td key="{ools.Last_i}">{ools.Last_i} </td>
                      <td key="{ools.Birth_Date}">{ools.Birth_Date} </td>
                      <td key="{ools.Last_Date}">{ools.Last_Date} </td>
                      <td key="{ools.ID_Family}">{ools.ID_Family} </td>
                      <td key="{ools.Op_Name}">{ools.Op_Name} </td>
                      <td key="{ools.Aad_Name}">{ools.Aad_Name} </td>
                      <td key="{ools.Ik}">{ools.Ik}</td>
                      <td key="{ools.Omp}">{ools.Omp}</td>
                      <td key="{ools.Unit}">{ools.Unit}</td>
                      <td key="{ools.Comments}">{ools.Comments}</td>
                      <td key="{ools.Insertion_Time}">{ools.Insertion_Time}</td>
                    </tr>
                  ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
