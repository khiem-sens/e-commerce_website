"use client";
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';
import { FaCheckCircle } from "react-icons/fa";

const SuccessPageContent = () => {
    const searchParams = useSearchParams();
    const email = searchParams.get("email");
    return (
        <section className='mt-12 flex flex-col items-center gap-4 text-center'>
            <FaCheckCircle className="text-emerald-500" size={64} />
            <p className='text-[3rem] font-bold text-emerald-500'>Order Sent Successfully</p>
            <p className='text-[1.5rem]'>Check your email: {email}</p>
        </section>
    );
};

const SuccessPage = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <SuccessPageContent />
    </Suspense>
);

export default SuccessPage;
