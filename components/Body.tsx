'use client';
import { useState, useEffect } from 'react';


type Props = {
    title:string;
    selectedStatus:string;
    filters:any[];
    buttons:any[];
    data:any[];
};

const Body = ({ title, selectedStatus, data, filters, buttons }:Props)=>{

    const [status, setStatus] = useState(selectedStatus);

    return(
        <div className="body__content">
            <section className="content content_position">
                <div className="content__block">
                    <div className="content__title">
                        {title}
                    </div>
                </div>
                <div className="content__block">
                    <div className="content__filter">
                        {status}
                    </div>
                </div>
                {data.map((item:any)=>(
                    status==='both'?
                    (<div key={item.id} className="content__block">
                    <div className="content__info">
                    {item.name}
                    </div>
                </div>):
                item.status===status?
                (<div key={item.id} className="content__block">
                    <div className="content__info">
                    {item.name}
                    </div>
                </div>): null
                ))}
            </section>
            <aside className="right-menu right-menu_position">
                <p className="right-menu__title">Filter</p>
                <div className="block-radio-buttons block-radio-buttons_position">
                {filters.map((filter:any)=>(
                <div key={filter.id} className="block-radio-buttons__item">
                    <input type="radio" name="radio-filter" value={filter.status} defaultChecked={filter.status === status}
                    onChange={e => setStatus(e.target.value)}/>
                    <label htmlFor={filter.status} className="label">{filter.title}</label>
                </div>
                ))}
                </div>
                <p className="right-menu__title">Actions</p>
                <div className="block-buttons">
                    {buttons.map((button=>
                    <button key={button.id} className="block-buttons__item" disabled={button.disabled}>
                        {button.title}
                    </button>
                    ))}
                </div>
            </aside>
        </div>
    )
}

export {Body};