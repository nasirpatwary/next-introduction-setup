"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AboutPage = () => {
    const router = useRouter()
    const isLoggedIn = true;
    const handleRouter = ()=>{
        if (isLoggedIn) {
            router.push("/about/address")
        }else{
            router.push("/")
        }
    }
    return (
        <div>
            <p className="text-2xl">About Page</p>
            <p className='text-green-500'><Link href="/about/address">Go To Address</Link></p>
            <button onClick={handleRouter} className='border p-1 rounded' type='button'>Go To Address</button>
        </div>
    );
};

export default AboutPage;