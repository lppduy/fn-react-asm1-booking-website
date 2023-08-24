import './FooterList.css';

import React from 'react';

const FooterList = ({ values }) => {
  // console.log('>>> footer list', values);
  return (
    <>
      {values.map(val => (
        <li className="footer-list__item">{val}</li>
      ))}
    </>
  );
};

export default FooterList;
