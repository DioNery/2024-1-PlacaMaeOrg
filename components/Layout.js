import { useState, useEffect, Fragment } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import Button from "./Button";

import { Transition } from "@headlessui/react";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <TopBar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <SideBar showNav={showNav} />
      </Transition>
      <main
        className={`pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? "pl-56" : ""
        }`}
      >
        <div className="px-4 md:px-16">{children}</div>
      </main>
      <BottomBar />
      <Button onClick={() => setModal1Open(true)} />
      {modal1Open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
    <div className="relative w-auto max-w-md mx-auto my-6">
      <div className="bg-white rounded-lg shadow-lg outline-none focus:outline-none">
        <div className="p-6 text-center">
          <p className="text-gray-600 mb-4">
            Olá! Este é o sistema de denúncia contra CyberBullying do Placa Mãe Org. <br/><br/>
            Ao prosseguir você será direcionado ao site Safer Net para solicitar sua ocorrência.<br/><br/>
            Tem certeza que deseja continuar?  
          </p>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              window.location.href = "https://new.safernet.org.br/"; // Redireciona para o site
            }}
          >
            Continuar
          </button>
          <p className="text-gray-600 mt-4">
            <span className="text-orange-500 cursor-pointer" onClick={() => {
              setModal1Open(false);
              setModal2Open(true);
            }}>O que é o Safer Net?</span>
          </p>
        </div>
      </div>
    </div>
  </div>
)}
{modal2Open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
    <div className="relative w-auto max-w-md mx-auto my-6">
      <div className="bg-white rounded-lg shadow-lg outline-none focus:outline-none">
        <div className="p-6 text-center"> {/* Adicionando text-center */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Oque é SaferNet?
          </h3>
          <p className="text-gray-600 mb-4">
            O SaferNet é um portal essencial para receber informações necessárias para o uso seguro, responsável e ético da internet, além de facilitar a denúncia a crimes cibernéticos e a saúde mental dos usuários vítimas desses crimes. 
            O site discute a importância de pais e responsáveis darem as orientações adequadas a seus filhos sobre como utilizar a Internet do modo mais saudável, advertindo-os para, por exemplo, negociar o tempo diário de acesso dos filhos na internet, ensinar que não se devem compartilhar imagens comprometedoras com desconhecidos online, e incentivar o diálogo com eles caso vejam ou leiam algo que o deixem desconfortáveis ou inseguros
          </p>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setModal2Open(false);
            }}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
}
