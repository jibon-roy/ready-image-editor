import logoImg from '@/assets/images/logo/logo.png'
import Image from 'next/image';

const Logo = () => {
    return (
        <div className='flex items-center flex-wrap text-center'>
            <Image alt='Ready Image Editor' src={logoImg.src} width={40} height={40} />
            <span className="mr-2 text-xl tracking-tight">ReadyIE</span>
        </div>
    );
};

export default Logo;