import { Classification } from '@/domain/models/Classification';
import { getApi } from '../repositories/inferenceApi';
import { INFERENCE_API } from '@/shared/constants/Constants';

export async function getClassificationData(): Promise<Classification|null> {
  return await getApi<Classification>(INFERENCE_API.CLASSIFICATION);
};
