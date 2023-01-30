import { ChangeEvent, FC, ReactElement } from 'react';

interface UploadFileWrapperProps {
    children: ReactElement;
    callback: (file: File) => void;
}

export const UploadFileWrapper: FC<UploadFileWrapperProps> = ({ children, callback }) => {
    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0];

            if (file.size < 4000000) {
                callback(file);
            } else {
                console.error('Error: ', 'Файл слишком большого размера');
            }
        }
    };

    return (
        <label>
            <input type="file" onChange={uploadHandler} style={{ display: 'none' }} accept={'.jpg, .jpeg, .png'}/>
            {/* important!!! children should be with component type "span"*/}
            {children}
        </label>
    );
};