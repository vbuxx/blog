import React from 'react';
import Navbar from '@/Components/Navbar';
import SideBar from '@/Components/SideBar';

export default function Authenticated({ auth, header, children }) {

    return (
        <>


            {header && (
                <header className="bg-white shadow dark:bg-gray-800 ">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 dark:text-white ">{header}</div>
                </header>
            )}

            <main>
                <div>
                    {children}
                </div>

            </main>
        </>
    );
}
