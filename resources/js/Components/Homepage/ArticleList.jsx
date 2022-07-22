import React from "react";


const isArticle = (article) => {
    return article.map((data, i) => {
        const date = data.updated_at;
        let myDate = date.split('T');
        let clock = myDate[1].split('.');
        //console.log(myDate);
        return (
            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl h-auto">
                <figure><img src={data.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                    </h2>
                    <p>{data.content}</p>
                    <div className="flex flex-row justify-between">

                        <div className="card-actions">
                            <div className="badge p-3">
                                {
                                    clock[0]
                                }
                            </div>


                        </div>
                        <div className="card-actions">
                            <div className="badge badge-outline p-3">Fashion</div>
                            <div className="badge badge-outline p-3">Products</div>
                        </div>

                    </div>
                </div>
            </div>

        );
    });
};



const noArticle = () => {
    return (
        <div className="flex min-h-screen bg-inherit items-center">
            <div className="text-xl">
                Belum ada postingan
            </div>
        </div>
    );
};

const ArticleList = ({ article }) => {
    return (
        <div className="flex justify-center flex-col  lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
            {
                !article ? noArticle() : isArticle(article)
            }
        </div>
    );

};

export default ArticleList;