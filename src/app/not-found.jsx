import Link from "next/link";
const NotFoundPage = () => {
    return (
        <div className='flex justify-center items-center h-full w-full'>
            <div>
                <h1>404 Not Found Please Try Again</h1>
                <Link href="/">Go Back To Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;