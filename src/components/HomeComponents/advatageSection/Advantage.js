import React from "react";
import "./Advantage.css";
import advIcon from "../../../assets/images/advIcon.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import discount from "../../../assets/images/discount.png";
import money from "../../../assets/images/money.png";
import time from "../../../assets/images/time.png";
import easy from "../../../assets/images/easy.png";
import hours from "../../../assets/images/24_hours.png";
import technician from "../../../assets/images/technician.png";
const Advantage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    return (
      <button onClick={onClick} {...rest} className="custom_btn_right">
        {/* You can use your own custom arrow component or icons here */}
        {/* <FaChevronLeft /> */}
        <i className="ri-arrow-right-s-line"></i>
      </button>
    );
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    return (
      <button onClick={onClick} {...rest} className="custom_btn_left">
        {/* You can use your own custom arrow component or icons here */}
        {/* <FaChevronRight /> */}
        {/* right */}
        <i className="ri-arrow-left-s-line"></i>
      </button>
    );
  };

  return (
    <div className="Advantage">
      <div className="mainHead">
        <h2>مميزات تطبيق نينجا هوم</h2>
        <p>صيانة أجهزتك المنزلية بكل سهولة وأمان</p>
      </div>
      <div className="advRight">
        <div className="advIcon">
          <img src={advIcon} alt="adv_icon" />
        </div>
      </div>
      <div className="circleImg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="522"
          height="498"
          viewBox="0 0 522 498"
          fill="none"
        >
          <path
            d="M-9.90814 213.542C-9.94885 214.885 -9.97607 216.234 -9.98975 217.588L-8.98981 217.598C-8.99658 218.271 -9 218.946 -9 219.622C-9 220.285 -8.99677 220.947 -8.99023 221.609L-9.99017 221.619C-9.97711 222.95 -9.95099 224.282 -9.91193 225.613L-8.91235 225.584C-8.87347 226.909 -8.82178 228.234 -8.75732 229.559L-9.7561 229.608C-9.69141 230.938 -9.61395 232.268 -9.5238 233.599L-8.52612 233.531C-8.43665 234.852 -8.33466 236.172 -8.22021 237.493L-9.21649 237.579C-9.10156 238.906 -8.97412 240.232 -8.83441 241.558L-7.8399 241.453C-7.70087 242.773 -7.5495 244.092 -7.38605 245.411L-8.37842 245.534C-8.2149 246.853 -8.03937 248.171 -7.85181 249.488L-6.86176 249.348C-6.67505 250.659 -6.47644 251.97 -6.26605 253.281L-7.25336 253.439C-7.04199 254.755 -6.81885 256.071 -6.58392 257.385L-5.59949 257.209C-5.36664 258.512 -5.12225 259.814 -4.86639 261.115L-5.8476 261.308C-5.59094 262.613 -5.32281 263.917 -5.04333 265.22L-4.06561 265.011C-3.78735 266.308 -3.4978 267.604 -3.19702 268.899L-4.17114 269.125C-3.87012 270.422 -3.55786 271.717 -3.23468 273.01L-2.26453 272.768C-1.94366 274.052 -1.61194 275.335 -1.26935 276.616L-2.23541 276.874C-1.89148 278.161 -1.53668 279.446 -1.1712 280.729L-0.209412 280.456C0.154114 281.732 0.528259 283.007 0.912964 284.28L-0.0442505 284.569C0.339905 285.841 0.734436 287.11 1.1394 288.378L2.09204 288.074C2.49536 289.337 2.90906 290.598 3.33289 291.857L2.38513 292.176C2.81061 293.44 3.24634 294.702 3.69214 295.962L4.63489 295.628C5.07623 296.876 5.52759 298.121 5.98871 299.364L5.05115 299.712C5.51367 300.959 5.98608 302.204 6.4682 303.447L7.40045 303.085C7.8808 304.323 8.37085 305.558 8.87042 306.792L7.9436 307.167C8.44318 308.4 8.95233 309.631 9.47089 310.859L10.3922 310.47C10.9072 311.69 11.4317 312.908 11.9653 314.123L11.0498 314.525C11.5854 315.744 12.1302 316.961 12.6842 318.175L13.594 317.76C14.1453 318.968 14.7058 320.174 15.2752 321.377L14.3714 321.805C14.9398 323.005 15.5172 324.203 16.1033 325.398L17.0011 324.957C17.5853 326.148 18.1782 327.336 18.7798 328.521L17.8881 328.974C18.4917 330.163 19.1041 331.348 19.725 332.531L20.6104 332.066C21.2263 333.239 21.8506 334.409 22.4832 335.576L21.6042 336.053C22.2383 337.222 22.8806 338.388 23.5313 339.551L24.404 339.062C25.0525 340.221 25.7093 341.377 26.3742 342.529L25.5081 343.029C26.1738 344.182 26.8476 345.332 27.5294 346.479L28.3889 345.967C29.0662 347.106 29.7515 348.242 30.4446 349.374L29.5918 349.896C30.2871 351.032 30.9903 352.163 31.7013 353.292L32.5473 352.758C33.256 353.883 33.9724 355.004 34.6964 356.121L33.8573 356.665C34.5803 357.78 35.3109 358.892 36.049 360L36.8811 359.445C37.6168 360.549 38.3598 361.649 39.1102 362.746L38.285 363.31C39.0378 364.41 39.7979 365.506 40.5652 366.597L41.3833 366.022C42.1467 367.108 42.9173 368.189 43.6949 369.267L42.8841 369.852C43.6627 370.931 44.4484 372.006 45.2411 373.076L46.0447 372.481C46.835 373.548 47.6323 374.61 48.4364 375.669L47.6402 376.274C48.4466 377.335 49.2599 378.392 50.0799 379.444L50.8687 378.83C51.6839 379.876 52.5059 380.918 53.3344 381.955L52.5531 382.579C53.3842 383.619 54.2219 384.655 55.0661 385.686L55.8398 385.052C56.6815 386.08 57.5297 387.103 58.3843 388.121L57.6183 388.764C58.4744 389.784 59.3368 390.8 60.2056 391.81L60.9638 391.158C61.8293 392.164 62.701 393.166 63.5789 394.163L62.8285 394.824C63.709 395.823 64.5957 396.818 65.4885 397.807L66.231 397.137C67.1209 398.124 68.017 399.105 68.919 400.081L68.1846 400.76C69.0883 401.737 69.9981 402.71 70.9137 403.678L71.64 402.99C72.5528 403.955 73.4716 404.914 74.3961 405.868L73.678 406.564C74.6052 407.52 75.5382 408.472 76.4769 409.417L77.1866 408.713C78.1223 409.656 79.0637 410.593 80.0106 411.524L79.3092 412.237C80.2589 413.172 81.214 414.1 82.1746 415.023L82.8675 414.302C83.8253 415.222 84.7885 416.137 85.757 417.046L85.0728 417.775C86.0444 418.686 87.0213 419.592 88.0035 420.492L88.679 419.754C89.6588 420.652 90.6438 421.544 91.6339 422.429L90.9673 423.175C91.9604 424.063 92.9587 424.945 93.962 425.821L94.6197 425.068C95.6201 425.941 96.6254 426.809 97.6358 427.67L96.9871 428.431C98.0016 429.295 99.021 430.154 100.045 431.006L100.685 430.237C101.707 431.086 102.733 431.93 103.764 432.767L103.134 433.543C104.169 434.383 105.208 435.216 106.252 436.042L106.872 435.258C107.914 436.082 108.96 436.9 110.01 437.711L109.399 438.503C110.455 439.318 111.515 440.126 112.579 440.928L113.181 440.129C114.242 440.928 115.308 441.72 116.379 442.506L115.787 443.312C116.861 444.1 117.939 444.88 119.021 445.654L119.602 444.841C120.684 445.614 121.77 446.38 122.86 447.139L122.289 447.96C123.383 448.722 124.481 449.477 125.584 450.224L126.145 449.397C127.244 450.142 128.347 450.88 129.455 451.61L128.904 452.445C130.016 453.179 131.132 453.905 132.252 454.624L132.792 453.782C133.912 454.501 135.035 455.212 136.162 455.915L135.633 456.763C136.764 457.469 137.898 458.167 139.037 458.857L139.555 458.001C140.69 458.689 141.828 459.369 142.97 460.041L142.463 460.903C143.613 461.58 144.767 462.249 145.925 462.91L146.421 462.042C147.575 462.701 148.733 463.352 149.894 463.995L149.41 464.87C150.575 465.515 151.744 466.152 152.916 466.781L153.388 465.9C154.559 466.528 155.733 467.147 156.911 467.759L156.45 468.646C157.634 469.261 158.822 469.868 160.013 470.466L160.462 469.572C161.649 470.168 162.839 470.755 164.032 471.333L163.596 472.233C164.793 472.814 165.994 473.386 167.197 473.949L167.621 473.043C168.827 473.608 170.036 474.163 171.247 474.709L170.836 475.621C172.052 476.169 173.27 476.708 174.492 477.238L174.89 476.321C176.107 476.849 177.326 477.367 178.548 477.877L178.164 478.8C179.395 479.314 180.629 479.818 181.866 480.312L182.237 479.384C183.472 479.878 184.709 480.362 185.949 480.837L185.591 481.771C186.835 482.247 188.081 482.714 189.33 483.171L189.674 482.232C190.92 482.688 192.169 483.135 193.42 483.571L193.09 484.515C194.351 484.955 195.614 485.385 196.879 485.805L197.194 484.856C198.455 485.275 199.717 485.683 200.981 486.081L200.681 487.035C201.95 487.435 203.221 487.824 204.494 488.203L204.78 487.245C206.055 487.624 207.332 487.994 208.611 488.353L208.341 489.315C209.625 489.676 210.911 490.025 212.198 490.364L212.453 489.397C213.735 489.735 215.019 490.062 216.305 490.378L216.066 491.349C217.361 491.668 218.658 491.975 219.956 492.272L220.179 491.297C221.474 491.593 222.771 491.878 224.069 492.152L223.863 493.131C225.166 493.406 226.471 493.669 227.777 493.922L227.967 492.94C229.269 493.192 230.573 493.433 231.878 493.662L231.704 494.647C233.019 494.878 234.334 495.097 235.651 495.305L235.806 494.317C237.117 494.524 238.429 494.719 239.741 494.902L239.603 495.893C240.921 496.077 242.24 496.249 243.56 496.41L243.681 495.417C245 495.578 246.319 495.726 247.638 495.863L247.536 496.857C248.861 496.994 250.188 497.119 251.515 497.232L251.599 496.236C252.92 496.348 254.241 496.448 255.563 496.536L255.497 497.534C256.827 497.622 258.157 497.698 259.487 497.761L259.535 496.762C260.86 496.825 262.185 496.876 263.51 496.914L263.482 497.914C264.813 497.952 266.145 497.978 267.476 497.99L267.486 496.99C268.149 496.997 268.811 497 269.474 497C270.145 497 270.816 496.997 271.486 496.992L271.494 497.992C272.839 497.982 274.182 497.961 275.522 497.93L275.499 496.93C276.834 496.899 278.166 496.858 279.496 496.807L279.534 497.806C280.873 497.754 282.209 497.692 283.542 497.62L283.488 496.622C284.827 496.549 286.163 496.466 287.496 496.373L287.565 497.371C288.903 497.277 290.239 497.174 291.571 497.06L291.486 496.064C292.814 495.95 294.139 495.826 295.46 495.693L295.561 496.687C296.9 496.552 298.236 496.406 299.569 496.25L299.453 495.257C300.781 495.101 302.105 494.936 303.426 494.76L303.558 495.751C304.884 495.575 306.208 495.388 307.527 495.191L307.38 494.202C308.705 494.005 310.026 493.797 311.344 493.58L311.507 494.566C312.832 494.347 314.153 494.118 315.47 493.879L315.291 492.895C316.603 492.657 317.912 492.409 319.217 492.151L319.411 493.132C320.729 492.872 322.043 492.601 323.353 492.32L323.143 491.342C324.451 491.062 325.755 490.772 327.054 490.472L327.279 491.446C328.584 491.145 329.885 490.833 331.183 490.512L330.942 489.541C332.24 489.22 333.534 488.889 334.823 488.548L335.079 489.514C336.377 489.171 337.67 488.818 338.96 488.455L338.689 487.492C339.973 487.13 341.254 486.759 342.53 486.378L342.816 487.336C344.101 486.952 345.382 486.558 346.658 486.154L346.357 485.201C347.632 484.798 348.902 484.385 350.168 483.962L350.485 484.911C351.756 484.487 353.023 484.053 354.284 483.609L353.953 482.666C355.213 482.223 356.468 481.77 357.719 481.308L358.065 482.246C359.324 481.781 360.579 481.306 361.828 480.822L361.467 479.89C362.711 479.407 363.951 478.915 365.186 478.414L365.562 479.34C366.804 478.836 368.041 478.322 369.273 477.799L368.882 476.879C370.113 476.356 371.338 475.824 372.558 475.283L372.964 476.197C374.189 475.654 375.409 475.101 376.623 474.539L376.203 473.631C377.415 473.071 378.621 472.501 379.822 471.922L380.256 472.823C381.465 472.24 382.668 471.648 383.866 471.047L383.418 470.153C384.611 469.554 385.798 468.946 386.98 468.329L387.443 469.216C388.631 468.596 389.813 467.967 390.99 467.329L390.513 466.45C391.688 465.813 392.857 465.167 394.02 464.512L394.511 465.383C395.679 464.725 396.841 464.059 397.997 463.384L397.492 462.52C398.645 461.847 399.792 461.165 400.932 460.474L401.45 461.33C402.598 460.635 403.739 459.931 404.874 459.219L404.343 458.372C405.473 457.662 406.598 456.944 407.716 456.217L408.261 457.056C409.385 456.325 410.502 455.587 411.613 454.839L411.055 454.01C412.163 453.264 413.265 452.51 414.361 451.747L414.932 452.568C416.032 451.802 417.126 451.028 418.213 450.246L417.628 449.434C418.712 448.655 419.788 447.867 420.858 447.07L421.455 447.873C422.531 447.072 423.6 446.263 424.662 445.446L424.053 444.653C425.111 443.84 426.162 443.018 427.206 442.188L427.829 442.97C428.878 442.137 429.92 441.295 430.955 440.445L430.32 439.672C431.352 438.825 432.377 437.969 433.396 437.106L434.042 437.869C435.064 437.002 436.079 436.128 437.087 435.245L436.428 434.493C437.432 433.614 438.429 432.727 439.419 431.832L440.09 432.574C441.084 431.675 442.071 430.768 443.051 429.853L442.368 429.122C443.344 428.212 444.312 427.293 445.273 426.367L445.967 427.087C446.932 426.158 447.889 425.22 448.839 424.275L448.133 423.566C449.08 422.625 450.019 421.676 450.95 420.72L451.666 421.417C452.601 420.457 453.528 419.49 454.447 418.515L453.72 417.829C454.635 416.858 455.543 415.88 456.443 414.894L457.181 415.569C458.085 414.579 458.981 413.582 459.868 412.579L459.119 411.916C460.004 410.916 460.88 409.91 461.748 408.896L462.507 409.546C463.379 408.529 464.242 407.504 465.097 406.472L464.327 405.834C465.179 404.807 466.023 403.772 466.858 402.731L467.638 403.357C468.476 402.312 469.306 401.26 470.128 400.201L469.338 399.588C470.156 398.534 470.966 397.473 471.768 396.406L472.567 397.006C473.372 395.935 474.167 394.857 474.955 393.773L474.145 393.185C474.929 392.105 475.705 391.019 476.471 389.926L477.29 390.501C478.06 389.404 478.82 388.301 479.572 387.191L478.745 386.63C479.493 385.526 480.233 384.416 480.964 383.299L481.8 383.847C482.534 382.726 483.259 381.598 483.975 380.465L483.13 379.931C483.842 378.803 484.546 377.669 485.241 376.529L486.095 377.049C486.791 375.905 487.479 374.756 488.157 373.601L487.295 373.094C487.971 371.944 488.638 370.787 489.295 369.625L490.165 370.117C490.825 368.951 491.475 367.779 492.116 366.602L491.238 366.124C491.876 364.953 492.504 363.776 493.123 362.594L494.009 363.058C494.63 361.871 495.242 360.678 495.845 359.48L494.951 359.031C495.551 357.839 496.141 356.642 496.721 355.439L497.622 355.873C498.204 354.668 498.776 353.458 499.338 352.242L498.431 351.822C498.991 350.611 499.542 349.395 500.083 348.174L500.997 348.579C501.54 347.354 502.073 346.124 502.596 344.889L501.675 344.499C502.195 343.272 502.705 342.04 503.205 340.803L504.132 341.178C504.634 339.936 505.126 338.689 505.609 337.438L504.676 337.078C505.155 335.833 505.625 334.583 506.085 333.328L507.024 333.673C507.485 332.417 507.935 331.157 508.376 329.892L507.431 329.563C507.87 328.303 508.298 327.039 508.717 325.77L509.667 326.083C510.086 324.811 510.496 323.534 510.896 322.252L509.941 321.955C510.337 320.684 510.723 319.408 511.099 318.129L512.058 318.41C512.436 317.126 512.803 315.837 513.16 314.543L512.196 314.277C512.551 312.99 512.896 311.699 513.231 310.404L514.199 310.654C514.533 309.361 514.857 308.063 515.171 306.762L514.198 306.527C514.511 305.231 514.813 303.931 515.104 302.627L516.08 302.845C516.373 301.536 516.655 300.224 516.926 298.907L515.947 298.705C516.216 297.403 516.474 296.097 516.722 294.787L517.705 294.973C517.954 293.658 518.192 292.34 518.42 291.017L517.434 290.848C517.661 289.531 517.878 288.21 518.084 286.887L519.072 287.04C519.277 285.722 519.471 284.4 519.655 283.074L518.665 282.937C518.848 281.617 519.02 280.294 519.182 278.968L520.175 279.089C520.338 277.758 520.49 276.423 520.631 275.085L519.636 274.98C519.776 273.658 519.905 272.333 520.024 271.005L521.02 271.093C521.138 269.762 521.246 268.427 521.344 267.09L520.346 267.017C520.443 265.685 520.53 264.35 520.605 263.012L521.604 263.068C521.679 261.735 521.744 260.398 521.798 259.059L520.798 259.019C520.852 257.69 520.895 256.358 520.927 255.023L521.927 255.047C521.959 253.707 521.981 252.365 521.992 251.02L520.992 251.012C520.997 250.342 521 249.671 521 249C521 248.329 520.997 247.658 520.992 246.988L521.992 246.98C521.981 245.635 521.959 244.292 521.927 242.952L520.927 242.977C520.895 241.642 520.852 240.31 520.798 238.981L521.798 238.94C521.744 237.601 521.679 236.265 521.604 234.931L520.605 234.988C520.53 233.65 520.443 232.315 520.346 230.983L521.344 230.91C521.246 229.573 521.138 228.238 521.02 226.906L520.024 226.995C519.905 225.667 519.776 224.342 519.636 223.02L520.631 222.915C520.49 221.577 520.338 220.242 520.175 218.911L519.182 219.032C519.02 217.706 518.848 216.383 518.665 215.063L519.655 214.926C519.471 213.6 519.277 212.278 519.072 210.96L518.084 211.113C517.878 209.789 517.661 208.469 517.434 207.152L518.42 206.982C518.192 205.66 517.954 204.342 517.705 203.027L516.722 203.213C516.474 201.903 516.216 200.597 515.947 199.295L516.926 199.093C516.655 197.776 516.373 196.464 516.08 195.155L515.104 195.373C514.813 194.069 514.511 192.769 514.198 191.473L515.171 191.238C514.857 189.937 514.533 188.639 514.199 187.346L513.231 187.596C512.896 186.301 512.551 185.01 512.196 183.723L513.16 183.457C512.803 182.163 512.436 180.874 512.058 179.589L511.099 179.871C510.723 178.592 510.337 177.316 509.941 176.045L510.896 175.748C510.496 174.466 510.086 173.189 509.667 171.917L508.717 172.23C508.298 170.961 507.87 169.697 507.431 168.437L508.376 168.108C507.935 166.843 507.485 165.583 507.024 164.327L506.085 164.672C505.625 163.417 505.155 162.167 504.676 160.922L505.609 160.562C505.126 159.311 504.634 158.064 504.132 156.822L503.205 157.197C502.705 155.96 502.195 154.728 501.675 153.501L502.596 153.111C502.073 151.876 501.54 150.646 500.997 149.421L500.083 149.826C499.542 148.605 498.991 147.389 498.431 146.178L499.338 145.758C498.776 144.542 498.204 143.332 497.622 142.127L496.721 142.561C496.141 141.359 495.551 140.161 494.951 138.969L495.845 138.52C495.242 137.322 494.63 136.129 494.009 134.942L493.123 135.406C492.504 134.224 491.876 133.047 491.238 131.877L492.117 131.398C491.475 130.221 490.825 129.049 490.165 127.883L489.295 128.375C488.638 127.213 487.971 126.057 487.295 124.906L488.157 124.399C487.479 123.244 486.791 122.095 486.095 120.951L485.241 121.472C484.546 120.331 483.842 119.197 483.13 118.069L483.975 117.535C483.259 116.402 482.534 115.275 481.8 114.153L480.964 114.701C480.233 113.585 479.493 112.474 478.745 111.37L479.573 110.809C478.821 109.7 478.06 108.596 477.29 107.5L476.472 108.074C475.705 106.981 474.929 105.895 474.145 104.815L474.955 104.227C474.167 103.143 473.372 102.065 472.567 100.994L471.768 101.594C470.966 100.527 470.156 99.4661 469.338 98.4119L470.128 97.7987C469.306 96.7401 468.476 95.6881 467.638 94.643L466.858 95.2687C466.023 94.2277 465.179 93.1935 464.328 92.1661L465.097 91.5279C464.242 90.4963 463.379 89.4716 462.507 88.4538L461.748 89.1042C460.88 88.0905 460.004 87.0837 459.119 86.0839L459.869 85.4215C458.981 84.4177 458.085 83.4211 457.181 82.4316L456.443 83.106C455.543 82.1206 454.635 81.1424 453.72 80.1714L454.447 79.4853C453.528 78.5106 452.601 77.5431 451.666 76.5829L450.95 77.2805C450.019 76.3242 449.08 75.3752 448.134 74.4337L448.839 73.7248C447.889 72.78 446.932 71.8426 445.967 70.9128L445.273 71.6329C444.312 70.7069 443.344 69.7885 442.368 68.8777L443.051 68.1467C442.071 67.2323 441.084 66.3255 440.09 65.4265L439.419 66.1683C438.429 65.2736 437.433 64.3865 436.428 63.5073L437.087 62.755C436.079 61.8725 435.064 60.9979 434.042 60.1312L433.396 60.8939C432.378 60.0306 431.352 59.1753 430.32 58.3279L430.955 57.555C429.92 56.7052 428.878 55.8634 427.829 55.0297L427.206 55.8126C426.162 54.9825 425.111 54.1605 424.053 53.3467L424.662 52.5541C423.6 51.737 422.531 50.9281 421.455 50.1276L420.858 50.9298C419.788 50.1335 418.712 49.3455 417.628 48.5657L418.213 47.7541C417.126 46.9718 416.032 46.1977 414.932 45.4321L414.361 46.2529C413.265 45.4903 412.163 44.7362 411.055 43.9906L411.613 43.1608C410.502 42.4135 409.385 41.6747 408.261 40.9446L407.716 41.783C406.598 41.0563 405.473 40.338 404.343 39.6285L404.874 38.7814C403.739 38.069 402.598 37.3654 401.45 36.6705L400.932 37.5258C399.792 36.8351 398.645 36.1531 397.493 35.4798L397.997 34.6164C396.841 33.9411 395.679 33.2746 394.511 32.6171L394.02 33.4884C392.857 32.8335 391.688 32.1875 390.513 31.5504L390.99 30.6713C389.813 30.0332 388.631 29.4041 387.443 28.784L386.98 29.6706C385.798 29.0536 384.611 28.4457 383.418 27.8469L383.866 26.9532C382.668 26.352 381.465 25.76 380.256 25.1772L379.822 26.078C378.621 25.499 377.415 24.9292 376.203 24.3686L376.623 23.461C375.409 22.899 374.189 22.3463 372.964 21.8029L372.558 22.717C371.338 22.1758 370.113 21.6438 368.882 21.1213L369.273 20.2009C368.041 19.6777 366.804 19.1639 365.562 18.6596L365.186 19.5862C363.951 19.0848 362.711 18.5929 361.467 18.1104L361.828 17.178C360.579 16.6937 359.324 16.2189 358.065 15.7537L357.719 16.6917C356.468 16.2297 355.213 15.7772 353.953 15.3343L354.284 14.3909C353.022 13.9473 351.756 13.5134 350.485 13.0892L350.168 14.0377C348.902 13.6152 347.632 13.2023 346.357 12.7992L346.658 11.8457C345.382 11.4422 344.101 11.0483 342.816 10.6643L342.53 11.6224C341.254 11.2412 339.973 10.8696 338.689 10.5079L338.96 9.54537C337.67 9.18222 336.377 8.82894 335.079 8.48559L334.823 9.45233C333.533 9.11118 332.24 8.77989 330.942 8.45853L331.182 7.48785C329.885 7.16664 328.584 6.85531 327.279 6.55397L327.054 7.52833C325.754 7.22817 324.451 6.93796 323.143 6.65777L323.353 5.67997C322.043 5.3992 320.729 5.12845 319.411 4.86783L319.217 5.84882C317.912 5.59073 316.603 5.34259 315.291 5.1045L315.47 4.12057C314.152 3.88153 312.832 3.65258 311.507 3.43379L311.344 4.42041C310.026 4.20267 308.705 3.99504 307.38 3.79759L307.527 2.80852C306.207 2.61183 304.884 2.42522 303.558 2.24876L303.426 3.24003C302.105 3.06426 300.78 2.8986 299.453 2.74314L299.569 1.74993C298.236 1.59386 296.9 1.44803 295.561 1.31251L295.46 2.30743C294.138 2.17366 292.813 2.04997 291.485 1.93647L291.571 0.940099C290.238 0.826221 288.903 0.722544 287.565 0.629146L287.495 1.62672C286.162 1.53368 284.827 1.45089 283.488 1.37841L283.542 0.379873C282.209 0.307684 280.873 0.245694 279.534 0.193979L279.495 1.19323C278.166 1.14186 276.833 1.10067 275.498 1.06974L275.522 0.0700058C274.181 0.03895 272.839 0.0181882 271.494 0.00779772L271.486 1.00777C270.816 1.00259 270.145 1 269.474 1C268.804 1 268.135 1.0019 267.465 1.00569L267.46 0.0057048C266.117 0.0133096 264.774 0.0285137 263.431 0.0512932L263.448 1.05115C262.109 1.07386 260.771 1.10413 259.432 1.14194L259.404 0.142334C258.062 0.180244 256.719 0.225707 255.378 0.2787L255.417 1.27792C254.079 1.33078 252.741 1.39115 251.403 1.45902L251.352 0.460302C250.011 0.528353 248.671 0.603914 247.33 0.686961L247.392 1.68505C246.056 1.76786 244.72 1.85815 243.385 1.95587L243.312 0.95854C241.972 1.05664 240.633 1.16222 239.294 1.27525L239.378 2.2717C238.044 2.38442 236.71 2.50457 235.377 2.63213L235.282 1.63668C233.945 1.7646 232.61 1.89994 231.275 2.04269L231.382 3.03702C230.049 3.17957 228.718 3.32952 227.388 3.48686L227.271 2.49378C225.936 2.65162 224.603 2.81686 223.272 2.98948L223.4 3.98119C222.072 4.15334 220.746 4.33285 219.421 4.5197L219.281 3.5295C217.951 3.71711 216.622 3.91211 215.295 4.11446L215.445 5.10304C214.12 5.30506 212.797 5.51443 211.476 5.73112L211.314 4.7443C209.988 4.9616 208.665 5.18625 207.343 5.41823L207.516 6.40317C206.197 6.63472 204.88 6.87358 203.565 7.11974L203.381 6.13681C202.059 6.3842 200.739 6.63893 199.422 6.90098L199.617 7.88177C198.303 8.14309 196.992 8.41171 195.682 8.6876L195.476 7.70909C194.163 7.98586 192.852 8.26993 191.543 8.56128L191.76 9.53738C190.451 9.82893 189.144 10.1278 187.839 10.4339L187.611 9.46036C186.302 9.76736 184.997 10.0817 183.694 10.4033L183.934 11.3741C182.634 11.6948 181.338 12.0227 180.044 12.3579L179.793 11.3898C178.491 11.7273 177.191 12.0721 175.895 12.4242L176.157 13.3892C174.863 13.7405 173.573 14.099 172.285 14.4648L172.012 13.5028C170.721 13.8697 169.433 14.2438 168.148 14.6251L168.432 15.5838C167.147 15.9654 165.864 16.3542 164.586 16.7504L164.29 15.7951C163.005 16.1931 161.724 16.5983 160.446 17.0108L160.753 17.9624C159.479 18.3737 158.209 18.7922 156.942 19.2179L156.624 18.2701C155.35 18.6984 154.079 19.134 152.812 19.5768L153.143 20.5208C151.876 20.9636 150.614 21.4136 149.355 21.8709L149.014 20.931C147.751 21.3897 146.493 21.8557 145.239 22.3289L145.592 23.2645C144.339 23.7374 143.09 24.2175 141.845 24.7049L141.481 23.7737C140.227 24.2646 138.978 24.7628 137.733 25.2682L138.11 26.1948C136.869 26.6987 135.632 27.2098 134.401 27.7282L134.013 26.8065C132.775 27.3274 131.542 27.8556 130.314 28.391L130.714 29.3076C129.483 29.8442 128.257 30.3881 127.036 30.9393L126.625 30.0278C125.4 30.5808 124.18 31.141 122.965 31.7086L123.389 32.6146C122.177 33.1808 120.97 33.7542 119.769 34.3349L119.334 33.4346C118.12 34.021 116.913 34.6148 115.71 35.2159L116.157 36.1103C114.959 36.7094 113.766 37.3159 112.579 37.9296L112.12 37.0412C110.928 37.6571 109.742 38.2803 108.562 38.9108L109.034 39.7928C107.849 40.4259 106.67 41.0664 105.497 41.7141L105.013 40.8388C103.836 41.4888 102.665 42.1462 101.5 42.8109L101.996 43.6794C100.835 44.3419 99.6806 45.0116 98.5323 45.6885L98.0245 44.8271C96.8633 45.5117 95.7086 46.2037 94.5604 46.9031L95.0807 47.7571C93.9362 48.4543 92.7984 49.1587 91.6673 49.8705L91.1347 49.0242C89.9995 49.7386 88.8709 50.4604 87.7493 51.1895L88.2943 52.0279C87.1686 52.7597 86.0499 53.4989 84.9382 54.2455L84.3807 53.4153C83.2642 54.1652 82.1548 54.9225 81.0527 55.6873L81.6228 56.5088C80.5249 57.2707 79.4343 58.0398 78.3512 58.8163L77.7685 58.0036C76.6734 58.7887 75.5858 59.5813 74.506 60.3813L75.1013 61.1848C74.0248 61.9823 72.9561 62.7873 71.8953 63.5996L71.2873 62.8056C70.2222 63.6212 69.1651 64.4442 68.116 65.2746L68.7366 66.0587C67.6844 66.8915 66.6404 67.7318 65.6047 68.5795L64.9713 67.8057C63.9307 68.6575 62.8983 69.5168 61.8745 70.3835L62.5206 71.1467C61.501 72.0099 60.4899 72.8804 59.4875 73.7583L58.8286 73.0061C57.8152 73.8936 56.8105 74.7887 55.8148 75.6914L56.4864 76.4322C55.4944 77.3314 54.5115 78.2381 53.5376 79.1521L52.8532 78.4229C51.8752 79.341 50.9062 80.2664 49.9465 81.1993L50.6436 81.9164C49.6819 82.8512 48.7298 83.7934 47.7871 84.7431L47.0774 84.0387C46.1305 84.9927 45.1931 85.9543 44.2655 86.9233L44.9879 87.6148C44.0643 88.5798 43.1504 89.5521 42.2464 90.5318L41.5114 89.8537C40.5985 90.8431 39.6956 91.8401 38.8029 92.8445L39.5504 93.5088C38.6618 94.5086 37.7835 95.5158 36.9156 96.5304L36.1557 95.8803C35.2831 96.9003 34.4209 97.9278 33.5693 98.9627L34.3415 99.5981C33.4908 100.632 32.6507 101.673 31.8214 102.722L31.037 102.101C30.2037 103.155 29.3813 104.216 28.5698 105.285L29.3662 105.89C28.5582 106.954 27.7612 108.025 26.9754 109.104L26.1671 108.515C25.3757 109.601 24.5955 110.695 23.8267 111.796L24.6466 112.369C23.8817 113.464 23.1281 114.568 22.3862 115.678L21.5547 115.122C20.8087 116.239 20.0743 117.362 19.3517 118.493L20.1945 119.032C19.4751 120.158 18.7675 121.291 18.0719 122.431L17.2182 121.911C16.5189 123.057 15.8316 124.211 15.1565 125.372L16.0209 125.874C15.3497 127.029 14.6905 128.19 14.0436 129.359L13.1687 128.874C12.5189 130.048 11.8813 131.23 11.2562 132.418L12.1412 132.884C11.5194 134.066 10.9101 135.255 10.3134 136.452L9.41852 136.005C8.81976 137.206 8.23364 138.413 7.66028 139.628L8.56458 140.055C7.99524 141.261 7.43854 142.474 6.89478 143.694L5.98138 143.287C5.43463 144.513 4.90076 145.747 4.38 146.988L5.30206 147.375C4.78625 148.604 4.28339 149.84 3.79358 151.082L2.86322 150.716C2.37183 151.962 1.89355 153.216 1.42853 154.476L2.36676 154.823C1.90424 156.076 1.45496 157.337 1.0191 158.604L0.0734863 158.278C-0.361877 159.544 -0.783997 160.816 -1.19269 162.095L-0.240112 162.4C-0.645508 163.668 -1.03766 164.944 -1.41632 166.226L-2.37537 165.942C-2.7561 167.231 -3.12335 168.527 -3.47687 169.829L-2.51178 170.091C-2.86005 171.374 -3.19489 172.663 -3.51624 173.959L-4.48682 173.718C-4.80902 175.017 -5.11774 176.322 -5.41278 177.634L-4.43719 177.854C-4.73059 179.158 -5.01038 180.469 -5.27643 181.787L-6.25665 181.589C-6.52087 182.897 -6.77161 184.212 -7.00867 185.532L-6.02441 185.709C-6.25946 187.018 -6.48096 188.334 -6.68884 189.655L-7.6767 189.5C-7.88568 190.828 -8.08093 192.163 -8.26233 193.504L-7.27136 193.638C-7.44928 194.952 -7.61371 196.273 -7.76465 197.6L-8.75824 197.487C-8.90924 198.814 -9.04675 200.147 -9.17059 201.486L-8.1748 201.578C-8.29803 202.91 -8.40765 204.248 -8.50354 205.591L-9.50098 205.52C-9.59595 206.851 -9.67761 208.188 -9.74567 209.53L-8.74695 209.58C-8.81415 210.906 -8.86804 212.236 -8.90857 213.573L-9.90814 213.542Z"
            stroke="#0A2640"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>
      </div>
      <div className="scrollSwipe">
        {/* <div className="scrollCards"> */}
        <Carousel
          swipeable={true}
          // draggable={false}
          // showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          // autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out" // Customize the transition here
          transitionDuration={300} // Set the duration of the transition
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType="desktop"
          // dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {/* Your carousel content goes here */}
          <div className="scrollCard">
            <div className="iconImg">
              <img src={technician} alt="technician" />
            </div>
            <h2>فنيين بمهارة عالية</h2>
            <p>
              يحرص تطبيق نينجا هوم علي قبول الفنيين المهرة فقط لزيادة جودة
              الخدمة.
            </p>
          </div>
          <div className="scrollCard">
            <div className="iconImg iconImg2">
              <img src={money} alt="money" />
            </div>
            <h2>سعر جيد ومنافس</h2>
            <p>
              ستحصل علي أسعار صيانة لأجهزتك المنزلية بأسعار جيدة ومناسبة مع
              نينجا هوم.
            </p>
          </div>
          <div className="scrollCard">
            <div className="iconImg iconImg3">
              <img src={time} alt="time" />
            </div>
            <h2>تحديد موعد الصيانة</h2>
            <p>
              يمكنك بسهولة تحديد الوقت المناسب لك مع الفني لمعاينة وصيانة أجهزتك
              المنزلية.
            </p>
          </div>
          <div className="scrollCard">
            <div className="iconImg iconImg4">
              <img src={discount} alt="discount" />
            </div>
            <h2>ضمان علي الصيانة</h2>
            <p>
              أحصل علي ضمان حتي 30 يوم علي قطع الغيار التي تم تركيبها من الفني
              مباشرة.
            </p>
          </div>
          <div className="scrollCard">
            <div className="iconImg iconImg5">
              <img src={easy} alt="easy" />
            </div>
            <h2>تطبيق سهل وبسيط</h2>
            <p>
              فقط في 3 خطوات بسيطة يمنكك تحديد موعد مع فني محترف والتواصل معه
              فورا.
            </p>
          </div>
          <div className="scrollCard">
            <div className="iconImg iconImg6">
              <img src={hours} alt="hours" />
            </div>
            <h2>خدمة عملاء 24/7</h2>
            <p>
              لأي شكاوي او مقترحات تواصل معنا علي مدار اليوم لتقديم المساعدة وحل
              مشكلاتك.
            </p>
          </div>
          {/* ... */}
        </Carousel>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Advantage;
