// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const role = req.cookies.get("role")?.value || "morador"; // default morador

  // Se não tem token -> volta para login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Verifica se a rota é dashboard
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    let redirectUrl: string;

    switch (role) {
      case "sindico":
        redirectUrl = "/dashboard/sindico";
        break;
      case "admin":
        redirectUrl = "/dashboard/admin";
        break;
      default:
        redirectUrl = "/dashboard/morador";
    }

    if (req.nextUrl.pathname !== redirectUrl) {
      return NextResponse.redirect(new URL(redirectUrl, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // middleware roda apenas nas rotas do dashboard
};
