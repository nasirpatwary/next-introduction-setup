import CheckoutForm from '@/components/forms/CheckoutForm';
import React from 'react';

const CheckoutPage = async ({params}) => {
    const id = await params.id
    const res = await fetch(`https://nextjs-car-doctor-five.vercel.app/api/service/${id}`)
    const data = await res.json()
    return (
        <div>
            <CheckoutForm data={data} />
        </div>
    );
};

export default CheckoutPage;