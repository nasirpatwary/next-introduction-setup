import React from 'react';

const layout = ({children}) => {
    return (
        <div className='grid grid-cols-12'>
            {/* side bar */}
           <div className='col-span-3 border'>
                <ul>
                    <li>Document</li>
                    <li>Services</li>
                    <li>Admin</li>
                    <li>Boookings</li>
                </ul>
            </div>
             {/* dashboard content  */}
             <div className='col-span-9 border'>
             {children}
             </div>
        </div>
    );
};

export default layout;