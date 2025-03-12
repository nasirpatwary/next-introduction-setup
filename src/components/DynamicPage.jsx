import Image from "next/image";

const DynamicPage = () => {
    return (
        <div>
        <div className="flex justify-center w-full">
            <Image width={1200} height={200} src="/assets/images/checkout/checkout.png" alt="checkout" />
        </div>
        </div>
    );
};

export default DynamicPage;