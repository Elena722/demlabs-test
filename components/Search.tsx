const Search = () =>{
    return(
        <div className="search search_position">
                <div className="search__form">
                    <div className="search__logo">
                        <img src="/landing/search.svg" alt="" />
                    </div>
                    <div className="search__input">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
            </div>
    )
}

export {Search};