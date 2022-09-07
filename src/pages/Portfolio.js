import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";
import '../components/assets/form.css';

const Portfolio = () => {
    return (
        <main>
            <Header />
            <div className="cardMember">
                <Project name='Carded' img='https://i.imgur.com/LRbStWt.png' github='https://github.com/DRCallaghan/Carded' link='https://github.com/DRCallaghan/Carded' />
                <Project name='Carbon Combaters' img='https://i.imgur.com/IdwhUbp.png' github='https://github.com/Mkish1220/CarbonCombaters' link='https://carbon-combaters.herokuapp.com/landing' />
                <Project name='Animame' img='https://i.imgur.com/b0JjDP9.png' github='https://github.com/rheangocle/Animame' link='https://rheangocle.github.io/Animame/' />
                <Project name='E-Commerce Backend' img='https://i.imgur.com/PcYYrhq.png' github='https://github.com/DRCallaghan/E-Commerce-Back-End' />
                <Project name='Social Network API' img='https://i.imgur.com/PcYYrhq.png' github='https://github.com/DRCallaghan/Social-Network-API' />
            </div>
            <Footer />
        </main>
    );
};

export default Portfolio;