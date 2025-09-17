import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const role = req.cookies.get("role")?.value || "desconhecido";

  const adminPaths = ["/compras", "/estoque","/financas", "/moradores", "/prestadores", "/relatorios","/testeadd"];
  const sindicoPaths = ["/financas", "/moradores", "/prestadores", "/relatorios","/testeadd", "/moradores"];

  const url = req.nextUrl.clone();

  if (adminPaths.some((p) => req.nextUrl.pathname.startsWith(p)) && role !== "admin") {
    url.pathname = "/unauthorized";
    return NextResponse.redirect(url);
  }

  if (sindicoPaths.some((p) => req.nextUrl.pathname.startsWith(p)) && !["sindico", "admin"].includes(role)) {
    url.pathname = "/unauthorized";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/compras/:path*", "/estoque/:path*", "/financas/:path*", "/moradores/:path*", "/prestadores/:path*", "/relatorios/:path*"],
};
