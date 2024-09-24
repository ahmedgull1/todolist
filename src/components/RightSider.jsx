import React from 'react';

function RightSider({ isDarkMode, setIsDarkMode }) {
    return (
        <div className={`w-[17%] ${isDarkMode ? 'bg-[#2D3748]' : 'bg-[#F1F5F9]'} transition duration-300 h-screen sticky top-0`}>
            <div className=" flex justify-center gap-2 mt-6">
                <h1 className={`py-2 text-md font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Hi, User!</h1>
                <img className='w-[40px] h-[40px] rounded-full' src="/images.jpeg" alt="" />
            </div>
            <div className="flex px-10 gap-4 pt-8">
                <h1 className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Darkmode</h1>

                <label className="switch">
                    <input
                        name="check"
                        type="checkbox"
                        value={isDarkMode}
                        onChange={() => setIsDarkMode(!isDarkMode)} />

                    <span className="slider"></span>
                </label>
            </div>
        </div>
    );
}

export default RightSider;
