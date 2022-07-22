import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Guest>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors} />



            <form className="space-y-4" onSubmit={submit}>
                <div className="flex justify-center">
                    <div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign In</h3>
                    </div>
                </div>

                <div>
                    <Label forInput="email" value="Email" />
                    <Input
                        type="text"
                        name="email"
                        placeholder="example@company.com"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>
                <div>
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        placeholder="Your Password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>
                <div className="flex justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <Checkbox name="remember" value={data.remember} handleChange={onHandleChange}
                            />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                </div>
                <Button processing={processing}>
                    Log in
                </Button>

                <div className="flex justify-center">

                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?
                        <Link
                            href={route('register')}
                            className="text-sm pl-2 text-blue-700 hover:underline dark:text-blue-500"
                        >
                            Create account
                        </Link>
                    </div>
                </div>

            </form>


        </Guest>
    );
}
