import { nanoid } from 'nanoid';
export const generateVerificationCode = (): string => {
  const nanoId = nanoid();
  return nanoId;
};
