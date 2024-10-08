import { SampleData } from '@/components/dashboard/SampleData';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <Suspense fallback={<p>loading feed...</p>}>
      <SampleData />
    </Suspense>
  );
}
