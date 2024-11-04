import { options } from '@/auth';
import { getServerSession } from 'next-auth/next';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function serverSession() {
  const session = await getServerSession(options);
  return session;
}

export async function handleRedirect(path: string) {
  revalidatePath(path);
  redirect(path);
}
