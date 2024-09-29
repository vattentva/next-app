'use client';
import GoogleButton from '@/components/ui/GoogleButton';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { handleRedirect } from '@/shared/actions';

export default function Page() {
  const { data: session } = useSession();
  if (session?.user) {
    handleRedirect('/');
  }
  return <GoogleButton />;
}
