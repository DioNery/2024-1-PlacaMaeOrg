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
    if (window.innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    handleResize(); // Para definir o estado inicial com base no tamanho da janela
    window.addEventListener("resize", handleResize); // Adiciona o ouvinte de redimensionamento

    return () => {
      window.removeEventListener("resize", handleResize); // Remove o ouvinte de redimensionamento ao desmontar o componente
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
      <main className={`pt-16 transition-all duration-[400ms] ${showNav && !isMobile ? "pl-56" : ""}`}>
        <div className="px-4 md:px-16">{children}</div>
      </main>
      <BottomBar />
      <Button onClick={() => setModal1Open(true)} />
      {modal1Open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          {/* Modal 1 */}
        </div>
      )}
      {modal2Open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          {/* Modal 2 */}
        </div>
      )}
    </>
  );
}
