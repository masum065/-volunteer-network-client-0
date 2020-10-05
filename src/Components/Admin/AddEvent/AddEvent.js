import Axios from 'axios';
import React, { useState } from 'react';
import './AddEvent.css';
import { Col, Row } from 'react-bootstrap';
import { ReactComponent as Cloudcomputing } from '../../../images/icons/cloud-computing.svg';
const AddEvent = () => {
  const [title, setTitle] = useState();
  const [file, setFile] = useState();
  const [date, setDate] = useState();
  const [description, setDecription] = useState();
  const [filefeild, setFilefeild] = useState({});
  const [postStatus, setPostStatus] = useState({
    success: '',
    error: '',
  });

  const send = (event) => {
    if (filefeild.name) {
      const data = new FormData();
      data.append('title', title);
      data.append('file', file);
      data.append('date', date);
      data.append('description', description);

      Axios.post('https://young-ridge-25037.herokuapp.com/upload', data)
        .then((res) => {
          setPostStatus({ success: 'Event Successfully Added', error: '' });
        })
        .catch((err) => {
          setPostStatus(err.message);
        });
    } else {
      setPostStatus({ success: '', error: 'Please Select an Banner Image' });
    }
  };

  return (
    <>
      <form action='#'>
        <div className='form-contaier'>
          {postStatus.error.length > 0 && (
            <p className='error'> {postStatus.error}</p>
          )}
          {postStatus.success.length > 0 && (
            <p className='success'> {postStatus.success}</p>
          )}
          <Row>
            <Col md={6} className='mb-3'>
              <label htmlFor='title'> Event Title </label>
              <input
                className='form-control'
                type='text'
                id='title'
                placeholder='Event Title'
                onChange={(event) => {
                  const { value } = event.target;
                  setTitle(value);
                }}
              />
            </Col>
            <Col md={6} className='mb-3'>
              <label htmlFor='date'> Event Date </label>
              <input
                className='form-control'
                type='date'
                id='date'
                name='date'
                onChange={(event) => {
                  const { value } = event.target;
                  setDate(value);
                }}
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} className='mb-3'>
              <label htmlFor='description'> Description </label>

              <textarea
                placeholder='Description...'
                className='form-control'
                name='description'
                id='description'
                onChange={(event) => {
                  const { value } = event.target;
                  setDecription(value);
                }}
              ></textarea>
            </Col>
            <Col md={6} className='mb-3'>
              <div className='file-field'>
                <p>{filefeild.name}</p>
                <input
                  type='file'
                  name='file'
                  id='file'
                  onChange={(event) => {
                    const file = event.target.files[0];
                    setFile(file);
                    setFilefeild(file);
                  }}
                  required
                  style={{ display: 'none' }}
                />
                <label htmlFor='file'>
                  <Cloudcomputing width='25' fill='#0084ff' height='25' />
                  <span style={{ marginLeft: '10px' }}>Upload Image</span>
                </label>
              </div>
            </Col>
          </Row>
        </div>
      </form>
      <button className='btn btn-primary frm' onClick={send}>
        Submit
      </button>
    </>
  );
};

export default AddEvent;
