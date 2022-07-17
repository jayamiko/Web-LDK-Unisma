import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = ({dataRow}) => {

  const data = {
    columns: [
      {
        label: 'No',
        field: 'index',
        sort: 'asc',
        width: 300
      },
      {
        label: 'Nama Lengkap',
        field: 'fullName',
        sort: 'asc',
        width: 800
      },
      {
        label: 'Usia',
        field: 'age',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Angakatan Tahun',
        field: 'angkatan',
        sort: 'asc',
        width: 800
      },
      {
        label: 'Fakultas/Jurusan',
        field: 'fakultas',
        sort: 'asc',
        width: 800
      },
      {
        label: 'Tanggal',
        field: 'timestamp',
        sort: 'asc',
        width: 500
      },
    ],
    rows: dataRow
};

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;