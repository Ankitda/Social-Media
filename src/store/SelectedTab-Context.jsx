import { createContext, useState } from "react";

export const SelectedTabContext = createContext({
    selectedTab: "",
    setSelectedTab: () => { }
})

const SelectedTabContextProvider = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState("Home")
    return (
        <SelectedTabContext.Provider value={
            {
                selectedTab,
                setSelectedTab
            }
        }>
            {children}
        </SelectedTabContext.Provider>
    )
}

export default SelectedTabContextProvider;