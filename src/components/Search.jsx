import React, {useState} from "react";


const Search = (props) => {
    const {searchMovies} = props

    const [search, setSearch] = useState('')
    const [type, setType] = useState('all')


    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type)
        }
    }

    const handleFilter = (event) => {
        setType(event.target.dataset.type)
        searchMovies(search, event.target.dataset.type)     
    }


    return  <div className="search">
                <div className="search-field">
                    <input
                        type="text" 
                        placeholder="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        onKeyDown={handleKey}>
                    </input>                             
                    <button className="search-button" onClick={() => searchMovies(search, type)}>
                    Search
                    </button>                   
                </div>
                <div className="select-type">
                    <label>
                        <input 
                            type="radio" 
                            name='type'
                            data-type="all" 
                            onChange={handleFilter}
                            checked={type === 'all'}
                            />
                        <span>All</span>
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name='type' 
                            data-type="movie"
                            onChange={handleFilter}
                            checked={type === 'movie'}
                            />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input 
                            type="radio"                                
                            name='type' 
                            data-type="series" 
                            onChange={handleFilter}
                            checked={type === 'series'} 
                            />
                        <span>Series only</span>
                    </label>
                </div>   
            </div>        
}

export {Search}