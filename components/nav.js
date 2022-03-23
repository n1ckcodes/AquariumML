import Link from "next/link";

export default function Nav() {
  return (
    <ul class="border-r text-center h-full">
      <Link href="/">
        <a>
          <li class="hover:bg-teal-700">Home</li>
        </a>
      </Link>
      <Link href="/tank">
        <a>
          <li class="hover:bg-teal-700">Tanks</li>
        </a>
      </Link>
      <li>Fish</li>
      <li>Calendar</li>
    </ul>
  );
}
