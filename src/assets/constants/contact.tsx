// Import dependencies
import dotenv from "dotenv";

// Import assets
import locationIcon from "assets/media/Location.png";
import chatIcon from "assets/media/Chat.png";
import phoneIcon from "assets/media/Phone.png";

dotenv.config();

export const phoneNumber = "5492995799121";

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
  link: "https://wa.me/542995799121?text=Hola!%20Vengo%20del%20sitio%20web",
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
