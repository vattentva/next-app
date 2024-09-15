import { UserInfo } from '@/domain/models/Sample';
import { getSampleData } from '@/infrastructure/api/getSampleData';
import { ErrorResponse, isErrorResponse } from '@/shared/types/httpResponse';

export async function SampleData() {
  // const data: UserInfo|ErrorResponse = await getSampleData();
  // console.log('🚀 ~ SampleData ~ data:', data);
  // if (isErrorResponse(data)) {
  //   return <p>Error: {data.status} - {data.message}</p>;
  // }

  return  (
    <>
      <h1>Dashborad Page</h1>
      {/* <p>{data.request.origin}</p>
      <p>{data.request.pathname}</p>
      <p>{data.request.search}</p>
      <p>{data.method}</p>
      <p>{data.userAgent}</p>
      <p>{data.currentTime}</p> */}
    </>
  );
}
