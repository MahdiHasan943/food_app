import Image from 'next/image';
import React from 'react';

const Process = () => {
  return (
    <div className='relative  desktop:rounded-xl overflow-hidden h-[1200px] desktop:h-[800px] w-full'>
      <Image
        src="/images/Process-bg.png"
        className='absolute top-0 left-0 z-[0!important]'
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="processbg"
      />
      <div className="grid px-4 desktop:px-16  grid-cols-1 py-8 desktop:grid-cols-2 gap-8 items-center absolute top-0 left-0 bg-inherit bg-none h-full w-full">
        <Image src={'/images/process.png'} alt='location' width={600} height={700} className='w-[300px] h-[380px] desktop:w-auto desktop:h-auto mx-auto'/>
        <div className="mx-auto">
          <h2 className='font-bold text-[24px] desktop:text-[40px] text-[#fff]'>
            The Process of Crafting your <br className='hidden desktop:block' /> Dining Experience </h2>
          <div className="py-8">
            <div className="bg-[#0d1634] flex items-center gap-4 desktop:gap-8 rounded-xl w-full desktop:max-w-[450px] shadow-primaryDark py-3 px-4">
              <div className=" bg-[#242a48] min-w-[60px] rounded-full py-2 px-2 flex justify-center items-center w-[60px] h-[60px]">
              <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7371 23.5034C23.8364 20.3264 26.6663 15.5679 26.6663 11.7606C26.6663 5.44878 21.443 0.332031 14.9997 0.332031C8.55635 0.332031 3.33301 5.44878 3.33301 11.7606C3.33301 15.5679 6.16294 20.3264 9.26228 23.5034C11.3011 25.5932 13.4566 26.9987 14.9997 26.9987C16.5428 26.9987 18.6982 25.5932 20.7371 23.5034ZM14.9997 15.332C16.8406 15.332 18.333 13.8396 18.333 11.9987C18.333 10.1577 16.8406 8.66536 14.9997 8.66536C13.1587 8.66536 11.6663 10.1577 11.6663 11.9987C11.6663 13.8396 13.1587 15.332 14.9997 15.332Z" fill="white"></path>
                                                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M6.75902 24.4883C2.6873 25.3824 0 26.9199 0 28.6668C0 31.4282 6.71573 33.6668 15 33.6668C23.2843 33.6668 30 31.4282 30 28.6668C30 26.9199 27.3127 25.3824 23.241 24.4883C23.0051 24.7502 22.7668 25.0045 22.5269 25.2504C21.4064 26.399 20.2024 27.4143 19.0016 28.1599C17.8569 28.8707 16.455 29.5 15 29.5C13.545 29.5 12.1431 28.8707 10.9984 28.1599C9.7976 27.4143 8.59362 26.399 7.47312 25.2504C7.23321 25.0045 6.99487 24.7502 6.75902 24.4883Z" fill="white"></path>
              </svg>
           
              </div>
              <div className="">
                <p className='text-[#fff] font-semibold text-[18px]'>Set your location
</p>
                <p className='text-[#fff] py-2'>A high quality solution beautifully food <br className='hidden desktop:block' /> for customers

</p>
              </div>
            </div>
            {/* 2 */}
            <div className="bg-[#0d1634] my-8 flex items-center gap-4 desktop:gap-8 rounded-xl w-full desktop:max-w-[450px] shadow-primaryDark py-3 px-4">
              <div className=" bg-[#242a48] min-w-[60px] rounded-full py-2 px-2 flex justify-center items-center w-[60px] h-[60px]">
              <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M3.66634 10H0.333008V25L7.51773 28.5924C9.36914 29.5181 11.4106 30 13.4806 30H26.9997C28.8406 30 30.333 28.5076 30.333 26.6667C30.333 24.8257 28.8406 23.3333 26.9997 23.3333H24.3604C22.8079 23.3333 21.2768 22.9719 19.8882 22.2776L14.9863 19.8267C15.3068 19.5315 15.5716 19.1655 15.7544 18.739C16.4436 17.1307 15.7065 15.2676 14.1034 14.5662L3.66634 10Z" fill="white"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.666 0C19.5614 0 18.666 0.89543 18.666 2V13C18.666 14.1046 19.5614 15 20.666 15H31.666C32.7706 15 33.666 14.1046 33.666 13V2C33.666 0.895431 32.7706 0 31.666 0H20.666ZM27.8327 6.25C28.523 6.25 29.0827 5.69036 29.0827 5C29.0827 4.30964 28.523 3.75 27.8327 3.75H24.4993C23.809 3.75 23.2493 4.30964 23.2493 5C23.2493 5.69036 23.809 6.25 24.4993 6.25H27.8327Z" fill="white"></path>
            </svg>
           
              </div>
              <div className="">
                <p className='text-[#fff] font-semibold text-[18px]'>Select Food

</p>
                <p className='text-[#fff] py-2'>A high quality solution beautifully food  <br className='hidden desktop:block' /> for customers

</p>
              </div>
            </div>
            {/* 3 */}
            <div className="bg-[#0d1634] flex items-center gap-4 desktop:gap-8 rounded-xl w-full desktop:max-w-[450px] shadow-primaryDark py-3 px-4">
              <div className=" bg-[#242a48] min-w-[60px] rounded-full py-2 px-2 flex justify-center items-center w-[60px] h-[60px]">
              
            <svg width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M16.6667 0.332031H3.33333C1.49238 0.332031 0 1.82442 0 3.66537V30.332C0 32.173 1.49238 33.6654 3.33333 33.6654H16.6667C18.5076 33.6654 20 32.173 20 30.332V3.66536C20 1.82442 18.5076 0.332031 16.6667 0.332031Z" fill="white"></path>
                                                <path d="M10 8.66406H20C21.8409 8.66406 23.3333 10.1564 23.3333 11.9974V18.6641C23.3333 20.505 21.8409 21.9974 20 21.9974H10V8.66406Z" fill="white"></path>
                                                <path d="M11.6663 28.6667C11.6663 29.5871 10.9201 30.3333 9.99967 30.3333C9.0792 30.3333 8.33301 29.5871 8.33301 28.6667C8.33301 27.7462 9.0792 27 9.99967 27C10.9201 27 11.6663 27.7462 11.6663 28.6667Z" fill="white"></path>
                                                <path opacity="0.4" d="M9.99968 14.5L23.333 14.5L23.333 12L9.99968 12L9.99968 14.5Z" fill="white"></path>
                                            </svg>
              </div>
              <div className="">
                <p className='text-[#fff] font-semibold text-[18px]'>Pay Cash or Online

</p>
                <p className='text-[#fff] py-2'>A high quality solution beautifully food  <br className='hidden desktop:block' /> for customers

</p>
              </div>
            </div>

            {/* 4 */}
            <div className="bg-[#0d1634] my-8 flex items-center gap-4 desktop:gap-8 rounded-xl w-full desktop:max-w-[450px] shadow-primaryDark py-3 px-4">
              <div className=" bg-[#242a48] min-w-[60px] rounded-full py-2 px-2 flex justify-center items-center w-[60px] h-[60px]">
              <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M13.6663 0H6.99967C3.31778 0 0.333008 2.98477 0.333008 6.66667V20C0.333008 23.1087 2.46079 25.7204 5.33942 26.4583C5.44698 24.7144 6.89538 23.3333 8.66634 23.3333C10.5073 23.3333 11.9997 24.8257 11.9997 26.6667H20.333V6.66667C20.333 2.98477 17.3482 0 13.6663 0Z" fill="white"></path>
                                                <path d="M20.333 26.668V6.66797H25.6815C26.5284 6.66797 27.3435 6.9903 27.9613 7.56951L32.6128 11.9303C33.285 12.5604 33.6663 13.4407 33.6663 14.3621V23.3346C33.6663 25.1756 32.174 26.668 30.333 26.668H20.333Z" fill="white"></path>
                                                <path d="M12.8333 26.6667C12.8333 28.9679 10.9679 30.8333 8.66667 30.8333C6.36548 30.8333 4.5 28.9679 4.5 26.6667C4.5 26.5792 4.5027 26.4923 4.50801 26.4062C4.64247 24.2263 6.45296 22.5 8.66667 22.5C10.9679 22.5 12.8333 24.3655 12.8333 26.6667Z" fill="white"></path>
                                                <path opacity="0.4" d="M31.1587 26.6667C31.1587 28.9679 29.2932 30.8333 26.992 30.8333C24.6908 30.8333 22.8253 28.9679 22.8253 26.6667C22.8253 26.5792 22.828 26.4923 22.8333 26.4062C22.9678 24.2263 24.7783 22.5 26.992 22.5C29.2932 22.5 31.1587 24.3655 31.1587 26.6667Z" fill="white"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.08301 8.33203C9.08301 7.64168 9.64265 7.08203 10.333 7.08203L13.6663 7.08203C14.3567 7.08203 14.9163 7.64168 14.9163 8.33203C14.9163 9.02239 14.3567 9.58203 13.6663 9.58203L10.333 9.58203C9.64265 9.58203 9.08301 9.02239 9.08301 8.33203Z" fill="white"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 15C5.75 14.3096 6.30964 13.75 7 13.75L13.6667 13.75C14.357 13.75 14.9167 14.3096 14.9167 15C14.9167 15.6904 14.357 16.25 13.6667 16.25H7C6.30964 16.25 5.75 15.6904 5.75 15Z" fill="white"></path>
                                            </svg>
           
              </div>
              <div className="">
                <p className='text-[#fff] font-semibold text-[18px]'>Delivery or Pickup

</p>
                <p className='text-[#fff] py-2'>A high quality solution beautifully food  <br className='hidden desktop:block' /> for customers

</p>
              </div>
            </div>
           </div>

         
          
         
        </div>
      </div>
    </div>
  );
};

export default Process;
