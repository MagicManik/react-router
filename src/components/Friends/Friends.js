import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

// 1: ডাটা লোড করে ফ্রেন্ড এ পাঠাবো।
const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);
    return (
        <div>
            <h2>This Is My Friends Component. My Total Friend {friends.length}</h2>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;