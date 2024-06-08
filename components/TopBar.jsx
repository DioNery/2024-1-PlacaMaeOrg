import React from "react";
import { useRouter } from "next/router";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function TopBar({ showNav, setShowNav }) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div
      className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="pl-4 md:pl-16">
        <Bars3Icon
          className="h-8 w-8 text-orange-500 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="logo-container">
        <img className="logo" src="/logo_home.png" alt="logo X" />
      </div>

      <style jsx>{`
        .logo-container {
          margin-right: 1rem; 
          margin-top: 30px;
        }

        .logo {
          width: 10vw;
          animation: slideUp 0.5s ease-in-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .logo {
            width: 20vw;
          }
          
          .logo-container {
            margin-top: 10px; /* Reduz a margem superior */
          }
        }
      `}</style>
    </div>
  );
}
