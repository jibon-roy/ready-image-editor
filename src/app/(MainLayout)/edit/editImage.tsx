"use client"
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "@/components/ui/skeleton"
// import { ReactPhotoEditor } from 'react-photo-editor'
// import 'react-photo-editor/dist/style.css'
import FilerobotImageEditor, {
    TABS,
    TOOLS,
} from 'react-filerobot-image-editor';



const EditImage = () => {
    // const [isImgEditorShown, setIsImgEditorShown] = useState(false);
    const [url, setUrl] = useState('');
    const searchParams = useSearchParams()
    const selector = useSelector((state: any) => state.imageLink.link)

    const [isImgEditorShown, setIsImgEditorShown] = useState(false);

    const openImgEditor = () => {
        setIsImgEditorShown(true);
    };

    const closeImgEditor = () => {
        setIsImgEditorShown(false);
    };

    // const [file, setFile] = useState<File | undefined>()
    // const [showModal, setShowModal] = useState(false)

    // // Show modal if file is selected
    // const showModalHandler = () => {
    //     if (file) {
    //         setShowModal(true)
    //     }
    // }

    // // Hide modal
    // const hideModal = () => {
    //     setShowModal(false)
    // }

    // // Save edited image
    // const handleSaveImage = (editedFile: File) => {
    //     setFile(editedFile);
    // };

    // const setFileData = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    //     if (e?.target?.files && e.target.files.length > 0) {
    //         setFile(e.target.files[0])
    //     }
    // }

    useEffect(() => {

        const returnUrl: any = searchParams.get('url')
        const imageUrl: any = decodeURIComponent(returnUrl)
        setUrl(imageUrl)

    }, [searchParams])

    if (url === '') {
        return (
            <div className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-[250px] bg-slate-300 rounded-xl" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px] bg-slate-200" />
                    <Skeleton className="h-4 w-[200px] bg-slate-500" />
                </div>
            </div>
        )
    }

    return (
        <div>
            {/* <Image className="w-auto h-auto" src={url} alt={"Image of" + url} priority width={500} height={500} /> */}
            {/* 
            <input
                type="file"
                onChange={(e) => setFileData(e)}
                multiple={false}
            />

            <button onClick={showModalHandler}>Edit</button>

            <ReactPhotoEditor
                open={showModal}
                onClose={hideModal}
                file={file}
                onSaveImage={handleSaveImage}
            /> */}
            <div>

                {url !== '' && (
                    <FilerobotImageEditor
                        savingPixelRatio={10}
                        previewPixelRatio={10}
                        source={url}
                        onSave={(editedImageObject, designState) => console.log('saved', editedImageObject, designState)}
                        onClose={closeImgEditor}

                        annotationsCommon={{
                            fill: '#ff0000'
                        }}
                        Text={{ text: 'Filerobot...' }}
                        Rotate={{ angle: 90, componentType: 'slider' }}
                        tabsIds={[TABS.ADJUST, TABS.ANNOTATE, TABS.WATERMARK]} // or {['Adjust', 'Annotate', 'Watermark']}
                        defaultTabId={TABS.ANNOTATE} // or 'Annotate'
                        defaultToolId={TOOLS.TEXT} // or 'Text'
                    />
                )}
            </div>
        </div>
    );
};

export default EditImage;