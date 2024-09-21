import React, { useState } from 'react';
import './Main.css';
import Nav from './Nav';
import Images4 from '../Assets/icons8-date-48.png';
import Images5 from '../Assets/icons8-trash-24.png';
import Images6 from '../Assets/icons8-add-50.png';
function Main({ lists, setLists, setDeletedItems, deletedItems  }) {
    const [strs, setStr] = useState('');
    return (
    <div className='in'>
        <Nav titile={"Today"}/>
        <div className='input-box'>
        <div className="boxy">
            <input 
            type="text" 
            value={strs} 
            onChange={(e) => setStr(e.target.value)} 
            placeholder=' + Add New Tasks' 
            />
            <button><img src={Images4} alt="" /></button>
            <button onClick={() => setLists([...lists, { id: Date.now(), text: strs, status: false,del:'non' }])}>
            <img src={Images6} alt="" />
            </button>
        </div>
        <div className="content">
            {lists.map((obj) => {
            return (
                <div className="page" key={obj.id}>
                <div className="inner">
                    <input 
                    type="checkbox" 
                    onChange={(e) => {
                        setLists(lists.map(item => {
                        if (item.id === obj.id) {
                            item.status = e.target.checked;
                        }
                        return item;
                        }));
                    }} 
                    checked={obj.status} 
                    />
                    <span className={obj.status ? 'line' : ''}>
                        {obj.text}
                    </span>
                </div>
                <button  onClick={() => {
                        setDeletedItems([...deletedItems, obj]);
                        setLists(lists.filter(item => item.id !== obj.id));
                        }}>
                    <img src={Images5} alt="" />
                </button>
                </div>
            );
            })}
        </div>
        </div>
    </div>
    );
}

export default Main;
