import { React }  from "react";
import { Modal, Button, Form} from "react-bootstrap";
import '../assets/css/tambahBuildingData.css'
import Swal from 'sweetalert2'
import { useMutation } from 'react-query'

function ModalTambahBuildingData({show, onHide}) {
    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();
            Swal.fire({
                icon: 'error',
                title: 'Cooming Soon',
                text: 'Tidak Memiliki Akses',
            })
            onHide()
        } catch (error) { 
            console.log('error', error)
        }
    });
    
    return (
        <Modal show={show} onHide={onHide} backdrop="static" keyboard={false} className="containerTambahBuildingData">
        <Modal.Header className="headerModalNewBuildingData" closeButton>
          <Modal.Title >Building Data Baru</Modal.Title>
        </Modal.Header>
        <Form className="formModalNewBuildingData" onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Group className="mb-3" >
                <Form.Label className="labelModalNewBuildingData">Nama Gedung</Form.Label>
                <Form.Control className="controlModalNewBuildingData" name="namaGedung" type="text" placeholder="contoh: Puri Indah Financial Tower" required/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label className="labelModalNewBuildingData">Max Kapasitas</Form.Label>
                <Form.Control className="controlModalNewBuildingData" name="maxKapasitas" type="text" placeholder="contoh: 350" required/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label className="labelModalNewBuildingData">No. Handphone</Form.Label>
                <Form.Control className="controlModalNewBuildingData" name="noHandphone" type="text" placeholder="contoh: 021-7350491" required/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label className="labelModalNewBuildingData">waktu Kunjungan</Form.Label>
                <Form.Control className="controlModalNewBuildingData" name="waktuBukaKunjungan" type="time" required/>
                <div>sampai dengan</div>
                <Form.Control className="controlModalNewBuildingData" name="waktuTutupKunjungan" type="time" required/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label className="labelModalNewBuildingData">Alamat</Form.Label>
                <Form.Control className="controlModalNewBuildingData" name="Alamat" type="text" placeholder="contoh: Jl.Puri Lkr. Dalam, Kembangan,DKI Jakarta" required/>
            </Form.Group>

            <Modal.Footer>
                <Button variant="primary" type="submit" className="buttonModalNewBuildingData">Tambah Building Data</Button>
            </Modal.Footer>
        </Form> 
      </Modal>
    )
}

   
  export default ModalTambahBuildingData
