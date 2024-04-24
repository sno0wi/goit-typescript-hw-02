export interface PhotosProps {
    id: string;
    slug:string;
    urls: {
        [key:string]:string;
    };
}