import React from "react";
import './page-loader.css'

export const PageLoader: React.FC = () => {
    const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

    return (
        <div className="loader">
            <img src={loadingImg} alt="Loading..." />
        </div>
    );
};
