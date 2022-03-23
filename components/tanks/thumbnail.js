import Link from "next/link";

export default function TankThumbnail(props) {
  return (
    <div class="mb-10">
      <Link href={`/tank/${props.id}`}>
        <a>
          <div class="w-2/5 border rounded-lg inline-block border-1 border-black hover:cursor-pointer p-5">
            <p>Name: {props.Name}</p>
            <p>Gallons: {props.Size}</p>
            <p>Type: {props.Type}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
