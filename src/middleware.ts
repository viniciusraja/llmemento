import { NextResponse } from "next/server";

const ALLOWED_ORIGINS =
  process.env.NODE_ENV === "production"
    ? ["https://www.esecriar.com", "https://www.esecriar.com"]
    : ["http://localhost:3000"];

export function middleware(req: Request) {
  // retrieve the current response
  const res = NextResponse.next();

  // retrieve the HTTP "Origin" header
  // from the incoming request
  const origin = req.headers.get("origin") as string;

  // if the origin is an allowed one,
  // add it to the 'Access-Control-Allow-Origin' header
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.headers.append("Access-Control-Allow-Origin", origin);
  }

  // add the remaining CORS headers to the response
  res.headers.append("Access-Control-Allow-Credentials", "true");
  res.headers.append(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT"
  );
  res.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return res;
}

export const config = {
  match: "/api/:path*",
};
