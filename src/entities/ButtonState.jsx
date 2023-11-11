import { useState } from 'react';

export const ButtonState = () => {
    const [value, valueChange] = useState(0);

    return (
        <div>
            <p className="Text">Хук 1: useState</p>
            {value}
            <button onClick={() => valueChange(value + 1)}>
            Увеличить значение на 1
            </button>
        </div>    
    )
}