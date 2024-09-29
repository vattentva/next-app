'use client';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Button label='Dont push' intent={'secondary'} ev={()=>{throw new Error('An error occurred');}} />
    </>
  );
}