import React, { useState } from "react";
import css from "./LoadMoreBtn.module.css";
import { LoadMoreProps } from "./LoadMoreBtn.types";

const LoadMoreBtn:React.FC<LoadMoreProps> = ({ loadMore }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
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
