import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://the-news-dragon-server-sazzads.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h4>All Category</h4>
<div className='p-4'>
{
                categories.map(category=><p key={category.id}>
                    <Link className='text-decoration-none text-black' to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
</div>
        </div>
    );
};

export default LeftNav;