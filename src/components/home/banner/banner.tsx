"use client"
import FileDropZone from "@/components/imagedrop/imagedrop";
import { Button } from "@/components/ui/button";


const Banner = () => {
    const handleFileDrop = (files: File[]) => {
        // Handle the dropped files here
        console.log(files);
    };
    return (
        <section className="container">
            <div className="relative isolate py-24 px-6 lg:px-8">
                <div className="mx-auto md:flex items-center justify-between">
                    <div className="text-center md:text-left max-w-2xl">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-5">
                            Ready Image <br /> Editor
                        </h1>
                        <h3 className="text-4xl font-bold">Edit image online.</h3>
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