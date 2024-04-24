import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";

const SearchBar = ({ handleSubmit }) => {
  const inputRef = useRef(null);

  const onHandleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = inputRef.current.value;
    if (searchTerm === "") {
      toast("Please enter a search term.");
      return;
    }
    handleSubmit(searchTerm);
  };

  return (
    <header className={css.header}>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <form onSubmit={onHandleSubmit} className={css.searchForm}>
        <div className={css.searchContainer}>
          <button type="submit" className={css.searchBtn}>
            <IoIosSearch />
          </button>

          <input
            className={css.searchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            ref={inputRef}
          />
        </div>

        {/*  */}
      </form>
    </header>
  );
};

export default SearchBar;
