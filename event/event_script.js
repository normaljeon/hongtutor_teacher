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
  element_leftSide.style.width = `${resize_col}px`;
  element_verticalSidebar.style.left = `${resize_col}px`;
  element_rightSide.style.left = `${resize_col + 10}px`;
  element_rightSide.style.width = `calc(100% - ${resize_col + 10}px)`;
};

let startX = 3;

element_verticalSidebar.addEventListener('mousedown', (e) => {
  console.log(e.clientX);

  element_verticalSidebar.addEventListener('mousemove', (e) => {
    console.log('//// pageX ////');
    console.log(e.clientX);

    // -5는 중간값이 필요할 것 같아 넣었는데요. 사실 이게 맞는지 잘 모르겠습니다 ㅠㅠ
    resize(e.pageX - 5);
  });
});

// element_verticalSidebar.removeEventListener();
