import { serverSession } from './actions';
import DeleteUser from './DeleteUser';

export default async function UserProfile() {
  const session = await serverSession();
  if (! session) return <div>Loading...</div>;
  if (! session.user?.name || ! session.user?.email) return null;
  
  return (
    <>
      <div>
        <label className="block text-lg mb-1">名前</label>
        <input
          type="text"
          value={session.user?.name}
          readOnly={true}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-green-500"
        />
      </div>
      <div>
        <label className="block text-lg mb-1">メールアドレス</label>
        <input
          type="email"
          value={session.user?.email}
          readOnly={true}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-green-500"
        />
      </div>
      <DeleteUser user={session.user} />
    </>
  );
}
