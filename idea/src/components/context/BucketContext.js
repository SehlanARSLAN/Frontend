import { createContext, useContext, useEffect, useState } from "react";

const AlisverisSepetiContext = createContext();

export const useAlisverisSepeti = () => useContext(AlisverisSepetiContext);

export const AlisverisSepetiProvider = ({ children }) => {
    const [sepetUrunleri, setSepetUrunleri] = useState([]);

    useEffect(() => {
        const storedItems = localStorage.getItem("sepetUrunleri");
        if (storedItems) {
            setSepetUrunleri(JSON.parse(storedItems));
        }
    }, []);

    const sepeteEkle = (urun) => {
        setSepetUrunleri((prevItems) => {
            const existingIndex = prevItems.findIndex((item) => item.id === urun.id);
            if (existingIndex !== -1) {
                prevItems[existingIndex].adet += urun.adet;
                return [...prevItems];
            } else {
                return [...prevItems, urun];
            }
        });
    };

    const sepetiTemizle = () => {
        setSepetUrunleri([]);
    };

    useEffect(() => {
      localStorage.setItem("sepetUrunleri", JSON.stringify(sepetUrunleri));
    }, [sepetUrunleri]);

    return (
      <AlisverisSepetiContext.Provider value={{ sepetUrunleri, sepeteEkle, sepetiTemizle }}>
        {children}
      </AlisverisSepetiContext.Provider>
    );
  };
