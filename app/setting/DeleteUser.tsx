'use client';

import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { DefaultSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

interface UserSession extends DefaultSession {
    user: DefaultSession['user'] & {
        id: string
    }
}
export default function DeleteUser({ user }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  async function handleDelete(userId?: string) {
    if (!userId) return;
    try {
      const response = await fetch(`/api/user?id=${userId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData.error);
        return;
      }
      // 必要に応じて、削除後の処理を実行
      const result = await response.json();
      signOut();
      revalidatePath('/');

    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  return (
    <>
      <Button intent={'danger'} ev={()=>setIsOpen(true)} label='アカウント削除' />
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="text-black mb-4">全てのデータが削除されます。本当によろしいですか？</p>
            <div className="flex space-x-2">
              <Button intent={'secondary'} ev={()=>setIsOpen(false)} label='キャンセル' />
              <Button intent={'danger'} ev={()=>handleDelete(user.id)} label='削除する' />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
