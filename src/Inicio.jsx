import React from "react";
import CardInicio from "./CardInicio";

const bod = [
    {
        title: " Ejercicios para abdomen plano",
        image: "https://static.abc.es/media/MM/2021/04/08/plank--U40124306929PrB--1350x900@abc.jpg",

    },
    {
        title: "Ejercicios con mancuernas",
        image: "https://static.abc.es/media/MM/2021/04/08/zancada-peso--U40124306929PrB--1265x900@abc.jpg",

    },
    {
        title: "Rutina de GAP",
        image: "https://static.abc.es/media/MM/2021/04/08/patada--U40124306929PrB--1418x900@abc.jpg",

    },
    {
        title: "Pesas",
        image: "https://i.blogs.es/ae6152/1024_682-6-/450_1000.jpeg",

    },
    {
        title: "Fortalece el cuerpo",
        image: "https://static.abc.es/media/MM/2021/04/08/comba-1-U40124306929PrB--1348x900@abc.jpg",

    },
    {
        title: "Meditación y Yoga",
        image: "https://i.blogs.es/67f61e/istock-1170856346/450_1000.jpeg",

    },
    {
        title: "Ejercicios de movilidad en pareja",
        image: "https://static.abc.es/media/MM/2021/04/08/plank-lateral-U40124306929PrB--1442x900@abc.jpg",

    },
    {
        title: "Barras",
        image: "https://static.abc.es/media/MM/2021/04/08/dominadas-tipos-U40124306929PrB--1350x900@abc.jpg",

    },
    {
        title: "Piernas Bonitas",
        image: "https://www.cuerpomente.com/medio/2020/12/03/ejercicios-basicos-pilates-balancin-piernas-abiertas-open-rocker_b14ae118_1500x1000.jpg",

    }
]

function Inicio() {
    return (
        <div className="row d-flex justify-content-center w-100">
            {
                bod.map(c =>
                    < CardInicio
                        title={c.title}
                        image={c.image}
                    />
                )
            }
        </div>
    );

}
export default Inicio;
