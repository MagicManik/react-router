import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>This Is My Router Website Header</h1>
            <Link to={"/"}>Home</Link>
            <Link to={"/friends"}>Friends</Link>
            <Link to={"/about"}>About</Link>

            {/* Nested Routes */}
            <Link to={"/posts"}>Post</Link>
        </div>
    );
};

export default Header;