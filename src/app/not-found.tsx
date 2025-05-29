"use client"
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp" }}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
            <h1 className="display-1">404</h1>
            <h1 className="mb-4">Page Not Found</h1>
            <p className="mb-4"> We&apos;re sorry, the page you have looked for does not exist!</p>
            <button onClick={() => router.back()} className="btn btn-outline-primary py-2 px-3">
              Go Back To Home
              <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                <i className="fa fa-solid fa-arrow-right"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}