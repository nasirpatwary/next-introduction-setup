import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    let cookie = request.cookies.get('nextjs')
    console.log("Yes I am succes ---->", cookie.value);
  const checkAdmin = {
    role: "user", 
    email: "test@gmail.com"
  }
  let isLoggledPage = request.nextUrl.pathname.startsWith('/about')
  const checkValid = checkAdmin.role === "admin"
  if (isLoggledPage && !checkValid) {
    //   return NextResponse.redirect(new URL('/', request.url))
      return NextResponse.rewrite(new URL('/login', request.url))
  }
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }