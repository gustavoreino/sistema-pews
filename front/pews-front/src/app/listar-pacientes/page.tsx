"use client";

// components/Cadastro.js

import React, { useState } from "react";
import styles from "@/styles/ListarUser.module.css";
import { PatientData } from "@/components/types/PatientType";
import "@/app/globals.css";
//import axios from 'axios'; // Importe o Axios para fazer requisições HTTP
import Navbar from "@/components/Navbar";
import axios from "axios";

export default function ListUser() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [cpf, setCPF] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [diagnosis, setDiagnosis] = useState("");

    console.log("marcao-listar");

    const handleListar = async (e: any) => {
        e.preventDefault();

        // Verifique se as senhas coincidem

        // Dados a serem enviados para o backend

        const PatientData = {
            name: name,
            cpf: cpf,
            phone: `+55` + phone,
            birth_date: new Date(birthDate),
            diagnosis: diagnosis,
        };

        let moanot = window.document.getElementById("xesque");

        console.log("marcao-listar");

        // try {
        //     // Faça uma requisição POST para a rota de criação de usuário no backend
        //     const response = await axios.post(
        //         `https://localhost:8080/api/pacientes/`,
        //         PatientData
        //     );

        //     // Se a requisição for bem-sucedida, redirecione para a página de login
        //     console.log("Usuário cadastrado com sucesso:", response.data);
        //     window.alert(
        //         "Usuário cadastrado com sucesso: \n" +
        //             JSON.stringify(response.data)
        //     );
        //     //router.push('/login'); // Redirecione para a página de login
        // } catch (error) {
        //     // Se ocorrer um erro, lide com ele (exiba uma mensagem de erro, etc.)
        //     console.error("Erro ao cadastrar usuário:", error);
        //     window.alert("Erro ao cadastrar usuário: \n" + error);
        // }
    };

    return (
        <div className="w-full" id="biribinha">
            <Navbar />

            <div
                className={`container ${styles.centroTudo} ${styles.margemFacil}`}
            >
                <div className={`alert ${styles.relatorioBusca}`} role="alert">
                    <form className={`xxx ${styles.centroTudo}`}>
                        <label
                            className={`form-control mr-sm-2 ${styles.labelBuscaRelatorio}`}
                            htmlFor="idPaciente"
                        >
                            Busque algum paciente por aqui :
                        </label>
                        <select
                            name="parametroPaciente"
                            id="parametroPaciente"
                            className="form-control mr-sm-2"
                            aria-label="uuuuu"
                        >
                            <option value="">Selecione Um parâmetro</option>
                            <option value="nome">Nome</option>
                            <option value="Diagnostico">Diagnóstico</option>
                            <option value="dataConsulta">
                                Data da Consulta
                            </option>
                        </select>
                        <input
                            name="idPaciente"
                            id="idPaciente"
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Pesquisar"
                            aria-label="Pesquisar"
                        />
                        <button
                            className={`btn btn-success my-2 my-sm-0 ${styles.lupaParametro}`}
                            type="submit"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-search"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>

            <div className="container">
                <table
                    className={`table table-striped table-bordered  table-hover
                        ${styles.tableMarcao} ${styles.margemFacil}`}
                >
                    {/* className={`xxxxx xxxx ${styles.xxxxx}`} */}
                    <thead className={`${styles.theadMarcao}`}>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Diagnóstico</th>
                            <th scope="col">Data Consulta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className={`${styles.thMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    Lucas Marcão
                                </a>
                            </th>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    098.111.111-11
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    44 99999-9999
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    Malaria - Ebola - Tuberculose. Malaria -
                                    Ebola - Tuberculose. Malaria - Ebola -
                                    Tuberculose. Malaria - Ebola - Tuberculose.
                                    Malaria - Ebola - Tuberculose. Malaria -
                                    Ebola - Tuberculose. Malaria - Ebola -
                                    Tuberculose. Malaria - Ebola - Tuberculose.
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    11/04/2024
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" className={`${styles.thMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    Lucas Marcão
                                </a>
                            </th>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    098.111.111-11
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    44 99999-9999
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    Malaria - Ebola - Tuberculose. Malaria -
                                    Ebola - Tuberculose. Malaria - Ebola -
                                    Tuberculose. Malaria - Ebola - Tuberculose.
                                    Malaria - Ebola - Tuberculose. Malaria -
                                    Ebola - Tuberculose. Malaria - Ebola -
                                    Tuberculose. Malaria - Ebola - Tuberculose.
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    11/04/2024
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" className={`${styles.thMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    Lucas Marcão
                                </a>
                            </th>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    098.111.111-11
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    44 99999-9999
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    Malaria - Ebola - Tuberculose. Malaria -
                                    Ebola - Tuberculose. Malaria - Ebola -
                                    Tuberculose. Malaria - Ebola - Tuberculose.
                                    Malaria - Ebola - Tuberculose. Malaria -
                                    Ebola - Tuberculose. Malaria - Ebola -
                                    Tuberculose. Malaria - Ebola - Tuberculose.
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    11/04/2024
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" className={`${styles.thMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    Lucas Marcão
                                </a>
                            </th>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    098.111.111-11
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    44 99999-9999
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    Malaria - Ebola - Tuberculose. Malaria -
                                    Ebola - Tuberculose. Malaria - Ebola -
                                    Tuberculose. Malaria - Ebola - Tuberculose.
                                    Malaria - Ebola - Tuberculose. Malaria -
                                    Ebola - Tuberculose. Malaria - Ebola -
                                    Tuberculose. Malaria - Ebola - Tuberculose.
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    11/04/2024
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" className={`${styles.thMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    Lucas Marcão
                                </a>
                            </th>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    098.111.111-11
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    44 99999-9999
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    Malaria - Ebola - Tuberculose. Malaria -
                                    Ebola - Tuberculose. Malaria - Ebola -
                                    Tuberculose. Malaria - Ebola - Tuberculose.
                                    Malaria - Ebola - Tuberculose. Malaria -
                                    Ebola - Tuberculose. Malaria - Ebola -
                                    Tuberculose. Malaria - Ebola - Tuberculose.
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    11/04/2024
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" className={`${styles.thMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    Lucas Marcão
                                </a>
                            </th>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    098.111.111-11
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    44 99999-9999
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    Malaria - Ebola - Tuberculose. Malaria -
                                    Ebola - Tuberculose. Malaria - Ebola -
                                    Tuberculose. Malaria - Ebola - Tuberculose.
                                    Malaria - Ebola - Tuberculose. Malaria -
                                    Ebola - Tuberculose. Malaria - Ebola -
                                    Tuberculose. Malaria - Ebola - Tuberculose.
                                </a>
                            </td>
                            <td className={`${styles.tdMarcao}`}>
                                <a
                                    href="/edit/"
                                    className={`${styles.linkMarcao}`}
                                >
                                    11/04/2024
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={styles.centroTudo}>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                            >
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link active" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li className="page-item disabled">
                            <a className="page-link" href="#">
                                ...
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item disabled">
                            <a className="page-link" href="#">
                                ...
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                4
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                5
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <hr className="margemFacil" />
            <div className={styles.footerMarcao} id="xesque">
                Front-End por Marcão e Gustavo. 2025
            </div>

            <link rel="stylesheet" href="/bootstrap/css/bootstrap.css" />
            <script src="/bootstrap/js/bootstrap.js"></script>
            <script
                src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossOrigin="anonymous"
            ></script>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
                crossOrigin="anonymous"
            ></script>
        </div>
    );
}
