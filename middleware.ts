
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
//import admin from "@/lib/firebaseAdmin"; // firebase-admin configurado

export async function middleware(req: NextRequest) {
  //const token = req.cookies.get("token")?.value;

  //if (!token) {
  //  return NextResponse.redirect(new URL("/", req.url));
  //}

  try {
    //const decoded = await admin.auth().verifyIdToken(token);
    //const role = decoded.role || "morador"; // role salvo no Firestore
    const role = req.cookies.get("role")?.value || "admin";

    const adminPaths = ["/compras", "/estoque", "/financas", "/moradores", "/prestadores", "/relatorios"];
    const sindicoPaths = ["/financas", "/moradores", "/prestadores", "/relatorios"];

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
  } catch (err) {
    console.log("Token inválido", err);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
