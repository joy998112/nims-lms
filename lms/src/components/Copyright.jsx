import React, { useEffect, useState } from 'react'
import './Copyright.css'

export default function Copyright() {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='copyright'>
      <p>Name | Email : support@name.com</p>
      <p>Copyright ⓒ {currentYear} Name</p>
      <p>Made with ❤️ in NIMS</p>
    </div>
  )
}
