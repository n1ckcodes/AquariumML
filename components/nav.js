import Link from "next/link";
import { useRouter } from "next/router";
export default function Nav() {
  const { pathname } = useRouter();
  return (
    <ul class={`border-r text-center h-full text-lg`}>
      <Link href="/">
        <a>
          <li
            class={`hover:bg-teal-700  ${
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
            class={`hover:bg-teal-700  ${
              pathname == "/tank" ? "bg-teal-700" : null
            }`}
          >
            Tanks
          </li>
        </a>
      </Link>
      <li>Fish</li>
      <li>Calendar</li>
    </ul>
  );
}
