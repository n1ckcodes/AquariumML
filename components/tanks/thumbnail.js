import Link from "next/link";

export default function TankThumbnail(props) {
  return (
    <Link href={`/tank/${props.id}`}>
      <a>
        <div class="w-2/5 border rounded inline-block border-1 border-black hover:cursor-pointer">
          {props.tankId}
        </div>
      </a>
    </Link>
  );
}
