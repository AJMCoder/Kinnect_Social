import { useEffect, useRef, useState } from 'react';

const useClickOutsideToggle = () => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Ignore clicks inside the notification dropdown
      const notificationDropdown = document.getElementById('dropdown-basic');
      
      // Collapse navbar only if click is outside the navbar and notification dropdown
      if (ref.current && !ref.current.contains(event.target) && !notificationDropdown?.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);

  return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;
