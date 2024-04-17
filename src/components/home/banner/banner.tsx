"use client"

import FileDropZone from "@/components/imagedrop/imagedrop";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import axios from "axios"
const Banner = () => {
    const history = useRouter(); // Access the history object to navigate
    const apiKey = 'a4fffb0560be3233ee3afb982b416ec0';

    const handleFileDrop = async (files: File[]) => {
        console.log(JSON.stringify(files))
        const imageFile = { image: files[0] };
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });
        const imageURL = res.data.data.display_url;
        console.log(imageURL)
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
                    <FileDropZone onFileDrop={handleFileDrop} />
                </div>
            </div>
        </section>
    );
};

export default Banner;
