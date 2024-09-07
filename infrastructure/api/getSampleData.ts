import { UserInfo } from '@/domain/models/Sample';
import { fetchSampleData } from '@/infrastructure/repositories/sampleApi';

export const getSampleData = async (): Promise<UserInfo> => {
  return await fetchSampleData();
};
