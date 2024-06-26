import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = (props) => {
    const { value, onChange, onSubmit } = props;

    return (
        <form onSubmit={onSubmit}>
            <div className="input-group">
                <BiSearch className="search-icon" />
                <input
                    type="search"
                    placeholder="Hari ini mau ngemil apa?"
                    value={value}
                    onChange={onChange}
                />
                <button type="submit" className="btn btn-search">
                    <BiSearch color="#fff" size="1.7rem" />
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
