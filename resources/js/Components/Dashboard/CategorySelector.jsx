import React from "react";

const isCategory = (categories) => {
    return categories.map((data, i) => {

        return (

            <option value={data.id} key={i}>{data.name}</option>



        );
    });
};



const noCategory = () => {
    return (
        <option disabled value="">None</option>

    );
};

const CategorySelector = ({ categories, categorySetState, defaultValue = 87978 }) => {

    const select = 87978;
    return (
        <select onChange={(e) => categorySetState(e.target.value)} defaultValue={defaultValue} className="select select-bordered w-1/2">
            <option disabled value={select}>Select category</option>
            {
                !categories ? noCategory() : isCategory(categories)
            }
        </select>


    );

};


export default CategorySelector;
