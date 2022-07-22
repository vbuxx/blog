import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

const PostTable = ({ article, setArticleOnUpdate, setEditButton }) => {

    //console.log('Edit data with ID: ', editData);

    return (
        <div className="overflow-x-auto max-w-full">
            <table className="table table-fixed table-compact w-full">
                <thead>
                    <tr>
                        <th className="w-8">No.</th>
                        <th className="w-1/6">Title</th>
                        <th className="w-2/5">Content</th>
                        <th className="w-1/7">Image</th>
                        <th className="">Category</th>
                        <th className="w-1/7">Updated at</th>
                        <th className="flex justify-center">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        !article ? noArticle() : isArticle(article, setArticleOnUpdate, setEditButton)
                    }
                </tbody>

            </table>

        </div>

    );

};

const isArticle = (article, setArticleOnUpdate, setEditButton) => {

    const handleDelete = (data) => {
        Inertia.post('/article/delete', data);
    };

    const handleClick = (data) => {
        setArticleOnUpdate(data.id);
        setEditButton(true);
    };

    const submit = (e) => {
        e.preventDefault();

    };
    return article.map((data, i) => {
        let date = data.updated_at;
        let myDate = date.split('T');
        let myClock = myDate[1].split('.');
        date = myDate[0] + ' | ' + myClock[0];

        return (
            <tr key={i}>
                <th>{i + 1}</th>
                <td className="truncate">{data.title}</td>
                <td className="truncate">{data.content}</td>
                <td className="truncate">{data.image}</td>
                <td className="truncate">{data.category.name}</td>
                <td className="truncate ">{date}</td>
                <td>
                    <div className="flex flex-row gap-3 justify-center">
                        <label htmlFor="edit-post" onClick={() => handleClick(data)}><FiEdit2 className="text-xl modal-botton" /></label>
                        <div onClick={() => handleDelete(data)}><RiDeleteBinLine className="text-xl" />  </div>
                    </div>

                </td>

            </tr>


        );
    });
};



const noArticle = () => {
    return (
        <tr>
            <th>1</th>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>


        </tr>

    );
};


export default PostTable;