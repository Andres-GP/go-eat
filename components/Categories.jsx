import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {
    const [categories, setcategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setcategories(newCategories))
    }, []);
    return (
        <div className="bg-neutral-800 shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-neutral-300 mb-8 font-semibold border-b pb-4 border-neutral-700 ">
                Categories
            </h3>
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="cursor-pointer hover:translate-x-2 hover:text-neutral-100 duration-300 block pb-3 mn-3 text-neutral-400">
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Categories
