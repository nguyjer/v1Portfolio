import styles from "./style.module.css";
import { useState } from "react";
import Image from "next/image";

export default function index() { 

    const [selectedProject, setSelectedProject] = useState(0);
    const projects = [
        {
            title: "PalestineWatch", src: "PalestineWatch.png", description: "A web application that provides resources and information about the Palestinian cause.",
        },
        {
            title: "JoinMe App", src: "JoinMeApp.png", description: "A mobile app that connects friends for social activities and events.",
        },
        {
            title: "Catify", src: "Catify.png", description: "A fun web app that generates hand-drawn cat images based on user's spotify data"
        },
        {
            title: "Portfolio Website", src: "PortfolioWebsite.png", description: "A personal creative portfolio website to showcase my projects and skills."
        },
        {
            title: "Kernel Development with AC97 Audio Integration", src: "KernelDevelopment.png", description: "Implemented AC97 audio driver in a custom OS kernel, enabling sound playback and recording capabilities."
        }
    ]
    return (
        <div id="projects" className={styles.projects}>
            <div className={styles.projectDescription}>
                <div className={styles.imageContainer}>
                    <Image
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                    />
                </div>
                <div className={styles.column}>
                    <p>{projects[0].description}</p>
                </div>
                <div className={styles.column}>
                    <p>A full stack web application built with next.js, bootstrap, flask, postgresql, sqlalchemy, and docker.
                        Implemented proper CI/CD pipelines using github actions and docker hub to ensure smooth deployment and updates.
                        Developed a robust backend using flask and postgresql to handle data storage and retrieval efficiently.
                    </p>
                </div>
            </div>
        </div>
    )
}