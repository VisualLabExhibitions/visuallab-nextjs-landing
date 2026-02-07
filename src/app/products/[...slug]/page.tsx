// app/docs/[...slug]/page.tsx
export default function DocsPage({ params }: { params: { slug?: string[] } }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Docs Page</h1>
      <p>Path segments:</p>
      <pre>{JSON.stringify(params.slug)}</pre>
    </div>
  );
}
