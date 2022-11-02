export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Posts</h1>
      {children}
    </>
  );
}
