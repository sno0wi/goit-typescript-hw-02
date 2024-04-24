import React, { useState } from "react";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMore }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await loadMore();
    } catch (error) {
      console.error("Error loading more photos:", error);
    }
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <div className={css.wrapperBtn}>
        <button type="button" onClick={handleClick}>
          {isLoading ? "Loading..." : "Load More"}
        </button>
      </div>
    </React.Fragment>
  );
};

export default LoadMoreBtn;
