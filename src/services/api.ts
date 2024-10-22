import { config } from "dotenv";

config();

const HOME_PAGE_API = "https://sanatan-digital-system-backend.onrender.com";

export const fetchHomePage = async () => {
  try {
    const response = await fetch(`${HOME_PAGE_API}/homepage`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching logo:", error);
    throw error;
  }
};
