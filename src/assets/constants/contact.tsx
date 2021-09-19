// Import dependencies
import dotenv from "dotenv";

// Import assets
import locationIcon from "assets/media/Location.png";
import chatIcon from "assets/media/Chat.png";
import mailIcon from "assets/media/Mail.png";
import phoneIcon from "assets/media/Phone.png";

dotenv.config();

export const developerWebsite = "https://franarrigoni.vercel.app/";

export const location = {
  type: "location",
  title: "Gral. San Martin 1284, Neuquén",
  icon: locationIcon,
  link: "https://g.page/farmaceuticosasociados",
};

export const chat = {
  type: "chat",
  title: "Atención por WhatsApp",
  icon: chatIcon,
  link: "https://wa.me/542995799121?text=Hola!%20Vengo%20del%20sitio%20web",
};

export const mail = {
  type: "mail",
  title: "farmaceuticosasociados@gmail.com",
  icon: mailIcon,
  link: "#Contact",
};

export const phone = {
  type: "phone",
  title: "299 579 9121 – 299 447 5777",
  icon: phoneIcon,
};

// Google Spreadsheet
export const path = "https://spreadsheets.google.com/feeds/list";
export const parameters = "public/values?alt=json";
export const spreadsheetIds = {
  activos: "1S0mXgKbdX8EPRkXEf7PKx8W63AoHTG5boDY-Ii2ke7c",
  vademecum: "1t-IbQFLlWPNsdF1DNIqVuP5vSaGHBwCFtvS0Tz9ZnDM",
};
