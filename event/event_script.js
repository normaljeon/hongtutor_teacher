const element_leftSide = document.getElementById('left-side');
const element_verticalSidebar = document.getElementById('vertical-sidebar');
const element_rightSide = document.getElementById('right-side');

// element_leftSide.style.backgroundColor = 'red';

/* (1) 사이드바 이동방향 : 오른쪽 */
/*      왼쪽면      |          오른쪽면      */
/*    width 증가    | width 감소 , left 증가 */

/* (2) 사이드바 이동방향 : 왼쪽 */
/*      왼쪽면      |          오른쪽면      */
/*    width 감소    | width 증가 , left 감소 */

const resize = (event) => {
  // let resize_col = event.x;
  // element_leftSide.style.width = `${resize_col}px`;
  // element_verticalSidebar.style.left = `${resize_col}px`;
  // element_rightSide.style.left = `${resize_col + 10}px`;
  // element_rightSide.style.width = `calc(100% - ${resize_col + 10}px)`;

  // 괄호가 풀림
  // element_leftSide.style.width = (event.x - 5) + 'px';

  // element_verticalSidebar.style.left = event.x + 'px';
  // element_rightSide.style.left = event.x + 10 + 'px';
  // element_rightSide.style.width = `calc(100% - ${event.x + 10}px)`;

  // let resize_col = event.pageX - 5;
  let resize_col = event.x;
  // element_leftSide.style.width = `${resize_col}px`;
  element_leftSide.style.width = `${event.x}px`;

  element_verticalSidebar.style.left = `${resize_col}px`;
  element_rightSide.style.left = `${resize_col + 10}px`;
  element_rightSide.style.width = `calc(100% - ${resize_col + 10}px)`;
};

// const resize = (event) => {
//   element_rightSide.style.left = event.x + 'px';
//   element_leftSide.style.width = event.x + 'px';
//   element_rightSide.style.width = (100 % -event.x) + 'px';
// };

// element_verticalSidebar.addEventListener('mousedown', (e) => {
//   document.addEventListener('mousemove', (e) => {
//     resize(e.pageX - 5);
//   });
//   document.addEventListener('mouseup', () => {
//     document.removeEventListener('mousemove', resize);
//   });
// });

element_verticalSidebar.addEventListener('mousedown', () => {
  document.addEventListener('mousemove', resize);
  element_verticalSidebar.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', resize);
  });
});

// element_verticalSidebar.removeEventListener();
