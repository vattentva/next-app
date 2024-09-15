import { getClassificationData } from '@/infrastructure/api/getClassificationData';

export async function ClassificationData() {
  const data = await getClassificationData();
  if (data === null) return <p>Error</p>;

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">User Query</h2>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">{data.sequence}</p>

      <h3 className="text-xl font-semibold mb-4 text-gray-800">Labels & Scores</h3>
      <ul className="space-y-4">
        {data.labels.map((label, index) => (
          <li key={label} className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border border-gray-200">
            <span className="text-lg text-gray-900">{label}</span>
            <span className="text-lg font-semibold text-blue-600">{(data.scores[index] * 100).toFixed(2)}%</span>
          </li>
        ))}
      </ul>
    </>
  );
}
