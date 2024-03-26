import React from 'react'

function ViewLoding() {
    return function ViewLodingComponent({isLoading, ...props}){
        // if (!isLoading) return <Component {...props} />;
        return (
            <div>
                <p style={{ fontSize: '25px'}}>
                    We are waiting for the data to load!...
                </p>
            </div>
        );
    };
}

export default ViewLoding;