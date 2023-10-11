'use client'

import { useState } from "react";

export default function List() {

    let products = ['tomatoes', 'pasta', 'coconut'];
    let [like, setLike] = useState(Array(products.length).fill(0));

    const addLike = (index) => {
        let newLike = [...like];
        newLike[index]++;
        setLike(newLike);
    }

    return (
        <div>
            {
                products.map((item, index) => (
                    <div key={index}>
                        <img src={`/food${index}.png`} />
                        <h4>{item} $40</h4>
                        <span>{like[index]}</span>
                        <button onClick={() => addLike(index)}>+</button>
                    </div>
                ))
            }
        </div>
    )
}