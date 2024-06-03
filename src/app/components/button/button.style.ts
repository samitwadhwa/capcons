import tw from 'twin.macro';

// Define the base styles for all buttons
const baseButtonStyles: string = tw`inline-flex items-center justify-center border border-transparent shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed`.toString();


// Define the specific styles for each button variant
export const PrimaryButton = tw.button`
  ${baseButtonStyles}
  text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500
`;

export const SecondaryButton = tw.button`
  ${baseButtonStyles}
  text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-500
`;

export const DefaultButton = tw.button`
  ${baseButtonStyles}
  text-gray-700 bg-white hover:bg-gray-50 focus:ring-gray-500
`;

export const DangerButton = tw.button`
  ${baseButtonStyles}
  text-white bg-red-600 hover:bg-red-700 focus:ring-red-500
`;

export const IconWrapper = tw.span`
  -ml-1 mr-2 h-5 w-5
`;

export const TransparentButton = tw.button`
  ${baseButtonStyles}
  text-gray-700 bg-transparent hover:bg-gray-100 focus:ring-gray-500
`;
