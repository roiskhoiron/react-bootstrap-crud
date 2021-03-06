import React from 'react'
import {Table} from 'react-bootstrap'

const TabelComponent = ({ makanans, onClickEdit, onClickDelete }) => {
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
        {makanans.map((makanan, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.deskripsi}</td>
              <td>Rp. {makanan.harga}</td>
              <td>
                <button
                  className="btn btn-warning mr-2"
                  onClick={() => onClickEdit(makanan.id)}>
                  Edit
                </button>
              
                <button
                  className="btn btn-danger"
                  onClick={() => onClickDelete(makanan.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TabelComponent
