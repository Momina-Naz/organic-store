export default defineNuxtRouteMiddleware((to, from) => {
  const user = useCookie("user");
  if (!user.value && to.path !== "/login") {
    return navigateTo("/login");
  }
  if (user.value && to.path === "/login") {
    return navigateTo("/");
  }
});
