import React from 'react';
import { ResponsiveNav } from './responsiveNav';
import Link from 'next/link';
import { Button } from '../ui/button';
import Logo from '../logo/logo';

const MainNavigation = () => {
    return (
        <nav className="flex font-semibold items-center justify-between flex-wrap border-b p-5">
            <div className="flex items-center flex-shrink-0 text-primary mr-6">
                <Logo />
            </div>
            <div className="block lg:hidden">
                <ResponsiveNav />
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-primary hover:text-primary/70 mr-4">
                        Docs
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-primary hover:text-primary/70 mr-4">
                        Examples
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-primary hover:text-primary/70">
                        Blog
                    </a>
                </div>
                <div className='flex items-center'>
                    <Link href="#" className='hidden md:block'>
                        <Button>
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default MainNavigation;