
"use client"
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileDropZoneProps {
    onFileDrop: (files: File[]) => void;
    progress: number
}

const FileDropZone: React.FC<FileDropZoneProps> = ({ onFileDrop, progress }) => {
    const [fileUploading, setFileUploading] = useState(false)
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the dropped files
        onFileDrop(acceptedFiles);
        if (acceptedFiles)
            setFileUploading(true)
    }, [onFileDrop]);


    const { getRootProps, getInputProps, isDragActive, isFileDialogActive, isDragAccept } = useDropzone({ onDrop });

    return (

        <div {...getRootProps()} className='relative cursor-pointer' >
            <div className={!fileUploading ? "hidden fixed" : "flex z-50 text-white justify-center items-center top-0 left-0 fixed w-full min-h-screen bg-black/70 "}>
                <div className="text-2xl font-semibold">{progress} % Uploaded</div>
            </div>
            <div style={isDragActive ? dropZoneStyle : { border: '2px dashed transparent' }} className='absolute w-[calc(100%+40px)] top-0 right-1/2 h-full translate-x-1/2'></div>
            <div className="w-full mx-auto my-12 px-5 sm:w-96 gap-4 min-h-72 h-full bg-primary-foreground flex justify-center items-center rounded-3xl relative py-1 text-sm leading-6 text-gray-600 flex-col ring-gray-900/10 hover:ring-gray-900/20 shadow-[-0px_10px_40px_5px_rgba(0,0,0,0.25)]">
                <div className="bg-primary h-12 text-primary-foreground text-center hover:bg-primary/80 transition px-6 py-4 flex justify-center items-center text-xl font-semibold rounded-full">
                    {isFileDialogActive ? "Select an image" : 'Upload Image'}
                </div>
                <div className='text-xl'> or, drop a file.</div>
            </div>
            <input  {...getInputProps()} id="image_input" className="hidden" />
        </div>
    );
};

const dropZoneStyle: React.CSSProperties = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: '#22222211',
    zIndex: '1'
};



export default FileDropZone;
