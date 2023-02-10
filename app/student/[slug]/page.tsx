import data from "@/lib/content.json";

export default function Page({ params }: { params: { slug: string } }) {
  const content = data.content.find((item) => item.title === params.slug);

  return (
    <div>
      <div>{content!.title}</div>
      <div>{content!.content}</div>
    </div>
  );
}
