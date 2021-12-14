import React from 'react';

const AccountList = (props) => {
  return (
    <div id="account-container">
      {/* <div className="container-row-left">
    <div className="item-center logo-small">H</div>
    <div style={{ marginLeft: '10px' }} className="container-col-left">
      <div>Hong Hong</div>
      <div>Hong@classum.com</div>
    </div>
  </div> */}
      {props.accountList.map((item) => {
        return (
          <div key={item.id} className="container-row-left">
            <div className="item-center logo-small">{item.initial}</div>
            <div style={{ marginLeft: '10px' }} className="container-col-left">
              <div>{item.name}</div>
              <div>{item.email}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccountList;
