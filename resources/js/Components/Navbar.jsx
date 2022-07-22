import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Navbar({ auth, subheader, isDashboard }) {
    //console.log('navbar user:::: ', auth.user);
    return (
        <>
            <div className="navbar bg-base-100 shadow-md lg:max-w-full lg:px-5 dark:text-white dark:bg-gray-800">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost normal-case text-xl">Larablog </Link>
                    {subheader}
                </div>
                <div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost flex flex-row gap-4">
                            <div className="form-control">
                                {auth.user ? <div><p>Hai, {auth.user.name}!</p></div>
                                    : !isDashboard && <div><p>Hai, there!</p></div>
                                }
                            </div>

                            <img src="https://placeimg.com/80/80/people" className="w-10 rounded-full " />

                        </label>
                        <ul tabIndex="0" className="mt-3 p-2 shadow-xl menu menu-compact dropdown-content bg-base-100 rounded-box w-52 dark:text-white dark:bg-gray-800">
                            {!auth.user ? <>
                                <li><Link href={route('register')} as="button">Register</Link></li>
                                <li><Link href={route('login')} as="button">Login</Link></li>
                            </>
                                :
                                <>
                                    {!isDashboard ?
                                        <li>
                                            <Link href={route('dashboard')} as="button" className="justify-between">
                                                Dashboard
                                                <span className="badge">New</span>
                                            </Link>
                                        </li>
                                        :
                                        <li>
                                            <Link href="/" as="button" className="justify-between">
                                                Homepage
                                                <span className="badge">New</span>
                                            </Link>
                                        </li>}

                                    {/* <li><Link as="button">Settings</Link></li> */}
                                    <li><Link href={'logout'} method="post" as="button">Logout</Link></li>
                                </>}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}