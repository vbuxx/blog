import React, { useEffect, useState } from "react";
import { Inertia } from '@inertiajs/inertia';

const FormCategory = ({ data }) => {
    const [name, setName] = useState('');

    const handleSubmit = () => {
        const data = {
            name
        };
        console.log('POST: ', data);
        Inertia.post('/category', data);
        setName('');
    };

    useEffect(() => {
        if (!data) {
            Inertia.get('/category');
        }
        return;
    }, []);
    return (
        <>
            <input type="checkbox" id="add-category" className="modal-toggle" />
            <div className="modal overflow-hidden">
                <div className="modal-box bg-base100">
                    <h2 className="font-bold text-lg">Add a new category</h2>

                    <div className="py-4 space-y-4">
                        <input type="text" placeholder="Category Name" onChange={(name) => setName(name.target.value)} value={name} className="input input-bordered w-full max-w-full bg-inherit" />


                    </div>

                    <div
                        className="modal-action">
                        <label htmlFor="add-category" className="btn btn-outline">Cancel</label>
                        <label htmlFor="add-category" onClick={() => handleSubmit()} className="btn btn-primary">Submit</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormCategory;