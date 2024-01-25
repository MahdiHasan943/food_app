import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req, res) {
    console.log(req.nextauth.token);
    const { pathname, origin } = req.nextUrl;
    const { token } = req.nextauth;
    console.log({ pathname, origin, token });

    if (pathname.startsWith('/dashboard') && token?.user?.role !== 'admin') {
      return new NextResponse('You are not authorized!');
    }

    // If conditions are met, continue execution without returning anything.
    // You don't need to return anything here.
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log(!!token);
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/profile/:path*",
    "/protected/:path*",
    "/dashboard/:path*",
    "/AddTocart/:path*",
    "/OrderSummery/:path*",
  ],
};