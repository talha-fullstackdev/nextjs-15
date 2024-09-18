import { NextResponse } from "next/server";
// const isLoggedIn=true
export const middleware = (request) => {
  // if(!isLoggedIn&&request.nextUrl.pathname!="/home"){
  //     return NextResponse.redirect(new URL("/home",request.url))
  // }
  return NextResponse.redirect(new URL("/home", request.url));
};
// this way we restrict contact page and also its all paths
export const config = {
  matcher: ["/contact/:path*"],
};
