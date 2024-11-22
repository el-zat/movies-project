import React from "react";


class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        } )
        
    }


    render() {
        return  <div className="search">
                    <div className="search-field">
                        <input
                            type="text" 
                            placeholder="search"
                            value={this.state.search}
                            onChange={(event) => this.setState({search: event.target.value})}
                            onKeyDown={this.handleKey}>
                        </input>                             
                        <button className="search-button" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>
                        Search
                        </button>                   
                    </div>
                    <div className="select-type">
                        <label>
                            <input 
                                type="radio" 
                                name='type'
                                data-type="all" 
                                onChange={this.handleFilter}
                                checked={this.state.type === 'all'}
                                />
                            <span>All</span>
                        </label>
                        <label>
                            <input 
                                type="radio"
                                name='type' 
                                data-type="movie"
                                onChange={this.handleFilter}
                                checked={this.state.type === 'movie'}
                                />
                            <span>Movies only</span>
                        </label>
                        <label>
                            <input 
                                type="radio"                                
                                name='type' 
                                data-type="series" 
                                onChange={this.handleFilter}
                                checked={this.state.type === 'series'} 
                                />
                            <span>Series only</span>
                        </label>

                    </div>   

                </div>
    }
        
}

export {Search}