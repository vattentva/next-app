import { HUGGINGFACE_URL_BASE, INFERENCE_API } from '@/shared/constants/appConstants';

export const query = async () => {
  const HOST = HUGGINGFACE_URL_BASE;
  const PATH = INFERENCE_API.CLASSIFICATION;
  const TOKEN = process.env.INFERENCE_API_TOKEN;

  const data = {
    inputs: 'Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!',
    parameters: {candidate_labels: ['refund', 'legal', 'faq']}
  };

  try {
    const response = await fetch(HOST + PATH,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      console.error(await response.json());
      return { status: `${response.status} ${response.statusText}` };
    }
    return await response.json();

  } catch (error) {
    console.error(error);
  }
};
