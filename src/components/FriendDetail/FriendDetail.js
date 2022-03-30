import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams();
    // যেহেতু এই Component এর সাথে Route এর একটা ডাইনামিক প্যারামিটার বা URL আছে তাই আমরা useParams দিয়ে ঐ Route এর ডাইনামিক অংশটা কী তা জানতে পারি। note: use প্যারামসকে কল করলে সে আমাদের একটা অবজেক্ট দিবে। তাই আমরা একে ডিস্ট্রাকচারিং করতে পারি।
    const { friendId } = useParams();

    const [friend, setFriend] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [friendId])

    return (
        <div>
            {/* <h1>This Is My Friend Detail Compo {params.friendId}</h1> */}
            <h1>This Is My Friend Detail Compo {friendId}</h1>
            <h3>Name: {friend.name}</h3>
            <p><b>Email:</b> {friend.email}</p>
            <p><b>Username:</b> {friend.username}</p>
            <p><b>Address</b> {friend.address?.city}</p>
            <p><b>Lng:</b> {friend.address?.geo?.lng}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit aliquid obcaecati atque delectus dolor architecto nobis ipsum, aliquam ea eos at veritatis perferendis accusantium vel voluptates officiis error consectetur.</p>
        </div>
    );
};

export default FriendDetail;