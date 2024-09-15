import { UserInfo } from '@/domain/models/Sample';
import { getSampleData } from '@/infrastructure/api/getSampleData';

export async function SampleData() {
  // display data from route handler
  const data: UserInfo = await getSampleData();
  console.log('🚀 ~ SampleData ~ data:', data);

  return  (
    <>
      <p>{data.request.origin}</p>
      <p>{data.request.pathname}</p>
      <p>{data.request.search}</p>
      <p>{data.method}</p>
      <p>{data.userAgent}</p>
      <p>{data.currentTime}</p>
    </>
  );
}
