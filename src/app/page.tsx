import LoginForm from "./login/loginForm";

export default async function Home() {

  return (
    <div className="container-fluid vh-100 p-0 m-0 d-flex align-items-center justify-contient-center bg-info">
      <LoginForm />
    </div>
    
  );
}
