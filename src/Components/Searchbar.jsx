
const Searchbar = ({ Inputgain }) => {
    return (
        <div className="search">
            <input className="search-field" type="search" placeholder="Search by name or id" />
            <button className="search-button" onClick={() => {Inputgain()}}><i className="fa fa-search"></i></button>
        </div>
    )
}

export default Searchbar;