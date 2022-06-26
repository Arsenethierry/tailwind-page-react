import React from 'react';

function Navbar() {
    return (
        <div className='w-screen h-12 md:h-[60px] z-10 bg-indigo-600 fixed drop-shadow-lg'>
            <div className='flex md:items-center px-2 flex w-full h-full'>
                <h1 className='text-3xl text-white font-bold mr-4 sm:txt-4xl'>KAHOLAS INTERNSHIP</h1>
            </div>
        </div>
    );
}

export default Navbar;