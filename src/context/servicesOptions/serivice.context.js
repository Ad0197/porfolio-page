import { createContext } from "react";

const SERVICE_OPTION_DATA = {
  servicesOptions: [
    {
      displayName: "Desarrollo de WebApps",
      route: "/service/webapps",
      iconRef: "desktop",
    },
    {
      displayName: "Desarrollo de Aplicaciones Mobiles",
      route: "/service/mobile",
      iconRef: "mobile",
    },
    {
      displayName: "Diseño de Logo y de Marcas",
      route: "/service/design",
      iconRef: "tabletDesign",
    },
  ],
  emails: [
    "adrison.gomez@hotmail.com",
    "adrisonjr.gomez@gmial.com",
    "adevsgomez@gmail.com",
  ],

  contacts: [
    {
      displayName:"Linkedin",
      url: "",
    },
    {
      displayName:"GitHub",
      url: "",
    },
    {
      displayName:"Behance",
      url: "",
    },
    {
      displayName:"Facebook",
      url: "",
    },
    {
      displayName:"Instagram",
      url: "",
    },
  ],
};

export const ServiceContext = createContext(SERVICE_OPTION_DATA);
