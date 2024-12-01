import React from 'react';
import { Link } from "@nextui-org/link";

const FooterRoot = () => {
  return (
    <footer className="w-full p-6 bg-gray-100">
      <hr></hr>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-gray-600">© {new Date().getFullYear()} dotprepare communication. <Link href='https://github.com/tuupercove/tuupercove/blob/master/LICENSE' color="foreground" className='cursor-help'>MIT License</Link>.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/privacy" color="foreground" className='cursor-help'>
            Privacy Policy
          </Link>
          <p> | </p>
          <Link href="/terms" color="foreground" className='cursor-help'>
            Terms of Service
          </Link>
          <p> | </p>
          <Link href="/contact" color="foreground" className='cursor-help'>
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterRoot;