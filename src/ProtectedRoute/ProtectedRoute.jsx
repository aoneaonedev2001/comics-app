import React, { useEffect, useState } from 'react';
import Alret18 from '../component/Alret18';

const ProtectedRoute = ({ children }) => {
  const [isAllowed, setIsAllowed] = useState(false);
  
  useEffect(() => {
  
    const storedIsAllowed = localStorage.getItem('enterAge');
    if (storedIsAllowed === 'true') {
      setIsAllowed(true);
    }
  }, []);
  
  const enterAge = (ConfirmAge) => {
    if (ConfirmAge === true) {
      localStorage.setItem('enterAge', 'true');
      setIsAllowed(true);
    }
  };

  if (isAllowed) {
    return children;
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <Alret18 enterAge={enterAge} />
    </div>
  );
};

export default ProtectedRoute;
