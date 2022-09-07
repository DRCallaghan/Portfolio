import React from 'react';
import Card from "react-bootstrap/Card";
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

const Project = (props) => {
    return (
        <Card style={{ width: "14.4rem" }}>
            <div className="flex-row justify-center">
                <Card.Img variant='top' src={props.img} />
            </div>
            <Card.Body>
                <Card.Title>
                    <h3>
                        {props.name}
                    </h3>
                </Card.Title>
                <div className="flex-row justify-center align-center">
                    <a style={{ fontSize: "2rem" }} href={props.github} target="blank">
                        <FaGithub />
                    </a>
                    <a style={{ fontSize: "2rem" }} href={props.link} target="blank">
                        <CgWebsite />
                    </a>
                </div>
            </Card.Body>
        </Card >
    );
};

export default Project;