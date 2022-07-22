import React, { useState, useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import FormPost from '@/Components/Dashboard/FormPost';
import FormCategory from '@/Components/Dashboard/FormCategory';
import PostTable from '@/Components/Dashboard/PostTable';
import EditPost from '@/Components/Dashboard/EditPost';
import SideBar from '@/Components/SideBar';
import Navbar from '@/Components/Navbar';
import CategoryTable from "@/Components/Dashboard/CategoryTable";
import EditCategory from "@/Components/Dashboard/EditCategory";



export default function Dashboard(props) {
    const [articleOnUpdate, setArticleOnUpdate] = useState();
    const [categoryOnUpdate, setCategoryOnUpdate] = useState();
    const [editButton, setEditButton] = useState(false);
    const [sideNav, setSideNav] = useState('article');
    let data = {
        id: null,
        title: null,
        content: null,
        category: null,
        image: null,
    };
    let myArray;
    let result;


    if (articleOnUpdate != null) {
        myArray = props.userArticle;
        result = myArray.filter(prop => {
            return prop.id == articleOnUpdate;
        });
        //console.log('cek result: ', result[0]);
        data = {
            id: articleOnUpdate,
            title: result[0].title,
            content: result[0].content,
            category: result[0].category,
            image: result[0].image,
        };

    }

    useEffect(() => {
        !editButton && setArticleOnUpdate();

    }, [editButton]);

    console.log('cek data: ', props);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <FormPost data={props} />
            <FormCategory data={props} />
            <Head title="Dashboard" />
            <div className="flex flex-col h-screen ">
                <Navbar auth={props.auth} subheader={'/ Dashboard'} isDashboard={true} />
                <div>
                </div>
                <div className="flex h-screen">
                    <SideBar sideNav={sideNav} setSideNav={setSideNav} />
                    {
                        sideNav != 'category' ?
                            < div className="p-10 bg-slate-200">
                                <div className="flex justify-center max-w-screen mx-auto sm:px-6 lg:px-8">
                                    <div className="flex flex-col p-6 shadow-2xl rounded-xl bg-base-100 border-gray-600">
                                        <div className="pb-5">
                                            <label htmlFor="create-post" className="btn modal-button">Create a Post</label>
                                        </div>
                                        <PostTable article={props.userArticle}
                                            setArticleOnUpdate={setArticleOnUpdate}
                                            setEditButton={setEditButton} />
                                        {
                                            editButton &&
                                            <EditPost props={data}
                                                setEditButton={setEditButton}
                                                categories={props.userCategories} />
                                        }
                                    </div>
                                </div>
                            </div>
                            :
                            < div className="p-10 bg-slate-200">
                                <div className="flex justify-center max-w-screen mx-auto sm:px-6 lg:px-8">
                                    <div className="flex flex-col p-6 shadow-2xl rounded-xl bg-base-100 border-gray-600">
                                        <div className="pb-5">
                                            <label htmlFor="add-category" className="btn modal-button">Add a New Category</label>
                                        </div>
                                        <CategoryTable category={props.userCategories}
                                            setCategoryOnUpdate={setCategoryOnUpdate}
                                            setEditButton={setEditButton} />
                                        {
                                            editButton &&
                                            <EditCategory props={categoryOnUpdate}
                                                setEditButton={setEditButton}
                                            />
                                        }
                                    </div>
                                </div>
                            </div>
                    }
                </div>

            </div>
        </Authenticated >
    );
}
