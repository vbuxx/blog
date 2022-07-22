import React, { useEffect } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    useEffect(() => {
        document.body.style.backgroundColor = 'red';
    }, []);

    return (
        // < !--component -- >
        <>
            {/* <!-- Main modal --> */}
            <div className="fixed flex w-full min-h-full overflow-x-hidden overflow-y-auto md:inset-0 md:h-full justify-center items-center dark:bg-gray-900">
                <div className="relative w-full h-full max-w-md  p-4 md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className='flex justify-center pt-6'>
                            <Link href="/">
                                <ApplicationLogo className="w-20 h-20 fill-current text-gray-500 transform transition hover:scale-105 duration-700 ease-in-out hover:rotate-90" />
                            </Link>
                        </div>

                        <div className="px-6 py-6 lg:px-8">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
}
