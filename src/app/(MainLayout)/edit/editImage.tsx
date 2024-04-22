"use client"
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";




const EditImage = () => {
    const searchParams = useSearchParams()
    const [url, setUrl] = useState('')

    useEffect(() => {

        const returnUrl: any = searchParams.get('url')
        const imageUrl: any = decodeURIComponent(returnUrl)
        setUrl(imageUrl)

    }, [searchParams])
    console.log(url)

    return (
        <div>
            <Image src={url} alt={"Image of" + url} width={500} height={500} />
        </div>
    );
};

export default EditImage;