export default function PlaceholderPage({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
      <p className="mt-3 text-muted-foreground">
        {description || "This page will be crafted next. Tell us what specific content and structure you want here and we'll build it to perfection."}
      </p>
      <div className="mt-8 rounded-2xl border p-6">
        <p className="text-sm text-muted-foreground">Looking for something specific? Ask to expand this page with sections, media galleries, and interactive elements.</p>
      </div>
    </div>
  );
}
