import React from "react";
import CardProductos from "./CardProductos";

const Tienda = [
    {
        "title": "Mancuernas",
        "image": "https://rutinasentrenamiento.com//wp-content/uploads/hand-grip-azul-600x600.jpg",
        "precio": 509.55,

    },
    {
        "title": "Ab roller",
        "image": "https://images-na.ssl-images-amazon.com/images/I/61EAisQtkhL._AC_SL1001_.jpg",
        "precio": 671.44,

    },
    {
        "title": "Pesas ajustables 10Kg y 40Kg",
        "image": "https://img.bestdealplus.com/ae04/kf/He0c36affd279470a9f0939eac68cc168h.jpg",
        "precio": 979.55,

    },
    {
        "title": "Set kit 4 Pesas Rusas Kettlebell 2,4,6,8kg",
        "image": "https://www.mrfitness.es/pics/2020/08/07/yxst-kettlebell-2kg4kg6kg8kg10kg12kg14kg18kg20kg-equipo-de-entrenamiento-de-gimnasio-en-casa-fuerza-fitness-entrenamiento-con-pesas-pilates2k-2936.jpg",
        "precio": 2500.33,

    },
    {
        "title": "Cuerda para saltar",
        "image": "https://m.media-amazon.com/images/I/41VPkyVIDrL._AC_SX425_.jpg",
        "precio": 193.22,

    },
    {
        "title": "Tapete de ejercicio",
        "image": "https://soyfit.com.mx/wp-content/uploads/2021/02/Tapete-Rosa-SF.jpg",
        "precio": 379.11

    },
    {
        "title": "Pelotas para pilates",
        "image": "https://totalmedic.com.mx/pub/media/catalog/product/cache/image/1000x1320/249a04e11078a485979b671cc312a5a7/p/e/pelota_pilates_55_cm.jpg",
        "precio": 289.99

    },
    {
        "title": "Guantes deportivos",
        "image": "https://ae01.alicdn.com/kf/HTB1QLkUoTmWBKNjSZFBq6xxUFXaw.jpg",
        "precio": 199.89


    },
    {
        "title": "Bandas de resistencia ",
        "image": "https://http2.mlstatic.com/D_NQ_NP_994872-MLM42981808026_082020-O.jpg",
        "precio": 470.69

    }
]


 function TiendaOnline() {
    return (
        <div className="row d-flex justify-content-center w-100">
            {
                Tienda.map(c =>
                    < CardProductos
                        title={c.title}
                        image={c.image}
                        precio={c.precio}
                        
                       
                    />
        
                )
            }
        </div>
    );
}
export default TiendaOnline;