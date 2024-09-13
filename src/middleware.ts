import { convexAuthNextjsMiddleware , createRouteMatcher,isAuthenticatedNextjs,nextjsMiddlewareRedirect } from "@convex-dev/auth/nextjs/server";
 

const isPublicPage = createRouteMatcher(["/sign-in","/sign-up","/"])
const isAuthPage = createRouteMatcher(["/sign-in","/sign-up"])
export default convexAuthNextjsMiddleware((request) => {

    if(!isPublicPage(request) && !isAuthenticatedNextjs()){
        return nextjsMiddlewareRedirect(request,"/sign-in")
    }
    if( isAuthPage(request) && isAuthenticatedNextjs()){
      return nextjsMiddlewareRedirect(request, "/")
    }
});
 
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};