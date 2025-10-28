import React from 'react';
import Instruction from '../../Component/Instruction/Instruction';
import Setup from '../../Component/SetUp/Setup';
import DataShow from '../../Component/DataShow/DataShow';
import BlogCreate from '../../Component/BlogCreate/BlogCreate';
import EditBlog from '../../Component/EditBlog/EditBlog';

const HomePage = () => {
    return (
        <div className= "min-h-screen bg-linear-to-t from-sky-500 to-indigo-500">
            <Instruction />
            <Setup />
            <BlogCreate />
            <DataShow />
            <EditBlog />
            
        </div>
    );
};

export default HomePage;