
"use client"
import Image from "next/image";
import { useSearchParams } from "next/navigation";


const EditImage = () => {
    const router = useSearchParams()

    const image: any = router.get("url")

    const imageUrl = decodeURIComponent(image)


    return (
        <div>
            This is edit image
            <Image src={imageUrl} alt={"Image of" + image} width={500} height={500} />
        </div>
    );
};

export default EditImage;