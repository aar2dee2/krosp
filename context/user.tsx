import React from "react";
import { UserInterface, UserContextInterface } from "../types/user"
  
export const UserContext = React.createContext<UserContextInterface | null>(null);

export const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [user, setUser] = React.useState<UserInterface>({
      username: "",
      phoneNumber: "",
      email: "",
      timezoneOffset: 0,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      phoneVerified: false,
      stripeCustomerId: "",
    })

    function updateUser(key: keyof UserInterface, value: string | boolean | number) {
      setUser(prevUser => {
        return {
          ...prevUser,
          [key]: value
        }
      });
    }
    return (<UserContext.Provider 
            value={{
              userDetails: user,
              updateUserDetails: updateUser,
            }}>
            {children}
            </UserContext.Provider>)
}