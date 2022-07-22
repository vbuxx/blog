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

const CategorySelector = ({ categories, categoryState, categorySetState }) => {
    //console.log('table data= ', categories);
    return (
        <select onChange={(categoryState) => categorySetState(categoryState.target.value)} value={categoryState} className="select select-bordered w-1/2">
            <option disabled value="">Select category</option>
            {
                !categories ? noCategory() : isCategory(categories)
            }
        </select>


    );

};


export default CategorySelector;
