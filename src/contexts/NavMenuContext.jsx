import { useState } from "react";
import { createContext } from "react";

export const NavMenuContext = createContext();

export const NavMenuContextProvider = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownActive, setMobileDropdownActive] = useState(false);

  return (
    <NavMenuContext.Provider
      value={{
        mobileMenuOpen,
        setMobileMenuOpen,
        mobileDropdownActive,
        setMobileDropdownActive,
      }}
    >
      {children}
    </NavMenuContext.Provider>
  );
};
