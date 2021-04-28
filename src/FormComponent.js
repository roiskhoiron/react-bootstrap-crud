import React from 'react'
import {Form, Button, Col, Row} from 'react-bootstrap'

const FormComponent = ({nama, deskripsi, harga, onChangeHandle, onSubmitHandle}) => {
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
          <Form onSubmit={onSubmitHandle}>
            <Form.Group controlId="nama">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={nama}
                onChange={(event) => onChangeHandle(event)}
              />
            </Form.Group>

            <Form.Group controlId="deskripsi">
              <Form.Label></Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="deskripsi"
                value={deskripsi}
                onChange={(event) => onChangeHandle(event)}
              />
            </Form.Group>

            <Form.Group controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="text"
                name="harga"
                value={harga}
                onChange={(event) => onChangeHandle(event)}
              />
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
