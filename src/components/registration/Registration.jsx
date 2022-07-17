import React, {useState, useRef, useEffect} from 'react';
import Papa from 'papaparse';
import { DataGrid } from '@mui/x-data-grid';

const scriptURL = 'https://script.google.com/macros/s/AKfycbxBND5Bi5PYyIYkqwU-bnjaOhIe2EfG79qs1aVsryR8_MGOy-8h1_IyFYyJ1spb0EXD/exec'
const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vQak6neQTX9aNzNmi7hBJnzSRkKsFlvOQeg2TISgnZiW3n5C4LvMjZjj9WSYVFI7HIsSPMY3Ej1JkeW/pub?gid=0&single=true&output=csv`

function RegistrationPage() {

  const formRef = useRef(null)
  const [dataCSV, setDataCSV] = useState([])
  const [personalMember, setPersonalMember] = useState([{
    fullName: '',
    email: '',
    age: '',
    whatsapp: '',
    fakultas: 'FAI',
    study: '',
    reason: '',
  }])


  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalMember({
      ...personalMember,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(formRef.current)})
      .then(response => {
        console.log("Successfully")
        setPersonalMember({
          fullName: '',
          email: '',
          age: '',
          whatsapp: '',
          fakultas: 'FAI',
          study: '',
          reason: '',
        })
      })
      .catch(error => {
        console.error('Error!', error.message)
      })
  }

  useEffect(()=> {
    Papa.parse(url, {
      download:true,
      header:true,
      complete: (result) => {
        setDataCSV(result.data)
        return 0;
      },
      error: (err) => {
        console.log(err);
        return err;
      },
    })
  }, [personalMember, url, formRef]);

  console.log(dataCSV)

  const columns = [
    { field: 'id', headerName: 'No', width: 80 },
    { field: 'fullName', headerName: 'Full Name', width: 300 },
    { field: 'usia', headerName: 'Usia', width: 80 },
    {
      field: 'fakultas',
      headerName: 'Fakultas/Jurusan',
      width: 280,
    },
    {
      field: 'angkatan',
      headerName: 'Angkatan',
      width: 100,
    },
    {
      field: 'timestamp',
      headerName: 'Tanggal Masuk',
      width: 150,
      // valueGetter: (params) =>
      //   `${params.row.fullName || ''} ${params.row.fakultas || ''}`,
    },
  ];

  const dataRow = dataCSV.map((item, index)=> (
        {
            ...item,
            id: index + 1,
            age: item.usia,
            fakultas : `${item.fakultas} / ${item.jurusan}`
        }
    ))
  
  return (
    <>
      <div className="container mx-auto mb-2 text-white px-6 py-8 md:p-0">
        <h2 className='font-titan text-2xl mb-1 tracking-wide'>Bergabung Bersama Kami!</h2>
        <form name="submit-to-google-sheet" className='sm:w-2/3 md:w-3/6 lg:w-2/5 xl:w-2/6 space-y-1' method="post" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Nama Lengkap</label>
            <input type="text" className="form-control" value={personalMember.fullName} id="fullName" name="fullName" placeholder="Nama Lengkap" onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Alamat Email</label>
            <input type="email" className="form-control" value={personalMember.email} id="email" name="email" placeholder="Enter email" onChange={handleChange}/>
          </div>
          <div className="form-group flex justify-between">
            <div className='w-2/5'>
              <label htmlFor="usia">Usia</label>
              <input type="text" className="form-control" value={personalMember.age} id="usia" name="usia" placeholder="cth : 19" onChange={handleChange}/>
            </div>
            <div className='w-3/6'>
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="text" className="form-control" value={personalMember.whatsapp} id="whatsapp" name="whatsapp" placeholder="+62 / 08" onChange={handleChange}/>
            </div>
          </div>
          <div>
            <label htmlFor="fakultas">Fakultas</label>
            <div className='flex space-x-3'>
              <div>
                <input type="radio" id="fakultas" name="fakultas" value="FAI" onChange={handleChange} checked/>
                <label className="ml-1" htmlFor="FAI">FAI</label>
              </div>
              <div>
                <input type="radio" id="fakultas" name="fakultas" value="FISIP" onChange={handleChange}/>
                <label className="ml-1" htmlFor="FISIP">FISIP</label>
              </div>
              <div>
                <input type="radio" id="fakultas" name="fakultas" value="FKIP" onChange={handleChange}/>
                <label className="ml-1" htmlFor="FKIP">FKIP</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="angkatan">Angkatan</label>
            <input type="text" className="form-control" value={personalMember.study} id="angkatan" name="angkatan" placeholder="cth: 2019" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="jurusan">Jurusan</label>
            <input type="text" className="form-control" value={personalMember.study} id="jurusan" name="jurusan" placeholder="Jurusan" onChange={handleChange} />
          </div>
          <button type="submit" className="btn bg-[#1eb2a6] my-2 text-white px-5 uppercase">Submit</button>
        </form>

        <div className='mt-32' style={{ height: 630, width: '100%' }}>
          <DataGrid
            rows={dataRow}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;