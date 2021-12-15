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

const resize = (resize_col) => {
  console.log(resize_col);
  element_leftSide.style.width = `${resize_col}px`;
  element_verticalSidebar.style.left = `${resize_col}px`;
  element_rightSide.style.left = `${resize_col + 10}px`;
  // element_rightSide.style.width = calc(100 % -resize_col) + 'px';
  // element_rightSide.style.width = `${(100 % - resize_col}px`;
  element_rightSide.style.width = `calc(100% - ${resize_col - 10}px)`;
};

// resize(300);
// const resize_col = '100px';

let startX;
let endX;
let offset_x = 0;
element_verticalSidebar.addEventListener('mousedown', (e) => {
  //   console.log(e.pageX);
  startX = e.pageX; // e.clientX
  element_verticalSidebar.addEventListener('click', (e) => {
    resize(e.pageX);
  });
});
