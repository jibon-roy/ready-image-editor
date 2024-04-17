import logoImg from '@/assets/images/logo/logo.png'
import Image from 'next/image';

const Logo = () => {
    return (
        <div className='flex gap-2 items-center flex-wrap text-center'>
            <Image alt='Ready Image Editor' src={logoImg.src} width={40} height={40} />
            <span className="text-xl tracking-tight">ReadyIE</span>
        </div>
    );
};

export default Logo;