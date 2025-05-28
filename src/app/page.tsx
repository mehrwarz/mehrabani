import { auth, signOut } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

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
    <Link href={"/login"}><input type="button" value={"Login"}/></Link>
      <h1>Home page. </h1>
      <Image src={"/assets/Images/logo.svg"} height={300} width={380} alt="Logo" priority={false}/>
      <br />
      Loged in with: { session?.user?.email}
      < br/>
    </div>
  );
}
