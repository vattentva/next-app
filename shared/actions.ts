'use server';
import { redirect } from 'next/navigation';

export const handleRedirect = (url: string) => {
  redirect(url);
};
