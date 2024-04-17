// "use client"

// import { useEffect, useState } from "react";

const Sitebg = () => {

    // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    // const updateMousePosition = (e: any) => {
    //     ;

    // };


    // useEffect(() => {
    //     window.addEventListener("mousemove", (e: any) => {
    //         setMousePosition({ x: e.clientX, y: e.clientY })
    //     });

    // }, []);


    return (
        <>
            {/* <div style={{ top: -mousePosition.x / 5 }} className={`fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80`} aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
            </div>
            <div style={{ bottom: -mousePosition.x / 5 }} className="fixed -right-40 inset-x-0 transform-gpu bottom-40 -z-10  overflow-hidden blur-3xl sm:-bottom-96" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] rotate-[-30deg] bg-gradient-to-bl from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
            </div> */}
            <div className={`fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80`} aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
            </div>
            <div className="fixed -right-40 inset-x-0 transform-gpu bottom-40 -z-10  overflow-hidden blur-3xl sm:-bottom-96" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] rotate-[-30deg] bg-gradient-to-bl from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
            </div>
        </>
    );
};


export default Sitebg;

