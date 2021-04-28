import React from 'react'
import {Form, Button, Col, Row} from 'react-bootstrap'

const FormComponent = () => {
  return (
    <div>
      <Row>
        <Col>
          <h4>Tambah Data</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="nama">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control type="text" name="nama" />
            </Form.Group>

            <Form.Group controlId="deskripsi">
              <Form.Label></Form.Label>
              <Form.Control as="textarea" rows={3} name="deskripsi" />
            </Form.Group>

            <Form.Group controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control type="text" name="harga" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default FormComponent
