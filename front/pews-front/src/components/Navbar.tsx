import { Button } from '@mui/material';
import Image from 'next/image';

function Navbar() {
    return (
        <nav className="bg-[#3792CB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image src="/LOGO.png" alt="Logo" width={150} height={50} />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="/home" className="text-[#F4F8FF] hover:bg-[#3792CB] hover:[#45B6FE] px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a href="/pokedex" className="text-[#F4F8FF] hover:bg-[#F4F8FF] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pokedex</a>
                                <a href="/users/profile" className="text-[#F4F8FF] hover:bg-[#F4F8FF] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Perfil</a>
                                <a href="/users" className="text-[#F4F8FF] hover:bg-[#F4F8FF] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Editar Perfil</a>
                                <a href="/edit" className="text-[#F4F8FF] hover:bg-[#3792CB] hover:[#45B6FE] px-3 py-2 rounded-md text-sm font-medium">Editar Paciente</a>
                                <a href="/edit" className="text-[#F4F8FF] hover:bg-[#F4F8FF] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Minhas Compras</a>
                            </div>
                        </div>
                        <Button href="/cart">
                            <Image src="/CartIcon.png" alt="Logo" width={40} height={40} />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;