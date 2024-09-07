import { memo, useCallback } from "react"
import { AppRoutesProps, routeConfig } from "../../../shared/config/route/routeConfig"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "../../layouts/ui/MainLayout"


export const AppRouter = () => {
  const renderWithWrapper = useCallback(
    (route: AppRoutesProps) => (
      {
        path: route.path,
        element: route.element
      }
    ),
    [],
  )
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: Object.values(routeConfig).map(renderWithWrapper),
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default memo(AppRouter)
