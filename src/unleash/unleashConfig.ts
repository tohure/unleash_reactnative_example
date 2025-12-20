import { createAsyncStorage } from '@react-native-async-storage/async-storage';
import { IConfig } from '@unleash/proxy-client-react';
import { UNLEASH_URL, UNLEASH_CLIENT_KEY, UNLEASH_APP_NAME } from '@env';

const storage = createAsyncStorage('unleashDB');

export const unleashConfig: IConfig = {
  url: UNLEASH_URL,
  clientKey: UNLEASH_CLIENT_KEY,
  refreshInterval: 60,
  appName: UNLEASH_APP_NAME,
  bootstrap: require('./defaultFlags.json'),
  bootstrapOverride: false, // Use storage cache if available, otherwise JSON
  storageProvider: {
    save: (name: string, data: any) =>
      storage.setItem(name, JSON.stringify(data)),
    get: async (name: string) => {
      const data = await storage.getItem(name);
      return data ? JSON.parse(data) : undefined;
    },
  },
};
