import React from 'react';
import { useState} from "react";

//area where at recipe details (when you click on a recipe for details)
// specifically at the ingredients tabs / part the feature is handled
// to check and change color for the shopping list


function SingleIngredient ({ inputType, ingredient }) {

    const [checked, setChecked] = useState(false);

    return (
        <div>
            <input
                type={inputType}
                onChange={() => setChecked(!checked)}
            />

            {checked
                ? <li><p className="checked">{ingredient}</p></li>
                : <li><p>{ingredient}</p></li>
            }
        </div>
    );
}

export default SingleIngredient;

