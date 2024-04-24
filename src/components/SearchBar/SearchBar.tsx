import { FormEvent, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";
import { HandleSubmitProps } from "./SearchBar.types";

const SearchBar = ({ handleSubmit }: HandleSubmitProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onHandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchTerm = inputRef.current?.value;
    if (searchTerm === undefined) {
      toast.error("Please enter a search term.");
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
