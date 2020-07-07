import React from 'react'
import './CloseSidebarBtn.css'

export default function CloseSidebarBtn() {
    function closeSidebar(e) {
        e.preventDefault();
        console.log("Click");
        document.getElementById('sidebar').style.width = '0';
        document.getElementById('sidebar').style.display = 'none';
    }
    return (
        <a href="#" className="closebtn" onClick={closeSidebar}>&times;</a>
    )
}
