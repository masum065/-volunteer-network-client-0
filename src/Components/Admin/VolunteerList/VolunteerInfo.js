import React from 'react';
import { ReactComponent as BinSvg } from '../../../images/icons/bin.svg';
const VolunteerInfo = (props) => {
  const { email, event, date, name, _id } = props.register;
  return (
    <div className='volunteer-info'>
      <div>{name}</div>
      <div>{email}</div>
      <div>{date}</div>
      <div className='volunteer-evnet'>{event}</div>
      <div>
        <div onClick={() => props.onClick(_id)} className='action-wrapper'>
          <BinSvg width='22' fill='none' height='22' />
        </div>
      </div>
    </div>
  );
};

export default VolunteerInfo;
