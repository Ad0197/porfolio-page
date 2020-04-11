import { createContext } from "react";

const SERVICE_OPTION_DATA = {
  servicesOptions: [
    {
      id: 1,
      displayName: "Desarrollo de Aplicaciones Web",
      route: "/project/webapps",
      iconRef: "desktop",
      inverted: false,
      imgUrl:
      "https://heartize.com/lab/wp-content/uploads/2019/12/las-grandes-ventajas-del-diseno-y-desarrollo-web-a-medida.jpg",
      description:
      "Una colección de proyectos donde se utilizan diferentes tecnologias web como son ReactJs, Redux, Angular, Responsive Design, SPA, MPA, entre otras tecnologias para el frontend. En el lado del Backend, existen proyectos desarrollados en PHP, Java, Python y JavaScript utilizando diferentes librerias para el desarrollos de aplicaciones basadas en Microservicios y Arquitecturas Monoliticas",
    },
    {
      id: 2,
      displayName: "Desarrollo de Aplicaciones Mobiles",
      route: "/project/mobile",
      iconRef: "mobile",
      inverted: true,
      imgUrl:
      "https://corporativotomate.com/wp-content/uploads/2018/10/cabecera-desarrollo.png",
      description:
        "Para el desarrollo movil me he especializado utilizando flutter que es un framework diseñado por google. Aunque tengo conocimiento basicos del desarrollo de aplicaciones nativas para Android con Java.",
      },
    {
      id: 3,
      displayName: "Diseño de Logo y de Marcas",
      route: "/project/design",
      iconRef: "tabletDesign",
      inverted: false,
      imgUrl: "https://www.paredro.com/wp-content/uploads/2018/08/Que%CC%81-es-disen%CC%83o-grafico.jpg",
      description:
      "El diseño es algo que adoro. Un buen diseño debe ser capaz de comunicar una intencion de forma que sea agradable al ojo y que no sobrecargue de informacion al usuario. Aqui observaran algunos proyectos personales que estan publicos en Behance driddle.",
    },
  ],
  emails: [
    "adrison.gomez@hotmail.com",
    "adrisonjr.gomez@gmial.com",
    "adevsgomez@gmail.com",
  ],

  contacts: [
    {
      id: 1,
      displayName: "Linkedin",
      url: "",
    },
    {
      id: 2,
      displayName: "GitHub",
      url: "",
    },
    {
      id: 3,
      displayName: "Behance",
      url: "",
    },
    {
      id: 4,
      displayName: "Facebook",
      url: "",
    },
    {
      id: 5,
      displayName: "Instagram",
      url: "",
    },
  ],
};

export const ServiceContext = createContext(SERVICE_OPTION_DATA);
