"use client"

import FileDropZone from "@/components/imagedrop/imagedrop";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { toast } from "sonner"
import axios from "axios"
import { Toaster } from "@/components/ui/sonner";
import { useDispatch } from "react-redux";
import { ChangelinkToLink } from "@/providers/redux/imageLinkSlice";
import { useState } from "react";
const Banner = () => {
    const navigate = useRouter();
    const apiKey = 'a4fffb0560be3233ee3afb982b416ec0';
    const dispatch = useDispatch()
    const [progressLoad, setProgressLoad] = useState(0)

    const handleFileDrop = async (files: File[]) => {
        try {
            const imageFile = { image: files[0] };
            const res = await axios.post(`https://api.imgbb.com/1/upload?expiration=400&key=${apiKey}`, imageFile, {
                headers: {
                    "content-type": "multipart/form-data",
                },
                onUploadProgress: (progress) => {
                    const total: any = progress.total
                    const percent = Math.round((progress.loaded * 100) / total)
                    setProgressLoad(percent)
                },

            });

            const imageURL: any = res.data?.data?.display_url;
            const encodedImageUrl = encodeURIComponent(imageURL);
            navigate.push(`/edit?url=${encodedImageUrl}`);
            dispatch(ChangelinkToLink(imageURL))
            // const imageURL = res.data.data;
            // console.log(imageURL)
            // navigate.push(`/edit?image=${imageURL}`)
        } catch (error) {
            toast.error("An error occurred while uploading the image.", {
                description: Date.now(),
                action: {
                    label: "Try again",
                    onClick: () => console.log("Undo"),
                },
            })
            console.error(':', error);
        }
    };

    return (
        <section className="container">
            <div className="py-24 px-6 flex justify-center lg:px-8">
                <div className="mx-auto lg:flex items-center justify-between">
                    <div className="text-center lg:text-left max-w-2xl">
                        <h1 className="text-4xl text-center lg:text-left mx-auto font-bold tracking-tight text-gray-900 sm:text-6xl mb-5">
                            Ready Image <br /> Editor
                        </h1>
                        <h3 className="text-4xl text-center lg:text-left font-bold">Edit image online.</h3>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                        <div className="mt-10">
                            <Button className="bg-black" variant={'rounded'}>
                                Create Account
                            </Button>
                        </div>
                    </div>
                    <FileDropZone progress={progressLoad} onFileDrop={handleFileDrop} />
                </div>
            </div>
            <Toaster position="top-right" />
        </section>
    );
};

export default Banner;
