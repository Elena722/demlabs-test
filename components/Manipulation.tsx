const Manipulation=()=>{
    return(
        <aside className="right-menu right-menu_position">
        <p className="right-menu__title">Filter</p>
        <div className="block-radio-buttons block-radio-buttons_position">
        {filters.map((filter:any)=>(
        <div key={filter.id} className="block-radio-buttons__item">
            <input type="radio" name="radio-filter" value={filter.status}
            onChange={e => setStatus(e.target.value)}/>
            <label htmlFor={filter.status} className="label">{filter.title}</label>
        </div>
        ))}
        </div>
        <p className="right-menu__title">Actions</p>
        <div className="block-buttons">
            <button className="block-buttons__item">
                Create token
            </button>
            <button className="block-buttons__item">
            Import token
            </button>
            <button className="block-buttons__item" disabled>
            Export private token to public              
            </button>
            <button className="block-buttons__item" disabled>
            Export token to mempool
            </button>
            <button className="block-buttons__item">
            Delete token
            </button>
        </div>
    </aside>
    )
}

export {Manipulation};