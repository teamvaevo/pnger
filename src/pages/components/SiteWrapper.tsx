import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}
export default function SiteWrapper(props: Props) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Navbar />
      <main className="h-full w-full px-8 sm:w-3/4 md:w-1/2 md:px-0">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
