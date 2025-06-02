import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header"
export default function Workspace({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="content-field">
        {children}
      </main>
    </>
  );
}