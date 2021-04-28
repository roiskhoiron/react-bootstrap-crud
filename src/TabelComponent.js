import React from 'react'
import {Table} from 'react-bootstrap'

const TabelComponent = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TabelComponent
