import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

const CategoryTable = ({ category, setCategoryOnUpdate, setEditButton }) => {

    //console.log('Edit data with ID: ', editData);

    return (
        <div className="overflow-x-auto max-w-full">
            <table className="table table-fixed table-compact w-full">
                <thead>
                    <tr>
                        <th className="w-8">No.</th>
                        <th className="w-1/6">Name</th>
                        <th className="w-1/7">Updated at</th>
                        <th className="flex justify-center">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        !category ? noCategory() : isCategory(category, setCategoryOnUpdate, setEditButton)
                    }
                </tbody>

            </table>

        </div>

    );

};

const isCategory = (category, setCategoryOnUpdate, setEditButton) => {

    const handleDelete = (data) => {
        Inertia.post('/category/delete', data);
    };

    const handleClick = (data) => {
        setCategoryOnUpdate(data);
        setEditButton(true);
    };

    const submit = (e) => {
        e.preventDefault();

    };
    return category.map((data, i) => {
        let date = data.updated_at;
        let myDate = date.split('T');
        let myClock = myDate[1].split('.');
        date = myDate[0] + ' | ' + myClock[0];

        return (
            <tr key={i}>
                <th>{i + 1}</th>
                <td className="truncate">{data.name}</td>
                <td className="truncate ">{date}</td>
                <td>
                    <div className="flex flex-row gap-3 justify-center">
                        <label htmlFor="edit-category" onClick={() => handleClick(data)}><FiEdit2 className="text-xl modal-botton" /></label>
                        <div onClick={() => handleDelete(data)}><RiDeleteBinLine className="text-xl" />  </div>
                    </div>
                </td>
            </tr>


        );
    });
};



const noCategory = () => {
    return (
        <tr>
            <th>1</th>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>

    );
};


export default CategoryTable;