import { env } from "~/env.mjs";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-end bg-base-300 px-4 py-6">
      <a href="/docs" className="link-hover link">
        Docs
      </a>
    </nav>
  );
}
