import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident()
{
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para isso.</p>
                
                    <Link className="back-link" to="/profile">
                        <ArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form>
                    <input placeholder="TItulo do caso" />
                    <textarea placeholder="Descrição"></textarea>
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}