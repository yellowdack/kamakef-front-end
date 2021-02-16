import React,  {useState,  useEffect} from "react";
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

  const [initData, setInitData] = useState({});
  useEffect(() => {
    fetch('/table').then(response =>
      response.json().then(data => {setInitData(data)
      })
    );
  }, []);
  console.log(initData);

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
                <Table className="table-hover table-striped">
                  <thead>
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
                      <th className="border-0">Inserion Time</th>
                        <th className="border-0">Dashboreds</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>19/10/2020</td>
                      <td>Dakota Rice</td>
                      <td>sdfdsfdsf</td>
                      <td>19/10/2020</td>
                      <td>19/10/2020</td>
                      <td>Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td>19/10/2020</td>
                      <td>Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td>19/10/2020</td>
                      <td>Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td>19/10/2020</td>
                      <td>Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td>19/10/2020</td>
                      <td>Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td>19/10/2020</td>
                      <td>Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                      <td>hjkdsb</td>
                    </tr>
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
