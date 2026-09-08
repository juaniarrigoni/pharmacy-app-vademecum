// Import assets
import locationIcon from "assets/media/Location.png";
import chatIcon from "assets/media/Chat.png";
import phoneIcon from "assets/media/Phone.png";

export const phoneNumber = "5492995799121";

// Destino de las consultas de profesionales sobre una fórmula del vademécum.
// Hoy es el mismo número que atiende al público; el día que el laboratorio
// tenga línea propia para profesionales, se cambia acá y nada más.
export const laboratoryPhoneNumber = phoneNumber;

// Copy del mensaje de consulta. Vive acá para que ajustarlo no obligue
// a abrir un componente.
export const laboratoryInquiryIntro =
  "Hola! Consulta sobre una fórmula del vademécum:";
export const laboratoryInquiryPrompt = "Mi consulta:";

export const developerWebsite = "https://franarrigoni.vercel.app/";

export const location = {
  type: "location",
  title: "Belgrano 2005, Neuquén",
  icon: locationIcon,
  link: "https://g.page/farmaceuticosasociados",
};

export const chat = {
  type: "chat",
  title: "Atención por WhatsApp",
  icon: chatIcon,
  link: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hola! Vengo del sitio web"
  )}`,
};

export const phone = {
  type: "phone",
  title: "299 579 9121",
  icon: phoneIcon,
};

// Google Spreadsheet
export const path = "https://docs.google.com/spreadsheets/d";
export const parameters = "public/values?alt=json";
export const spreadsheetIds = {
  vademecum: "1t-IbQFLlWPNsdF1DNIqVuP5vSaGHBwCFtvS0Tz9ZnDM",
  activos: "1S0mXgKbdX8EPRkXEf7PKx8W63AoHTG5boDY-Ii2ke7c",
};

export const formulaPersonalizadaId = " (Fórmula personalizada)";
