"use client";

import React, {useEffect, useState} from 'react';
import Image from 'next/image';

const MinimumScreen: React.FC = () => {
    const [isMoreThan500px, setIsMoreThan500px] = useState(window.innerWidth > 500);

    useEffect(() => {
        const handleResize = () => {
            setIsMoreThan500px(window.innerWidth > 500);
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
            {isMoreThan500px && (
                <div>
                    <div className="flex justify-center items-center">
                        <Image src = "/images/error-404.svg" alt = "404 Error" width = "250" height = "50"/>
                    </div>
                    <div className='text-center'>
                        This site is optimised for browsers lesser than 500px only.
                    </div>
                </div>
            
            )}
        </div>
    );
};

export default MinimumScreen;