import { getSampleData } from '@/infrastructure/api/getSampleData';

export default async function Sample() {
  // display data from route handler
  const data = await getSampleData();

  return  (
    <div className="flex flex-col">
      <code>{JSON.stringify(data)}</code>
    </div>
  );
}
