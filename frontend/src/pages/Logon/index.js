import React from 'react';
import { LogIn } from 'react-feather';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';


import './styles.css';

export default function Logon()
{
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>
                    
                    <a href="/register">
                        <LogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </a>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes "/>
        </div>
    );
}