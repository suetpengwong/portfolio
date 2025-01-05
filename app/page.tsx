import { Roboto } from '@next/font/google';
import Image from "next/image";
import Pic from '../public/pic.jpeg';
import Iff from '../public/logos.jpeg';
import Eastern from '../public/eastern.png';

// Import Heroicons v2
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],  // You can specify the font weights you need
});

export default function Home() {
    return (
        <div className={`${roboto.className} w-screen min-h-screen flex flex-col justify-center items-center bg-[#F5F5DB]`}>
            <div className='w-[90%] bg-white flex flex-col justify-center items-center mx-auto p-6 rounded-xl'>
                <Image src={Pic} alt='suetpengwong' width={100} height={100} className={'rounded-full'}/>
                <h1 className='text-2xl font-bold mt-4'>Michele Wong</h1>
                <p className='text-md text-center'>Medical Life Insurance, Group Insurance, Will Writing Associates.</p>

                <p className='text-md mt-4 animate-fadeIn underline'>
                    Reach for Great, Is What Inspires Us.
                </p>

                <div className='flex flex-row mt-4 space-x-6'>
                    {/* WhatsApp Link */}
                    <a href="https://wa.me/+60102128575" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                        <ChatBubbleLeftEllipsisIcon className="h-7  w-7 text-green-500"/>
                    </a>
                    {/* Phone Call Link */}
                    <a href="tel:+60102128575" aria-label="Phone">
                        <PhoneIcon className="h-7 w-7 text-blue-500"/>
                    </a>
                    {/* Gmail Link */}
                    <a href="mailto:suetpengwong@gmail.com" aria-label="Email">
                        <EnvelopeIcon className="h-7 w-7 text-red-500"/>
                    </a>
                </div>

                <iframe
                    className='w-full h-48 sm:h-64 md:h-80 lg:h-[500px] xl:h-[600px] mt-4 rounded-xl'
                    src="https://www.youtube.com/embed/hx3zRGdkf0w"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
                <b className='mt-4'>YCH Group Advisory</b>
                <p className='mt-4 text-center'>
                 10-1, Jalan 6/18A Taman Mastiara, Batu 5, Jalan Ipoh 52100, KL
                </p>
                <h2 className='mt-4'>Appointed Agencies</h2>
                <div className='flex flex-row mt-4 w-full mx-auto justify-center '>

                    <Image src={Iff} className='transform scale-110' alt='test'/>
                </div>
            </div>
        </div>
    );
}
