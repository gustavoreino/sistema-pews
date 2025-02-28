"use client";

// components/Cadastro.js

import React, { useState } from "react";
import styles from "@/styles/index.module.css";
import { PatientData } from "@/components/types/PatientType";
import axios from "axios";
import "@/app/globals.css";
//import axios from 'axios'; // Importe o Axios para fazer requisições HTTP
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <div className={`${styles.bonito}`}>
                <img
                    className={`${styles.imagemPews}`}
                    src="/imgs/estampapews.png"
                    alt="pew pew"
                />
            </div>
            <h2 className={`${styles.h2marcao}`}>
                BPEWS <br />
                Pontuação de Alerta Precoce Pediátrico
            </h2>

            <div className={` container ${styles.margemFacil}`}>
                <div className="row">
                    <div
                        className={`col-12  ${styles.margemFacil}  ${styles.centroTudo}`}
                    >
                        <div
                            className={`alert alert-info ${styles.centroTudo}`}
                            role="alert"
                        >
                            Conheça o Brighton Pediatric Early Warning Score -
                            PEWS, e como utilizar a ferramenta
                        </div>
                    </div>

                    <div
                        className={`col-5  ${styles.margemFacil}  ${styles.centroTudo}`}
                    >
                        <div
                            className={`alert alert-secondary  ${styles.centroTudo}`}
                            role="alert"
                        >
                            O QUE É O BPEWS
                        </div>
                    </div>

                    <div
                        className={`col-2  ${styles.margemFacil}  ${styles.centroTudo}`}
                    ></div>

                    <div
                        className={`col-5  ${styles.margemFacil}  ${styles.centroTudo}`}
                    >
                        <div
                            className={`alert alert-secondary  ${styles.centroTudo}`}
                            role="alert"
                        >
                            COMO FUNCIONA
                        </div>
                    </div>

                    <div
                        className={`col-5 alert alert-primary  ${styles.margemFacil}  ${styles.centroTudo}`}
                        role="alert"
                    >
                        <div className={`${styles.centroTudo}`}>
                            O BPEWS é uma ferramenta de avaliação contínua e
                            padronizada, utilizada para detectar crianças em
                            estado de deterioração clínica.
                        </div>
                    </div>

                    <div
                        className={`col-2  ${styles.margemFacil}  ${styles.centroTudo}`}
                    ></div>

                    <div
                        className={`col-5 alert alert-primary  ${styles.margemFacil}  ${styles.centroTudo}`}
                        role="alert"
                    >
                        <div className={`${styles.centroTudo}`}>
                            A ferramenta consiste na atribuição de notas
                            baseadas em parâmetros fisiológicos como frequência
                            cardíaca, frequência respiratória e nível de
                            consciência.
                            <br />
                            <br />
                            Uma pontuação extra é atribuída nos casos de
                            necessidade de intervenção com nebulizadores e em
                            casos de presença de vômitos persistentes no
                            pós-operatório.
                            <br />
                            <br />A pontuação varia em uma escala de 0 a 3
                            pontos, indicando se existe gravidade. A pontuação
                            extra é de 2 pontos para a presença de cada item. A
                            somatória da nota atribuída a criança varia de 0 a
                            13 pontos, indicando ao profissional de saúde quais
                            intervenções deverão ser realizadas com a criança.
                        </div>
                    </div>
                </div>
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
