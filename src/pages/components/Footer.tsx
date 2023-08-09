import { env } from "~/env.mjs";

export default function Footer() {
  const hasImprint = env.NEXT_PUBLIC_IMPRINT && env.NEXT_PUBLIC_IMPRINT_URL;

  return (
    <footer className="flex w-full items-center justify-center bg-base-300 px-4 py-6">
      <div>
        {hasImprint && (
          <a href={env.NEXT_PUBLIC_IMPRINT_URL} className="link-hover link">
            {env.NEXT_PUBLIC_IMPRINT}
          </a>
        )}
      </div>
    </footer>
  );
}
