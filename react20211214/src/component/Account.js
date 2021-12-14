import React, { useEffect, useState } from 'react';
import AccountList from './AccountList';

// import style from './style.css';
import './style.css';

const Account = () => {
  const initial_Data = {
    id: 1,
    initial: 'H',
    name: 'Hong Hong',
    email: 'Hong@classum.com'
  };

  // const [state명, set-state명]
  const [accountList, editAccountlist] = useState([initial_Data]);
  const [apiList, getApiList] = useState([]);
  const [number, setNumber] = useState(0);

  // 리렌더링 될때만 적용됨
  useEffect(() => {
    // setTimeout(() => {
    //   alert('환영합니다~!');
    // }, 3000);
    if (accountList.length > 3) {
      alert('3을 넘으려고 함');
      editAccountlist([]);
    }
    // console.log('useEffect 실행');
  }, [accountList]); // [] 빈배열은 최초 1회만 실행됨

  const addAccountlist = () => {
    // 덮어써줌 + setState만 이용해야 함
    editAccountlist([...accountList, { ...initial_Data, id: accountList.length + 1 }]);
    // setNumber(number + 5);
    // setNumber(number + 4);
    // setNumber(number + 3);
    // setNumber(number + 2);
    // setNumber(number + 1);

    // setNumber((prev) => prev + 1);
    // setNumber((prev) => prev + 2);
    // setNumber((prev) => prev + 3);
    // setNumber((prev) => prev + 4);
    // setNumber((prev) => prev + 5);

    console.log('/////// 계정 추가하기 //////');
    // console.log(accountList);
  };

  // console.log(number);
  // console.log('rendered');

  const removeAccountlist = () => {
    // set-state만 이용해야 함
    // const copy = accountList.concat();
    const copy = [...accountList];
    copy.pop();
    editAccountlist(copy);
    // console.log('/////// 빼기 //////');
    // console.log(accountList);
  };

  const getAccountList = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    getApiList(data);
    // console.log(apiList);
  };

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
          <AccountList accountList={accountList} />
          <div className="container-row-left">
            {/* <div className="item-center logo-small" onclick="addAccount()"> */}
            <div className="item-center logo-small" onClick={addAccountlist}>
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
        {/* index를 key값으로 사용하면, sorting이 발생할 경우, 곤란한 상황이 벌어질 수 있음 */}
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
