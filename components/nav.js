import Link from "next/link";
import { useRouter } from "next/router";
export default function Nav() {
  const { pathname } = useRouter();
  return (
    <ul class={`border-r text-center h-full text-lg `}>
      <Link href="/">
        <a>
          <li
            class={`h-20 flex justify-center items-center hover:bg-teal-800   ${
              pathname == "/" ? "bg-teal-700" : null
            }`}
          >
            Home
          </li>
        </a>
      </Link>
      <Link href="/tank">
        <a>
          <li
            class={`h-20 flex justify-center items-center hover:bg-teal-800   ${
              pathname == "/tank" ? "bg-teal-700" : null
            }`}
          >
            Tanks
          </li>
        </a>
      </Link>
      <Link href="#">
        <a>
          <li
            class={`h-20 flex justify-center items-center hover:bg-teal-800   ${
              pathname == "/fish" ? "bg-teal-700" : null
            }`}
          >
            Fish
          </li>
        </a>
      </Link>
      <Link href="#">
        <a>
          <li
            class={`h-20 flex justify-center items-center hover:bg-teal-800   ${
              pathname == "/calendar" ? "bg-teal-700" : null
            }`}
          >
            Tanks
          </li>
        </a>
      </Link>
    </ul>
  );
}
