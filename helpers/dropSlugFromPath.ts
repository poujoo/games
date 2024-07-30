export function dropSlugFromPath(pathname:string,path:string){
  return "/"+pathname.split("/")[1]+"/+path";
}