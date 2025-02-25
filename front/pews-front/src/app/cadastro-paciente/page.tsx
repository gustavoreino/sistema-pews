"use client";

// components/Cadastro.js

import React, { useState } from "react";
import styles from "@/styles/CadastroUser.module.css";
import "@/app/globals.css";
//import axios from 'axios'; // Importe o Axios para fazer requisições HTTP
import Navbar from "@/components/Navbar";
import axios from "axios";

export default function EditUser() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [cpf, setCPF] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [diagnosis, setDiagnosis] = useState("");

    const handleCadastro = async (e: any) => {
        e.preventDefault();

        // Verifique se as senhas coincidem

        // Dados a serem enviados para o backend
        const userData = {
            name: name,
            cpf: cpf,
            phone: `+55` + phone,
            birth_date: new Date(birthDate),
            diagnosis: diagnosis,
        };

        try {
            // Faça uma requisição POST para a rota de criação de usuário no backend
            const response = await axios.post(
                `${process.env.API_URL}/users/new`,
                userData
            );

            // Se a requisição for bem-sucedida, redirecione para a página de login
            console.log("Usuário cadastrado com sucesso:", response.data);
            window.alert(
                "Usuário cadastrado com sucesso: \n" +
                    JSON.stringify(response.data)
            );
            //router.push('/login'); // Redirecione para a página de login
        } catch (error) {
            // Se ocorrer um erro, lide com ele (exiba uma mensagem de erro, etc.)
            console.error("Erro ao cadastrar usuário:", error);
            window.alert("Erro ao cadastrar usuário: \n" + error);
        }
    };

    return (
        <div className="w-full">
            <Navbar />
            <div className={styles.containerLogin}>
                <form onSubmit={handleCadastro} className={styles.form}>
                    <div className="flex flex-col h-full w-10/12 justify-center items-center">
                        <div className="flex flex-col h-full w-full justify-center items-center p-3">
                            <h2 className="text-2xl font-bold text-[#0E2433]">
                                Cadastrando Paciente.
                            </h2>
                        </div>
                        <div className="flex flex-col h-full w-full justify-center items-center">
                            <div className="flex flex-row h-full w-full justify-center items-center">
                                <div className={styles.mamaeInput}>
                                    <div
                                        className={styles.guardaFlinstonsInput}
                                    >
                                        <input
                                            type="text"
                                            className={styles.myinput}
                                            id="nome"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            placeholder="Nome"
                                            minLength={3}
                                            required
                                        />
                                    </div>
                                    <div
                                        className={styles.guardaFlinstonsInput}
                                    >
                                        <input
                                            className={styles.myinput}
                                            type="cpf"
                                            id="cpf"
                                            value={cpf}
                                            onChange={(e) =>
                                                setCPF(e.target.value)
                                            }
                                            placeholder="CPF"
                                            minLength={3}
                                            required
                                        />
                                    </div>
                                    <div
                                        className={styles.guardaFlinstonsInput}
                                    >
                                        <input
                                            type="text"
                                            className={styles.myinput}
                                            id="numero"
                                            value={phone}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                            placeholder="Telefone"
                                            minLength={3}
                                            required
                                        />
                                    </div>
                                    <div
                                        className={styles.guardaFlinstonsInput}
                                    >
                                        <input
                                            className={styles.myinput}
                                            type="diagnosis"
                                            id="diagnosis"
                                            value={diagnosis}
                                            onChange={(e) =>
                                                setDiagnosis(e.target.value)
                                            }
                                            placeholder="Diagnóstico"
                                            minLength={3}
                                            required
                                        />
                                    </div>
                                    <div
                                        className={styles.guardaFlinstonsInput}
                                    >
                                        <input
                                            className={styles.myinput}
                                            type="date"
                                            id="Nascimento"
                                            value={birthDate}
                                            onChange={(e) =>
                                                setBirthDate(e.target.value)
                                            }
                                            placeholder="Data de Nascimento"
                                            minLength={3}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center h-full w-full">
                            <div className="flex flex-col justify-center items-center h-full w-full">
                                <button
                                    className={styles.mybutton}
                                    type="submit"
                                >
                                    Cadastrar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className={styles.footerMarcao}>
                Página feita por Marcão zitos do grau :)
            </div>
        </div>
    );
}
