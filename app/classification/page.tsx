import { ClassificationData } from '@/components/classificatiion/ClassificationData';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <Suspense fallback={<p>loading feed...</p>}>
      <ClassificationData />
    </Suspense>
  );
}
