import UserProfile from './UserProfile';

export default function Setting() {
  return (
    <div className="w-full max-w-96 mx-auto">
      <h1 className="text-3xl font-bold mb-6">アカウント</h1>
      <div className="space-y-6">
        <UserProfile />
      </div>
    </div>
  );
};
