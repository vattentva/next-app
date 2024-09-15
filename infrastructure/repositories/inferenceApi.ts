import { HUGGINGFACE_URL_BASE } from '@/shared/constants/Constants';

export function getUrl(path: string) {
  return HUGGINGFACE_URL_BASE + path;
}

export function getConfig(): {
  method: string,
  headers: { [key: string]: string },
  body: string,
  } {
  const INFERENCE_API_TOKEN = process.env.INFERENCE_API_TOKEN || '';
  const data = {
    inputs: 'Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!',
    parameters: {candidate_labels: ['refund', 'legal', 'faq']}
  };

  return {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${INFERENCE_API_TOKEN}`,
    },
    body: JSON.stringify(data),
  };
}

export async function getApi<T>(path: string): Promise<T|null> {
  try {
    const response = await fetch(getUrl(path), getConfig());

    // HTTPステータスコードエラーをチェック
    if (!response.ok) {
      console.error(`HTTP Error: ${response.status} - ${response.statusText}`);
      return null; // 必要に応じて、エラーメッセージやオブジェクトを返す
    }

    // JSONパースエラーをキャッチ
    try {
      const data = await response.json();
      return data as T;
    } catch (jsonError) {
      console.error('Failed to parse JSON:', jsonError);
      return null; // パースエラーの場合、nullを返す（もしくはエラーメッセージ）
    }
  } catch (networkError) {
    // ネットワークエラー、タイムアウトなどをキャッチ
    console.error('Network or fetch error:', networkError);
    return null; // 必要に応じて、エラーメッセージやオブジェクトを返す
  }
}
