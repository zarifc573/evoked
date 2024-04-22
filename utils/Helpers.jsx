const DownArrow = ({color}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 18L12 22M12 22L16 18M12 22V2" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
const Box1 = ({color}) => {
    return (
      <svg width="212" height="362" viewBox="0 0 212 362" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M61.244 76.7915L58.2289 154.687L-68.4031 178.922L-104.799 106.435L61.244 76.7915Z" stroke={color} stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M115.3 180.436L75.4579 187.577L58.229 154.687L61.2441 76.7915L115.3 180.436Z" stroke={color} stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M-179.098 81.3357L98.9322 31.7852L189.599 205.32L-88.4316 254.871L-179.098 81.3357ZM115.3 180.437L61.2441 76.7917L-104.584 106.435L-50.5281 210.08L115.3 180.437Z" stroke={color} stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M189.599 205.32L186.799 283.433L-91.2313 332.767L-88.4316 254.871L189.599 205.32Z" stroke={color} stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
const Box2 = ({color}) => {
    return (
      <svg width="243" height="385" viewBox="0 0 243 385" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M283.346 81.6709L280.113 164.516L144.327 190.29L105.3 113.198L283.346 81.6709Z" stroke={color} stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25.6292 86.5034L323.758 33.8047L420.979 218.365L122.85 271.064L25.6292 86.5034ZM341.309 191.901L283.346 81.6708L105.531 113.198L163.494 223.428L341.309 191.901Z" stroke={color} stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M420.979 218.365L417.977 301.441L119.848 353.909L122.85 271.064L420.979 218.365Z" stroke={color} stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M122.85 271.064L119.848 353.909L22.6272 169.349L25.6292 86.5034L122.85 271.064Z" stroke={color} stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
const DownArrow2 = ({color}) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_521_1724)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47136 10.4712C8.34634 10.5962 8.1768 10.6664 8.00003 10.6664C7.82325 10.6664 7.65371 10.5962 7.52869 10.4712L3.75736 6.6999C3.69369 6.63841 3.6429 6.56484 3.60796 6.48351C3.57302 6.40217 3.55463 6.31469 3.55386 6.22617C3.55309 6.13765 3.56996 6.04986 3.60348 5.96793C3.637 5.886 3.6865 5.81157 3.7491 5.74897C3.81169 5.68638 3.88612 5.63688 3.96806 5.60336C4.04999 5.56983 4.13777 5.55297 4.22629 5.55374C4.31481 5.55451 4.40229 5.5729 4.48363 5.60784C4.56496 5.64277 4.63853 5.69356 4.70003 5.75724L8.00003 9.05724L11.3 5.75724C11.4258 5.6358 11.5942 5.5686 11.769 5.57012C11.9438 5.57164 12.111 5.64175 12.2346 5.76536C12.3582 5.88896 12.4283 6.05617 12.4298 6.23097C12.4313 6.40577 12.3641 6.57417 12.2427 6.6999L8.47136 10.4712Z" fill={color}/>
  </g>
  <defs>
    <clipPath id="clip0_521_1724">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
    )
  }
const Minus = ({color}) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="6" viewBox="0 0 15 6" fill="none">
  <path d="M0 0.938965H15V5.05984H0V0.938965Z" fill={color}/>
</svg>
    )
  }
const Plus = ({color}) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M5.80927 0.479492H9.31202V6.33114H15.04V9.66905H9.31202V15.5207H5.80927V9.66905H0.0400391V6.33114H5.80927V0.479492Z" fill={color}/>
</svg>
    )
  }
  
export { DownArrow, Box1, Box2, DownArrow2, Minus, Plus }