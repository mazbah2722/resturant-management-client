import React from 'react';

const Error = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen">
            <h1 className="text-6xl font-bold text-red-600" >404</h1>
            <p className="text-4xl font-bold text-red-500">Not Found</p>
            <Link className="btn btn-neutral " to={"/"}>Back Home</Link>
        </div>
    );
};

export default Error;