import React, { useState } from 'react';
import useDarkTheme from '../hook/useDarkTheme';
import { DarkModeSwitch } from 'react-toggle-dark-mode'

const ThemeSwitch = () => {
    const [colorTheme, setTheme] = useDarkTheme();
    const [darkTheme, setDarkTheme] = useState(colorTheme === 'light' ? true : false);
    
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkTheme(checked);
    }
    return(
        <div className='flex flex-col items-center'>
            <DarkModeSwitch 
                checked={darkTheme} 
                onChange={toggleDarkMode}
                size={20}
                moonColor={'#dfc8ba'}
                sunColor={'#263242'}
            />
        </div>
    );

}

export default ThemeSwitch;