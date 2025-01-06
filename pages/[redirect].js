
import Footer from 'components/Footer';
import Header from 'components/Header';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RedirectPage() {
    const url = usePathname();

    const [redirectUrl, setRedirectUrl] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL +url);
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                setRedirectUrl(data.url);
                console.log(`Success ${data}`);
                window.location.href = data.url;
            } else {
                console.log('Failed');
                window.location.href = process.env.NEXT_PUBLIC_BASE_URL + '/_error';
            }
        }
        if (url !== null) {
            fetchData();
        }
    }, [url])
    return (
        <>
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75" ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-red-500 to-transparent opacity-25"></div>
            <div className="flex flex-col h-screen bg-[url('/background.jpg')] bg-cover bg-center ">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6  z-10">
                    <Header />
                </div>
                <h1 className='font-bold text-xl text-white m-auto z-10'>Redirect to {redirectUrl}</h1>
                <div className='z-10'>
                    <Footer />
                </div>
            </div>
        </>
    )
}