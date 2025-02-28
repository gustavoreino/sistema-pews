import { Button } from "@mui/material";
import styles from "@/styles/navbar.module.css";
import Image from "next/image";

function Navbar() {
    return (
        <nav className="bg-[#3792CB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/">
                            <div className="flex-shrink-0">
                                <Image
                                    src="/LOGO.png"
                                    alt="Logo"
                                    width={150}
                                    height={50}
                                />
                            </div>
                        </a>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a
                                    href="/"
                                    className="text-[#F4F8FF] hover:bg-[#A9B5DF] hover:[#45B6FE] px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Home
                                </a>
                                <a
                                    href="/login/"
                                    className="text-[#F4F8FF] hover:bg-[#A9B5DF] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Fazer login
                                </a>
                                <a
                                    href="/edit/"
                                    className="text-[#F4F8FF] hover:bg-[#A9B5DF] hover:[#45B6FE] px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Editar Paciente
                                </a>

                                <a
                                    href="/cadastro-paciente/"
                                    className="text-[#F4F8FF] hover:bg-[#A9B5DF] hover:[#45B6FE] px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Cadastrar Paciente
                                </a>

                                <a
                                    href="/listar-pacientes/"
                                    className="text-[#F4F8FF] hover:bg-[#A9B5DF] hover:[#45B6FE] px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Listar Pacientes
                                </a>
                            </div>
                        </div>
                        <Button href="/como-usar">
                            <Image
                                src="/logo_pews.jpg"
                                alt="Logo"
                                className={styles.imagemLogoPewsKaralho}
                                width={40}
                                height={40}
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
