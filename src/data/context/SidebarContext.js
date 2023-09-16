import { useState, createContext } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
    const [sidebar, setSidebar] = useState(false)

    return (
        <SidebarContext.Provider value={{ sidebar, setSidebar}}>
            { children }
        </SidebarContext.Provider>
    )
}

export default SidebarContext;
