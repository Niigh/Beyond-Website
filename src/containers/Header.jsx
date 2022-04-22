import React from 'react';

const Header = () => {
    return (
        <div className="py-[9%]">
            <div className="flex space-x-2 justify-center">
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                    Add to Discord
                </button>

                <button type="button" className="text-[#ecdfd6] dark:text-[color:var(--color-bg)] bg-gradient-to-r from-[color:var(--color-text)] to-[color:var(--color-p)] hover:bg-gradient-to-br shadow-lg shadow-[color:var(--color-text)] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                    See features
                </button>
            </div>
        </div>
    )
}

export default Header;