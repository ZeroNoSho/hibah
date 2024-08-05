import React from "react";

const Beranda = ({ className }) => {
  return (
    <div>
      <svg
        width="30"
        height="28"
        viewBox="0 0 30 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M1.66699 4.66667C1.66699 3.95942 1.94794 3.28115 2.44804 2.78105C2.94814 2.28095 3.62641 2 4.33366 2H12.3337V26H4.33366C3.62641 26 2.94814 25.719 2.44804 25.219C1.94794 24.7189 1.66699 24.0406 1.66699 23.3333V4.66667ZM17.667 2H25.667C26.3742 2 27.0525 2.28095 27.5526 2.78105C28.0527 3.28115 28.3337 3.95942 28.3337 4.66667V11.3333H17.667V2ZM17.667 16.6667H28.3337V23.3333C28.3337 24.0406 28.0527 24.7189 27.5526 25.219C27.0525 25.719 26.3742 26 25.667 26H17.667V16.6667Z"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Beranda;
