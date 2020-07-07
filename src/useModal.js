import { useState } from 'react';

//Custom Modal Hook
const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);    
       
    function toggle() {
        setIsShowing(!isShowing);
    } 

    return {
        isShowing,
        toggle
    }
};

export default useModal;