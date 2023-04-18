import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai';
import {useState} from 'react';

interface Product {
    id: string;
    name: string;
}


const Items:(Product[]) = [
    {
        id: "1",
        name: "All"
    },
    {
        id: "2",
        name: "Meals"
    },
    {
        id: "3",
        name: "Drinks",
    },
    {
        id: "4",
        name: "Pastries"
    },
    {
        id: "5",
        name: "Sides"
    },
    {
        id: "6",
        name: "Grills"
    },
    {
        id: "7",
        name: "Desserts"
    }
    
]


function Filters() {
    const [active, setActive] = useState<any>({
        "0":"All",
        "1":"Meals",
        "2":"Drinks",
        "3":"Pastries",
        "4":"Sides",
        "5":"Grills",
        "6":"Desserts"
        }
    );

    const [count, setCount] = useState<number>(0);

const [filter, setFilter] = useState<string>(active[`${count}`]);




console.log(active[`${count}`])


    return (
        <div className="filters">
        <AiOutlineLeft size={26} className="filters__icon" onClick={() => {setCount((prevValue) => prevValue > 0 ?  prevValue - 1 : 6)} } />
        <div className='filters__list'>
            {
                Items.map((item, index) => (
                    <p key={index} className={ index === count ? "filters__active" : " "} onClick={() => {setFilter(`${item.name}`); setCount(index)}}>{item.name}</p>
                ))
            }
        </div>
        <AiOutlineRight size={26} className="filters__icon" onClick={() => {setCount((prevValue) => prevValue < 6  ?  prevValue + 1 : 0)} }  />
        </div>
      );
}

export default Filters