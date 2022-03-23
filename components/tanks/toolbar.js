import Link from "next/link";

export default function ToolBar() {
  return (
    <Link href="/tank/new">
      <a>
        <div class="">Add new</div>
      </a>
    </Link>
  );
}
