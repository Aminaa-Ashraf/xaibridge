import Link from "next/link";

type Props = {
  title: string;
  crumb: string;
  description?: string;
};

export default function PageHero({ title, crumb, description }: Props) {
  return (
    <section className="relative z-10 overflow-hidden pb-8 pt-12 lg:pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 md:w-8/12 lg:w-7/12">
            <h1 className="mb-5 max-w-[570px] text-2xl font-bold text-white sm:text-3xl">
              {title}
            </h1>
            {description && (
              <p className="max-w-[570px] text-base font-medium leading-relaxed text-body-color-dark">
                {description}
              </p>
            )}
          </div>
          <div className="w-full px-4 md:w-4/12 lg:w-5/12">
            <div className="flex items-center md:justify-end">
              <Link
                href="/"
                className="pr-1 text-base font-medium text-body-color-dark hover:text-primary"
              >
                Home
              </Link>
              <span className="mx-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color" />
              <span className="text-base font-medium text-primary">{crumb}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
