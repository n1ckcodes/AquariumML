import { useRouter } from "next/router";
import Nav from "./nav";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div class="w-full h-full">
      <Header />
      <div class="grid grid-cols-12 h-4/5">
        <nav class="col-span-2">
          <Nav />
        </nav>

        <div class="pl-10 col-span-10">{children}</div>
      </div>
    </div>
  );
}
