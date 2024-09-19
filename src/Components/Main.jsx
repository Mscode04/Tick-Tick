import React, { useState } from 'react';
import { useEffect } from 'react';
import './Main.css';
import Images1 from '../Assets/icons8-menu-24.png';
import Images2 from '../Assets/icons8-sort-24.png';
import Images3 from '../Assets/icons8-more-30.png';
import Images4 from '../Assets/icons8-date-48.png';
import Images5 from '../Assets/icons8-trash-24.png';
import Images6 from '../Assets/icons8-add-50.png';
function Main({ lists, setLists,arr }) {
    useEffect(() => {
        return () => {
            
            
        };
    }, [arr])
    const [strs, setStr] = useState('');
    return (
    <div className='in'>
        <div className='input-box'>
        <div className="nav">
            <div className="lt">
            <img src={Images1} alt="" /><span>Today</span>
            </div>
            <div className="Rt">
            <img src={Images2} alt="" />
            <img src={Images3} alt="" />
            </div>
        </div>
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
            var date = new Date(obj.id);
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
                        {obj.text} : {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                    </span>
                </div>
                <button onClick={(e) => {
                        setLists(lists.map(item => {
                        if (item.id === obj.id) {
                            item.del = 'trash';
                            arr.push(item.text)
                            
                        }
                        return item;
                        }));
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
