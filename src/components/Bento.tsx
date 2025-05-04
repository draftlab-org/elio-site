import { twMerge } from "tailwind-merge";

import { getCollection, getEntry } from "astro:content";
import { marked } from "marked";

// const styles = [
//   {
//     primary: `bg-brand-navy-50`,
//   },
//   {
//     primary: `bg-brand-purple`,
//   },
//   {
//     primary: `bg-brand-salmon`,
//   },
// ];
const portfolio = await getCollection("portfolio");

export default function Bento() {
  const styles = portfolio.map((item) => ({
    primary: `bg-brand-${item.data.background.primary_color}`,
    secondary: `bg-brand-${item.data.background.secondary_color}`,
  }));

  return (
    <section id="bento-grid" className="">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-2 lg:grid-rows-16">
          {portfolio?.map((item, index) => (
            <div
              key={item.id}
              className={twMerge(
                "col-span-1 row-span-6 flex flex-col gap-8 rounded-2xl border-[1px] border-black p-6",
                `bg-brand-${item.data.background.primary_color}`,
              )}
            >
              <p className="text-xl font-light">
                <span className="font-semibold">{item.data.id}</span> /
                {item.data.description}
              </p>
              <div className="tags mt-2 inline-flex gap-2">
                <span className="inline-flex items-center rounded-md bg-black/10 px-2 py-1 text-base font-medium text-black">
                  {item.data.role}
                </span>
                <span className="inline-flex items-center rounded-md bg-black/10 px-2 py-1 text-base font-medium text-black">
                  {item.data.period}
                </span>
              </div>
              <div className="mx-12">
                <img
                  src={item.data.image.src.src}
                  alt={item.data.id}
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
