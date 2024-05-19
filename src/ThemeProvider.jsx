
import React from 'react'

const ThemeProvider = ({children}) => {
    const Theme= localStorage.getItem('Theme');
    //console.log(Theme);
    

  return (
    <div className={`pb-[10px] ${Theme === "darkMod" ? "dark" :""} `}>{children}</div>
  )
}

export default ThemeProvider