export interface UserInterface {
    username: string;
    email: string;
    phoneNumber: string;
    timezoneOffset: number;
    timezone: string;
    phoneVerified: boolean;
    stripeCustomerId: string;
}

// export UserProp extends keyof UserInterface

export interface UserContextInterface {
    userDetails: UserInterface;
    updateUserDetails: (key: keyof UserInterface, value: string | boolean | number) => void
}