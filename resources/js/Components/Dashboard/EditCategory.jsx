import React, { useEffect, useState } from "react";
import { Inertia } from '@inertiajs/inertia';

const FormCategory = ({ props, setEditButton }) => {
    const [ID, setID] = useState(props.id);
    const [name, setName] = useState(props.name);

    useEffect(() => {
        console.log('SELAMAT DATANG ID: ', ID);
        return () => {
            console.log('SAMPAI JUMPA ID: ', ID);
        };
    }, [ID]);

    const handleSubmit = () => {
        const updateCategory = {
            id: ID,
            name: name,
        };
        console.log("POST UPDATE CATEGORY: ", updateCategory);
        Inertia.post('/category/update', updateCategory);
        clearState();

    };


    const clearState = () => {
        setID();
        setName('');
        setEditButton(false);
    };

    return (
        <>
            <input type="checkbox" id="edit-category" className="modal-toggle" />
            <div className="modal overflow-hidden">
                <div className="modal-box bg-base100">
                    <h2 className="font-bold text-lg">Edit category</h2>

                    <div className="py-4 space-y-4">
                        <input type="text" placeholder="Category Name" onChange={(name) => setName(name.target.value)} defaultValue={name} className="input input-bordered w-full max-w-full bg-inherit" />


                    </div>

                    <div
                        className="modal-action">
                        <label htmlFor="edit-category" className="btn btn-outline" onClick={() => clearState()}>Cancel</label>
                        <label htmlFor="edit-category" onClick={() => handleSubmit()} className="btn btn-primary">Submit</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormCategory;