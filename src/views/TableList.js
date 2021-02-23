import React,  { Component, useState,  useEffect} from "react";

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
  const [searchTerm, setSearchTerm] = useState('');

  const [filteredOols, setFilteredOols] = useState([]);

  useEffect(() => {
    fetch('/table').then(response =>
      response.json().then(data => {
        setOols(data.tableToo);
      })
    );
  }, []);

    const filterOols=(searchTerm)=> {
      return (
        ools.filter((ools)=> {
          if (searchTerm == "") {
            return ools;
          } else if (ools.ID.toLowerCase().includes(searchTerm.toLowerCase())) {
            return ools;
          }
      }
    ))
  }

  //useEffect(() => {
    //console.log(search);
    //setFilteredOols(
      //ools.filter (ools => {
      //  return ools.ID.toLowerCase().includes(search.toLowerCase())
    //})
  //)
//}, [search, ools])


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
                        <input
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
                      <td key="{ools.ID}">{ools.ID}</td>
                      <td key="{ools.Date_Create}">{ools.Date_Create}</td>
                      <td key="{ools.Kama}">{ools.Kama}</td>
                      <td key="{ools.Last_i}">{ools.Last_i}</td>
                      <td key="{ools.Birth_Date}">{ools.Birth_Date}</td>
                      <td key="{ools.Last_Date}">{ools.Last_Date}</td>
                      <td key="{ools.ID_Family}">{ools.ID_Family}</td>
                      <td key="{ools.Op_Name}">{ools.Op_Name}</td>
                      <td key="{ools.Aad_Name}">{ools.Aad_Name}</td>
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
