"use client"

// components/Cadastro.js

import React,{ useState } from 'react';
import styles from '@/styles/EditUser.module.css';
import "@/app/globals.css";
//import axios from 'axios'; // Importe o Axios para fazer requisições HTTP
import Navbar from '@/components/Navbar';

export default function EditUser() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCPF] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
  
    // const handleCadastro = async (e: any) => {
    //   e.preventDefault();
  
    //   // Verifique se as senhas coincidem
    //   if (password !== confirmPassword) {
    //     console.error('As senhas não coincidem');
    //     return;
    //   }


  
    //   // Dados a serem enviados para o backend
    //   const userData = {
    //     name: name,
    //     email: email,
    //     phone: `+55`+phone,
    //     birth_date: new Date(birthDate),
    //     password: password,
    //     confirm_password: confirmPassword,
    //   };
  
    //   try {
    //     // Faça uma requisição POST para a rota de criação de usuário no backend
    //     const response = await axios.post(`${process.env.API_URL}/users/new`, userData);
  
    //     // Se a requisição for bem-sucedida, redirecione para a página de login
    //     console.log('Usuário cadastrado com sucesso:', response.data);
    //     //router.push('/login'); // Redirecione para a página de login
    //   } catch (error) {
    //     // Se ocorrer um erro, lide com ele (exiba uma mensagem de erro, etc.)
    //     console.error('Erro ao cadastrar usuário:', error);
    //   }
    // };
  
  

  return (
    <div className='w-full'>
        <Navbar />
        <div className={styles.containerLogin}>
            <form /*onSubmit={handleCadastro}*/ className={styles.form} >
                <div className='flex flex-col h-full w-10/12 justify-center items-center'>
                <div className='flex flex-col h-full w-full justify-center items-center p-3'>
                    <h2 className='text-2xl font-bold text-[#0E2433]'>Editar Paciente</h2>
                </div>
                <div className='flex flex-col h-full w-full justify-center items-center'>
                    <div className='flex flex-row h-full w-full  m-2 justify-center items-center'>
                    <div className='flex flex-col h-full w-1/2 justify-center items-center'>
                        <div className='flex flex-row h-full w-full justify-center items-center'>
                        <div className=''>
                            <input
                            type="text"
                            className={styles.myinput}
                            id="nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nome"
                            />
                        </div>
                        </div>
                        <div className='flex flex-row h-full w-full justify-center items-center'>
                        <div className="">
                            <input
                            className={styles.myinput}
                            type="cpf"
                            id="cpf"
                            value={cpf}
                            onChange={(e) => setCPF(e.target.value)}
                            placeholder="CPF"
                            />
                        </div>
                        </div>
                    </div>
                    <div className='flex flex-col h-full w-1/2 m-2 justify-center items-center'>
                        <div className='flex flex-row h-full w-full justify-center items-center'>
                        <div className=''>
                            <input
                            type="text"
                            className={styles.myinput}
                            id="numero"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Telefone"
                            />
                        </div>
                        </div>
                        <div className='flex flex-row h-full w-full justify-center items-center'>
                        <div className="">
                            <input
                            className={styles.myinput}
                            type="diagnosis"
                            id="diagnosis"
                            value={diagnosis}
                            onChange={(e) => setDiagnosis(e.target.value)}
                            placeholder="Diagnóstico"
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='flex flex-row h-full w-full justify-center items-center'>
                        <div className="">
                            <input
                            className="w-[13.5rem] p-1 mb-4 border border-gray-300 rounded-lg opacity-50 text-black"
                            type="date"
                            id="Nascimento"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            placeholder="Data de Nascimento"
                            />
                        </div>
                        </div>
                <div className='flex flex-col justify-center items-center h-full w-full'>
                    <div className='flex flex-col justify-center items-center h-full w-full'>
                    <button className="bg-[#E7852B] h-full w-[65%] p-2 rounded-lg text-white" type="submit">Editar</button>
                    </div>
                </div>
                </div>
            </form>
        </div>
    </div>
  );
}
