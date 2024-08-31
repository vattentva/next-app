export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="m-20">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <p className="mb-4">This is the Dashboard section.</p>
      {children}
    </div>
  );
}
