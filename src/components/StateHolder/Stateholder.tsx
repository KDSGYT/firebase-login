import { create } from 'domain';
import { UserInfo } from 'os';
import { createContext } from 'react';

export const userCTX = createContext({});
export const UserCTXProvider = userCTX.Provider;
export const UserCTXConsumer = userCTX.Consumer;
