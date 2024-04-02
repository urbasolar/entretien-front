import { createContext } from 'react';

type TUser = {
  email: string;
  password: string;
  job: string;
  company: string;
  city: string;
  country: string;
  phone: string;
};

export const UserContext = createContext<TUser | null>(null);
