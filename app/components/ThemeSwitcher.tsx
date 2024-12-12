'use client';

import { useEffect, useState } from 'react';
import { CiLight , CiDark } from "react-icons/ci";


export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>('myLightTheme');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'myLightTheme' ? 'myDarkTheme' : 'myLightTheme'));
  };

  return (
    <label  className="swap swap-rotate cursor-pointer">
        <input type="checkbox" onClick={toggleTheme}/>

        {/* sun icon */}
        <span className="swap-on h-10 w-10 fill-current text-4xl"> 
            <CiLight/>
        </span>

        {/* moon icon */}
        <span className="swap-off h-10 w-10 fill-current text-4xl">
            <CiDark/>
        </span>
    </label>
  );
}
