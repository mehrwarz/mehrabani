import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";
import Footer from "../components/footer";

export default function Workspace({ children }: { children: React.ReactNode }) {


  return (
    <div className="d-flex h-100">
      <Sidebar />
      <section className="d-flex align-content-between flex-wrap h-100 w-100">
          <Header />
          {children}
          <Footer />
      </section>
    </div>
  );
}