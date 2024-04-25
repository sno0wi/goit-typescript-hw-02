import { PhotosProps } from "../components/App/App.types";

export interface RequestImgParamsProps {
  searchTerm: string;
  page: number;
}

export interface ParamsTypes {
    client_id: string;
    query: string;
    per_page: number;
    page: number;
}

export interface ReturnTypes{
    results: PhotosProps[];
    total_pages: number;
}