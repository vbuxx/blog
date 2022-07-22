import React, { useEffect, useState } from "react";
import { Inertia } from '@inertiajs/inertia';
import CategorySelector from "./CategorySelector";


export default function EditPost({ props, categories, setEditButton }) {
    const [ID, setID] = useState(props.id);
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    const [category, setCategory] = useState(props.category.id);
    const [image, setImage] = useState(props.image);


    useEffect(() => {
        console.log('SELAMAT DATANG ID: ', ID);
        return () => {
            console.log('SAMPAI JUMPA ID: ', ID);
        };
    }, [ID]);



    const handleSubmit = () => {
        const updateData = {
            id: ID,
            title: title,
            content: content,
            category: category,
            image: image
        };
        console.log("POST UPDATE: ", updateData);
        Inertia.post('/article/update', updateData);
        clearState();

    };


    const clearState = () => {
        setID();
        setTitle('');
        setContent('');
        setCategory();
        setImage('');
        setEditButton(false);
    };


    return (
        <>

            <input type="checkbox" id='edit-post' className="modal-toggle" />
            <div className="modal overflow-hidden">
                <div className="modal-box bg-base100">
                    <h2 className="font-bold text-lg">Edit post</h2>

                    <div className="py-4 space-y-4">
                        <input type="text" placeholder="Title" className="input input-bordered w-full max-w-full bg-inherit" onChange={(title) => setTitle(title.target.value)} defaultValue={title} />
                        <CategorySelector categories={categories} categoryState={category} categorySetState={setCategory} />
                        <textarea className="w-full h-96 textarea block textarea-bordered" placeholder="Content" onChange={(content) => setContent(content.target.value)} defaultValue={content} ></textarea>

                        <form className="flex items-center space-x-6">
                            <label className="block">
                                <span className="sr-only">Choose an image</span>
                                <input type="file" className="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100"/>
                            </label>
                        </form>
                    </div>

                    <div
                        className="modal-action">
                        <label htmlFor='edit-post' className="btn btn-outline" onClick={() => clearState()}>Cancel</label>
                        <label htmlFor='edit-post' className="btn btn-primary" onClick={() => handleSubmit()}>Edit</label>
                    </div>
                </div>
            </div>
        </>
    );
}