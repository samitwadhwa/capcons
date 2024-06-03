"use client";

import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../../components/input/input.component';
import Button from '@/app/components/button/button.component';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, control, handleSubmit, formState, watch, setValue } = useForm<FormValues>({
    mode: "onChange",
  });
  const { errors, isValid } = formState;

  const [hydrated, setHydrated] = useState(false);
  const [showCountryCodeInput, setShowCountryCodeInput] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const emailValue = watch("email");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue("email", value, { shouldValidate: true }); // Trigger validation on change

    const isNumeric = /^\d+$/.test(value);
    setShowCountryCodeInput(isNumeric);
    if (!isNumeric) {
      setCountryCode('');
    }
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (countryCode) {
      data.email = countryCode + data.email;
    }
    console.log(data);
  };

  if (!hydrated) {
    return null;
  }

  return (
    <div className="container mx-auto p-4">
      <div>
        <h3 className={`text-h3 font-h3 ${isDarkMode ? 'text-white' : 'text-black'}`}>Welcome back!</h3>
        <p className={`text-p font-p ${isDarkMode ? 'text-login-color' : 'text-gray-600'} mb-5`}>Login to your account</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-5">
          <div className="flex items-center gap-2">
            {showCountryCodeInput && (
              <select
                id="countryCode"
                className={`shadow appearance-none py-2 px-3 leading-tight bg-transparent focus:outline-none focus:shadow-outline border ${isDarkMode ? 'text-slight-grey border-custom-Border' : 'text-gray-600 border-gray-300'}`}
                value={countryCode}
                onChange={handleCountryCodeChange}
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              
              </select>
            )}
            <Input
              id="email"
              placeholder="Email or Mobile"
              type="text"
              value={emailValue}
              {...register("email", {
                required: "Email or Mobile is required!",
                pattern: {
                  value: /^(?:\d{10}|\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)$/,
                  message: "Please enter a valid Email or Mobile number!"
                }
              })}
              onChange={handleEmailChange}
              className={`rounded-sm shadow appearance-none py-2 px-3 ${showCountryCodeInput ? 'w-15.6rem' : 'w-19.5rem'} leading-tight bg-transparent focus:outline-none focus:shadow-outline border ${isDarkMode ? 'text-slight-grey border-custom-Border' : 'text-gray-600 border-gray-300'}`}
            />
          </div>
          <h6 className="text-red-500 text-h6 h6 text-left mt-[-4px]">{errors?.email?.message}</h6>
        </div>

        <div className='mb-5'>
          <div className="relative">
            <Input
              id="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long!"
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character!"
                }
              })}
              className={`rounded-sm shadow appearance-none py-2 px-3 leading-tight bg-transparent w-19.5rem focus:outline-none focus:shadow-outline border ${isDarkMode ? 'text-slight-grey border-custom-Border' : 'text-gray-600 border-gray-300'}`}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-4 flex items-center"
              onClick={handleTogglePasswordVisibility}
            >
              {showPassword ? (
                <FaRegEyeSlash className="h-4 w-4 text-gray-400" />
              ) : (
                <FaEye className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
          <h6 className='text-red-500 text-left text-h6 h6'>{errors?.password?.message}</h6>
        </div>

        <div className='flex justify-between items-center mb-5'>
          <div className='flex items-center'>
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2 bg-transparent"
            />
            <h6 className={`text-h6 h6 ${isDarkMode ? 'text-white' : 'text-black'}`}>Remember me</h6>
          </div>
          <h6 className={`text-login-color cursor-pointer text-h6 h6`}>Forget password?</h6>
        </div>
        <div>
          <Button className="w-19.5rem rounded-lg" type="submit" disabled={!isValid}>Login</Button>
        </div>
        <div className='flex justify-start items-center mt-3'>
          <h6 className={`h6 text-h6 mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Don't have an account?</h6>
          <h6 className='text-login-color text-h6 h6 cursor-pointer'>Sign up here</h6>
        </div>
      </form>
    </div>
  );
};

export default Login;
