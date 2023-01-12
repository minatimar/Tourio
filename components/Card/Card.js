import Image from "next/image";

export default function Card({ data }) {
  return (
    <>
      <div>
        <Image src={data.image} width={300} height={300} alt={data.name} />
        <div>{data.name}</div>
        <p>Location: {data.location}</p>
      </div>
    </>
  );
}
