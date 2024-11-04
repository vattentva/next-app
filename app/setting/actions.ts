import { options } from '@/auth';
import { getServerSession } from 'next-auth/next';

export async function serverSession() {
  const session = await getServerSession(options);
  return session;
}
