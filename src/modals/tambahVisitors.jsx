import { React }  from "react";
import { Modal, Button, Form} from "react-bootstrap";
import '../assets/css/tambahVisitors.css'
import Swal from 'sweetalert2'
import { useMutation } from 'react-query'

function ModalTambahVisitors({show, onHide}) {
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
        <Modal show={show} onHide={onHide} backdrop="static" keyboard={false} className="containerTambahVisitors">
        <Modal.Header className="headerModalNewVisitors" closeButton>
          <Modal.Title >Visitors Baru</Modal.Title>
        </Modal.Header>
        <Form className="formModalNewVisitors" onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Group className="mb-3" >
                <Form.Label className="labelModalNewVisitors">No. ktp</Form.Label>
                <Form.Control className="controlModalNewVisitors" name="noKtpVisitors" type="text" placeholder="contoh: 3290821202898809" required/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label className="labelModalNewVisitors">Nama Visitors</Form.Label>
                <Form.Control className="controlModalNewVisitors" name="namaVisitors" type="text" placeholder="contoh: Iqbal Willy" required/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label className="labelModalNewVisitors">Tanggal Lahir</Form.Label>
                <Form.Control className="controlModalNewVisitors" name="tanggalLahir" type="date" required/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label className="labelModalNewVisitors">No Handphone</Form.Label>
                <Form.Control className="controlModalNewVisitors" name="noHandphone" type="text" placeholder="contoh: 086688903647" required/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label className="labelModalNewVisitors">Nama Gedung</Form.Label>
                <Form.Control className="controlModalNewVisitors" name="namaGedung" type="text" placeholder="contoh: Puri Indah Mall" required/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label className="labelModalNewVisitors">Suhu</Form.Label>
                <Form.Control className="controlModalNewVisitors" name="suhu" type="text" placeholder="contoh: Puri Indah Mall" required/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label className="labelModalNewVisitors">Jam Masuk</Form.Label>
                <Form.Control className="controlModalNewVisitors" name="jamMasuk" type="time" placeholder="contoh: Puri Indah Mall" required/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label className="labelModalNewVisitors">Jam Keluar</Form.Label>
                <Form.Control className="controlModalNewVisitors" name="jamKeluar" type="time" placeholder="contoh: Puri Indah Mall" required/>
            </Form.Group>

            <Modal.Footer>
                <Button variant="primary" type="submit" className="buttonModalNewVisitors">Tambah Visitors</Button>
            </Modal.Footer>
        </Form> 
      </Modal>
    )
}

   
  export default ModalTambahVisitors
