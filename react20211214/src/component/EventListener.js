import React, { useEffect } from 'react';

import './EventListener.css';

const EventListener = () => {
  //  바닐라js의 defer 개념처럼, React의 useEffect 안에서 EventListener를 구현해야 함
  //  const dragElement = document.getElementById('drag-side');
  //  console.log(dragElement);

  useEffect(() => {
    const leftElement = document.getElementById('left-side');
    const dragElement = document.getElementById('drag-side');
    const rightElement = document.getElementById('right-side');

    const resize = (event) => {
      let resize_col = event.x - 5;

      leftElement.style.width = `${resize_col}px`;
      //   leftElement.style.width = event.x + 'px';

      dragElement.style.left = `${resize_col}px`;
      //   dragElement.style.left = event.x + 'px';

      //   rightElement.style.left = `${resize_col + 10}px`;
      rightElement.style.width = `calc(100% - ${resize_col}px)`;
      //   rightElement.style.width = `calc(100% - ${event.x}px)`;
    };

    dragElement.addEventListener('mousedown', () => {
      document.addEventListener('mousemove', resize);
      dragElement.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', resize);
      });
    });
  }, []);

  return (
    //  ======= JSX 영역 : 시작 =======
    <div className="container">
      <div id="left-side"></div>
      <div id="drag-side"></div>
      <div id="right-side"></div>
    </div>
    //  ======= JSX 영역 : 시작 =======
  );
};

export default EventListener;
