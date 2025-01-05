'use client';
import { signIn } from 'next-auth/react';
import { GoogleLogo } from '../svg/GoogleLogo';

export default function GoogleButton() {
  async function handleSignIn() {
    try {
      const result = await signIn('google', { redirect: false });
    } catch (error) {
      alert('Sign-in failed. Please try again.');
    }
  }
  return (
    <button
      onClick={handleSignIn}
      className="flex items-center px-6 py-3 space-x-3 text-black bg-white hover:bg-gray-200 font-medium rounded-lg text-sm"
    >
      <GoogleLogo />
      <span>Sign in with Google</span>
    </button>
  );
}
