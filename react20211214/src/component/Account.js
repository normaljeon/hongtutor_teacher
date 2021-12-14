import React, { useEffect, useState } from 'react';
// import style from './style.css';
import './style.css';

const Account = () => {
  const initial_Data = {
    id: 1,
    initial: 'H',
    name: 'Hong Hong',
    email: 'Hong@classum.com'
  };

  const [accountlist, editAccountlist] = useState([initial_Data]);
  const [apiList, getApiList] = useState([]);

  const AddAccountlist = () => {
    editAccountlist([...accountlist, { ...initial_Data, id: accountlist.length + 1 }]);
    console.log('/////// 넣기 //////');
    console.log(accountlist);
  };

  const removeAccountlist = () => {
    const copy = accountlist.concat();
    copy.pop();
    editAccountlist(copy);
    console.log('/////// 빼기 //////');
    console.log(accountlist);
  };

  const getAccountList = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    getApiList(data);
    // console.log(apiList);
  };

  useEffect(() => {
    setTimeout(() => {
      alert('환영합니다~!');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container">
        <div className="container-col">
          <div className="item-center logo-large relative">
            D<div className="camera-img"></div>
          </div>
        </div>
        <div className="container-col">
          <div className="item-center">Soohyun Jeon</div>
          <div className="item-center">inputjsh@gmail.com</div>
          <div className="item-center round">Google 계정 관리</div>
        </div>
        <hr />
        <div id="account-area" style={{ paddingLeft: '40px' }} className="container-col-left">
          <div id="account-container">
            {/* <div className="container-row-left">
              <div className="item-center logo-small">H</div>
              <div style={{ marginLeft: '10px' }} className="container-col-left">
                <div>Hong Hong</div>
                <div>Hong@classum.com</div>
              </div>
            </div> */}
            {accountlist.map((item) => {
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
          <div className="container-row-left">
            {/* <div className="item-center logo-small" onclick="addAccount()"> */}
            <div className="item-center logo-small" onClick={AddAccountlist}>
              +
            </div>
            <div style={{ marginLeft: '10px' }}>Add another account</div>
          </div>
          <div className="container-row-left">
            {/* <button className="item-center logo-small" onclick="removeAccount()"> */}
            <button className="item-center logo-small" onClick={removeAccountlist}>
              -
            </button>
            <div style={{ marginLeft: '10px' }}>Remove last account</div>
          </div>
        </div>
        <hr />
        <div className="container-col">
          <div className="item-center rect">Sign out of all accounts</div>
        </div>
        <hr />
        <div className="container-col">
          <div className="container-row-center">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>
        </div>
        <hr />
        <div className="container-col">
          {/* <button className="item-center rect" onclick="responseList_1()"> */}
          <button className="item-center rect" onClick={getAccountList}>
            Call the list
          </button>
        </div>
        <hr />
      </div>
      <div id="responseList">
        {apiList &&
          apiList.map((item, index) => {
            return (
              <div className="apiGetAccountList-row" key={item.id}>
                <div>{item.userId}</div>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{item.completed}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Account;
