interface Props {
  params: {
    slug: string;
  };
}

export default async function DynamicPage({ params }: Props) {
  const res = await fetch('http://localhost:3000/api/hello', {
    cache: 'no-cache',
  });

  return <h1>{params.slug}</h1>;
}
