import React from 'react';
import HomeCodeCard from '../HomeCodeCard/HomeCodeCard';
import CardDetails from '../CardDetails/CardDetails';
import BlogListDetails from '../BlogListDetails/BlogListDetails';

const DataShow = () => {
    return (
        <div>
            <h3 className='text-4xl font-bold text-center text-white'>Data showing UI</h3>
            <div className='flex justify-center gap-2'>
            
            <HomeCodeCard />
            <CardDetails />
            <BlogListDetails />

        </div>
        </div>
    );
};

export default DataShow;