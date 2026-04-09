import { ChartGallery } from "../components/Home/ChartGallery";

export function meta() {
  return [
    { title: "ília Charts - Home" },
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
