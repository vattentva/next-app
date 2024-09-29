'use client';
import { Button } from '@/components/ui/Button';
import { handleRedirect } from '@/shared/actions';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // console.error(error.name, error.message);
  }, [error]);

  return (
    <>
      <h2>Something went wrong!</h2>
      <Button label='Back to Home' intent={'danger'} ev={()=>handleRedirect('/help')} />
    </>
  );
}