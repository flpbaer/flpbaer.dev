import { Theme } from "../types";

export const lightTheme: Theme = {
    bg: "#fff",
    primaryText: "#000",
    muted: "rgba(0,0,0, 0.8)",
    bgButton: "rgba(255,255,255, 0.3)",
    bgPanel: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 12%)"
};

export const darkTheme: Theme = {
    bg: "#1B1B1B",
    primaryText: "#fff",
    muted: "rgba(255,255,255, 0.8)",
    bgButton: "rgba(255,255,255, 0.3)",
    bgPanel: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 12%)"
};
