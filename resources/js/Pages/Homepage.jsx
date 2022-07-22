import ArticleList from "@/Components/Homepage/ArticleList";
import Pagination from "@/Components/Homepage/Pagination";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/inertia-react";
import React from "react";


export default function Homepage(props) {
    console.log('homepage: ', props);
    return (
        <div className="min-h-screen max-w-full bg-slate-100">
            <Head title='Homepage' />
            <Navbar auth={props.auth} />
            <ArticleList article={props.article.data} />
            <div className="flex justify-center">
                <Pagination meta={props.article.meta} />
            </div>
        </div>
    );
}