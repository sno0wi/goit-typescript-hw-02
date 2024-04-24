import { useEffect, useState } from "react";
import { requestImg } from "../../services/api";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";

import { PhotosProps} from './App.types'
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [photos, setPhotos] = useState<PhotosProps[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImg, setSelectedImg] = useState<PhotosProps | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await requestImg({ searchTerm, page });
        setPhotos((prevPhotos) => {
          return prevPhotos === null
            ? response.data.results
            : [...prevPhotos, ...response.data.results];
        });
        setTotalPages(response.data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    if (searchTerm !== "") {
      fetchData();
    }
  }, [searchTerm, page]);

  const loadMore = async () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleSubmit = (query:string):void => {
    setPhotos(null);
    setPage(1);
    setSearchTerm(query);
  };

  const handleSelectPhoto = (photo:PhotosProps):void => {
    setSelectedImg(photo);
    openModal();
  };
  const closeModal = ():void => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      {isError && <ErrorMessage />}
      <ImageGallery photos={photos} handleSelectPhoto={handleSelectPhoto} />
      {isLoading && <Loader />}
      {photos !== null && photos.length > 0 && page < totalPages && (
        <LoadMoreBtn loadMore={loadMore} />
      )}

      {selectedImg !== null && (
        <ImageModal
          selectedImg={selectedImg}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      )}
    </>
  );
}

export default App;
