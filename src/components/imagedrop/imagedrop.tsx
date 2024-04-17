
"use client"
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileDropZoneProps {
    onFileDrop: (files: File[]) => void;
}

const FileDropZone: React.FC<FileDropZoneProps> = ({ onFileDrop }) => {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the dropped files
        onFileDrop(acceptedFiles);
    }, [onFileDrop]);


    const { getRootProps, getInputProps, isDragActive, isFileDialogActive } = useDropzone({ onDrop });

    return (
        // <div  style={dropZoneStyle}>
        //     <input />
        //     {isDragActive ? <p>Drop the files here ...</p> : <p>Drag n drop some files here, or click to select files</p>}
        // </div>
        <div {...getRootProps()} style={isDragActive ? dropZoneStyle : {}}>
            <div className="w-full mx-auto my-12 px-5 sm:w-96 gap-4 min-h-72 h-full bg-primary-foreground flex justify-center items-center rounded-3xl relative py-1 text-sm leading-6 text-gray-600 flex-col ring-gray-900/10 hover:ring-gray-900/20 shadow-[-0px_10px_40px_5px_rgba(0,0,0,0.25)]">
                <div className="bg-primary h-12 text-primary-foreground hover:bg-primary/80 transition px-6 py-4 flex justify-center items-center text-xl font-semibold rounded-full">
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
    backgroundColor: '#22222211'
};



export default FileDropZone;
