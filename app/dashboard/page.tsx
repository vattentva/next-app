import { Suspense } from 'react';
import Sample from './route-handler';

export default async function Page() {
  return (
    <Suspense fallback={<p>loading feed...</p>}>
      <Sample />
    </Suspense>
  );
}
