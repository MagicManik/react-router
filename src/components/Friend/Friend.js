import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// ২। ডেটাকে দেখাবো এবং একটা ইভেন্ট হ্যান্ডেলার এ্যাড করবো।
// ইভেন্ট হ্যান্ডেলারের কাজ হবে এমন একটা ডাইনামিক path তৈরি করা যাকে ক্লিক করলে ফ্রেন্ডডিটেইলস দেখাবে।
const Friend = ({ friend }) => {
    const { name, username, id } = friend;

    const navigate = useNavigate();
    const showFriendDetail = () => {
        // navigate('/friend/' + id)
        const path = `/friend/${id}`
        navigate(path);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <Link to={'/friend/' + id}>Show Friend Details</Link>
            <button onClick={showFriendDetail}>{username}: {id}</button>
        </div>
    );
};

export default Friend;