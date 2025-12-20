import React, { PropsWithChildren } from 'react';
import { FlagProvider } from '@unleash/proxy-client-react';
import { unleashConfig } from './unleashConfig';

export const UnleashProvider = ({ children }: PropsWithChildren) => {
  return <FlagProvider config={unleashConfig}>{children}</FlagProvider>;
};
