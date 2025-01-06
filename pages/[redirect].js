
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
        <div>
            <h1>Redirect to {redirectUrl}</h1>
        </div>
    )
}