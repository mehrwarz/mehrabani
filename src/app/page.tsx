import Image from "next/image";
export default function Home() {
  return (
    <div className="main">
      <h1>Home page. </h1>
      <Image src={"/Images/logo.svg"} height={300} width={380} alt="Logo" />
    </div>
  );
}
