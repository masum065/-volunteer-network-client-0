import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import RegisterListBar from './RegisterListBar';
import VolunteerInfo from './VolunteerInfo';
import './VolunteerList.css';

const VolunteerList = () => {
  const [loggedInUser] = useContext(UserContext);
  const [registers, setRegisters] = useState([]);
  const [detete, setDelete] = useState({});
  const apiURL = 'https://young-ridge-25037.herokuapp.com';

  const handleDeleteRegister = (id) => {
    fetch(`${apiURL}/registers/delete/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        setDelete(data);
      });
  };

  useEffect(() => {
    fetch(`${apiURL}/registers`)
      .then((response) => response.json())
      .then((data) => setRegisters(data));
  }, [detete, loggedInUser.email]);

  return (
    <div className='list-wrapper'>
      <RegisterListBar />
      {registers.map((register) => (
        <VolunteerInfo
          key={register._id}
          onClick={handleDeleteRegister}
          register={register}
        />
      ))}
    </div>
  );
};

export default VolunteerList;
