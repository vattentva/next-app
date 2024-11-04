
import { IUserRepository } from './IUserRepository';
import { supabase } from '../supabase/client';
import { UserEntity } from '@/domain/entities/UserEntity';

export class UserRepository implements IUserRepository {
  async findById(id: string): Promise<UserEntity | null> {
    const { data, error } = await supabase
      .from('User')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error(error);
      return null;
    }
    return data ? new UserEntity(data.id, data.name, data.email) : null;
  }

  async delete(id: string): Promise<string | null> {
    const { data, error } = await supabase
      .from('User')
      .delete()
      .eq('id', id)
      .single();
    
    if (error) {
      console.error(error);
      return null;
    }
    return id;
  }
}
