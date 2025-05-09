import { auth, signOut } from "@/_lib/auth";
import Image from "next/image";
export default async function Home() {

  const session = await auth();
  return (
    <div className="main">
      <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
      <h1>Home page. </h1>
      <Image src={"/Images/logo.svg"} height={300} width={380} alt="Logo" priority={false}/>
      <br />
      { JSON.stringify(session)}
    </div>
  );
}
