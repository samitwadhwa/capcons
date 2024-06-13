"use client";

import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@/app/components/button/button.component';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

interface FormValues {
  otp: string[];
}

const VerifyContent: React.FC = () => {
  const { handleSubmit, setValue } = useForm<FormValues>({
    mode: "onChange",
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const credential = searchParams.get('credential');

  const [hydrated, setHydrated] = useState(false);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [isDarkMode, setIsDarkMode] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    setHydrated(true);
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setValue('otp', newOtp);

      if (value !== '' && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (event.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (event.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const otpValue = data.otp.join('');

    try {
      const response = await axios.post('https://capcons.com/go-auth/verifyGuestLogin', {
        credential,
        otp: otpValue
      });   
      if (response.data && response.data.token) {
        // Save credentials to local storage and navigate to dashboard
        localStorage.setItem('credential', response.data.token);
        router.push('/dashboard');
      }
    } catch (error) {
      console.error("OTP verification failed", error);
    }
  };

  if (!hydrated) {
    return null;
  }

  return (
    <div className="container mx-auto p-4">
      <div>
        <h3 className={`text-h3 font-h3 ${isDarkMode ? 'text-white' : 'text-black'}`}>OTP Verification</h3>
        <p className='text-p font-p text-[#A0A0A0] mb-5'>Enter your 6 digit code sent to {credential}</p>
        <p className='text-p font-p text-login-color underline mb-5'><a href="">Edit your number</a></p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex justify-center mb-5">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              className={`w-12 h-12 mx-1 text-center border rounded-md ${isDarkMode ? 'bg-transparent text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
            />
          ))}
        </div>
        <div className='flex justify-start items-center mt-3'>
          <h6 className={`h6 text-h6 mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Didn&#39;t get a code?</h6>
          <h6 className='text-login-color text-h6 h6 cursor-pointer underline'><a href="/signup">Resend</a></h6>
        </div>
        <div className='mt-3'>
          <Button className="w-full rounded-lg" type="submit">Verify</Button>
        </div>
      </form>
    </div>
  );
};

const Verify: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyContent />
    </Suspense>
  );
};

export default Verify;
