import { UserInfo } from '@/domain/models/Sample';
import { getApi } from '../repositories/BaseApi';
import { API_PATH } from '@/shared/constants/Constants';

export async function getSampleData(): Promise<UserInfo> {
  console.log(API_PATH.SAMPLE);
  
  return await getApi<UserInfo>(API_PATH.SAMPLE);
};
