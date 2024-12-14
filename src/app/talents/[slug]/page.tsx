import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `{slug} at TuuperCove`,
  description: "A brand new platform from crazy to project like me?!?!?",
};

export default async function Talents({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  return <div>Vtuber: {slug}</div>
}