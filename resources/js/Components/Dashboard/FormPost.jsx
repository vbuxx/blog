import React, { useEffect, useState } from "react";
import { Inertia } from '@inertiajs/inertia';
import CategorySelector from "./CategorySelector";
// import Input from "@/Components/Modal";

export default function FormPost({ data }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    //console.log('Props modal: ', data);
    const handleSubmit = () => {
        const data = {
            title, content, category, image
        };
        console.log('POST: ', data);
        Inertia.post('/article', data);
        setTitle('');
        setContent('');
        setCategory('');
        setImage('');
    };

    useEffect(() => {
        if (!data) {
            Inertia.get('/article');
        }
        return;
    }, []);

    return (
        <>

            <input type="checkbox" id="create-post" className="modal-toggle" />
            <div className="modal overflow-hidden">
                <div className="modal-box bg-base100">
                    <h2 className="font-bold text-lg">Create a new posts</h2>

                    <div className="py-4 space-y-4">
                        <input type="text" placeholder="Title" className="input input-bordered w-full max-w-full bg-inherit" onChange={(title) => setTitle(title.target.value)} value={title} />
                        <CategorySelector categories={data.userCategories} categoryState={category} categorySetState={setCategory} />
                        <textarea className="w-full h-96 textarea block textarea-bordered" placeholder="Content" onChange={(content) => setContent(content.target.value)} value={content} ></textarea>

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
                        <label htmlFor="create-post" className="btn btn-outline">Cancel</label>
                        <label htmlFor="create-post" className="btn btn-primary" onClick={() => handleSubmit()}>Submit</label>
                    </div>
                </div>
            </div>
        </>
    );
}