import { ChartGallery } from "~/components/home/ChartGallery";

export function meta() {
  return [
    { title: "ília Charts - home" },
    { name: "description", content: "ília Charts - data visualization" },
  ];
}

export default function Home() {
  return (
    <div>
      <ChartGallery />
    </div>
  );
}
