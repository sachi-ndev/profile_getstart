import React from "react";

export default function UserProfileSection() {
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[22px] text-[#] font-[500]">Profile</h1>
        <button className="text-[12px] text-[#] font-[600] flex items-center gap-1 px-3 py-2 rounded-[35px] bg-[#EEE]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <g clip-path="url(#clip0_996_4321)">
              <path
                d="M9.9165 1.74996C10.0651 1.5744 10.2488 1.4315 10.4561 1.33036C10.6634 1.22923 10.8896 1.17208 11.1203 1.16256C11.351 1.15304 11.5812 1.19135 11.7962 1.27507C12.0112 1.35878 12.2063 1.48605 12.369 1.64877C12.5317 1.81149 12.6585 2.00608 12.7413 2.22015C12.8241 2.43423 12.8611 2.66308 12.8499 2.89212C12.8386 3.12116 12.7795 3.34537 12.6762 3.55046C12.5729 3.75555 12.4277 3.93702 12.2498 4.0833L4.37484 11.9583L1.1665 12.8333L2.0415 9.62496L9.9165 1.74996Z"
                stroke="black"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.75 2.91699L11.0833 5.25033"
                stroke="black"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_996_4321">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Edit Profile
        </button>
      </div>
      <div className="w-full h-[1px] bg-[#DFDFDF] my-6" />
    </div>
  );
}
