import React from 'react';
import Instruction from '../../Component/Instruction/Instruction';
import Setup from '../../Component/SetUp/Setup';
import RouterCodeCard from '../../Component/RouterCodeCard/RouterCodeCard';

const HomePage = () => {
    return (
        <div className= "min-h-screen bg-linear-to-t from-sky-500 to-indigo-500">
            <Instruction />
            <Setup />
           
        </div>
    );
};

export default HomePage;