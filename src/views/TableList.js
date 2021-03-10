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
  //open dialog
  const [open, setOpen] = useState(false);
  //value Row
  const values ={"ID": "", "DateCreate": "", "Kama": "", "LastI": "", "BirthDate": "", "LastDate": "", "IDFamily": "", "OpName": "", "AadName": "", "Ik": "", "Omp": "", "Unit": "", "Comments": "", "InsertionTime": "", "Dashboreds": ""};
  //
  const ColumsName = {"ID": "ID", "DateCreate": "Date Create", "Kama": "Kama", "LastI": "Last i", "BirthDate": "Birth Date", "LastDate": "Last Date", "IDFamily": "ID Family", "OpName": "Op Name", "AadName": "Aad Name", "Ik": "Ik", "Omp": "Omp", "Unit": "Unit", "Comments": "Comments", "InsertionTime": "Insertion Time", "Dashboreds": "Dashboreds"};


  //insert the data from server to ools
  useEffect(() => {
    fetch('/table').then(response =>
      response.json().then(data => {
        setOols(data.tableToo);
      })
    );
  }, []);

  //create jason to the new row to add the server
  const handleInputChange = (event) => {
    const name = event.target.name;
    values[name] = event.target.value;
  };

  // + button open the dialog windows
  const handleClickOpen = () => {
    setOpen(true);
  };
  // cancel button close the dialog windows
  const handleClose = () => {
    setOpen(false);
  };

  //submit buttom close the Dialog windows AND send the data to the server
  const handleSubmit = () => {
    setOpen(false);
    //need do send the server the data
    console.log(Object.values(values));
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
              <i className="nc-icon nc-zoom-split nc-search"></i>
              <input className="input-container"
                type="text"
                placeholder="Search"
                  onChange={(event) => {
                setSearchTerm(event.target.value);
                }}
              />
              <Button className="button-add-row" onClick={handleClickOpen}>+</Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New ool</DialogTitle>
                 <DialogContent>
                   <DialogContentText>
                     {Object.keys(ColumsName).map(colName   => (
                     <form className="form-Add-Row">
                      <input className="input-Dialog"
                       name = {colName}
                       type="text"
                       placeholder={ColumsName[colName]}
                       onChange={handleInputChange}
                      />
                    </form>
                    ))}
                   </DialogContentText>
                 </DialogContent>
                 <DialogActions>
                   <Button onClick={handleClose} color="primary">
                     Cancel
                   </Button>
                   <Button onClick={handleSubmit} color="primary">
                     Submit
                   </Button>
                 </DialogActions>
               </Dialog>
                <Table className="table-hover table-striped" >
                  <thead>
                    <tr>
                    {Object.values(ColumsName).map(colName   => (
                      <th className="border-0">{colName}</th>))}
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
