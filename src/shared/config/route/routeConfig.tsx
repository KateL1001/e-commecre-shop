

import { RouteProps } from 'react-router-dom'
import { MainPage } from '../../../pages/MainPage'
import { Suspense } from 'react'



export type AppRoutesProps = RouteProps 

export enum AppRoutes {
  MAIN = 'main',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: { path: RoutePaths.main, element: <Suspense fallback="Loading..."><MainPage /></Suspense> },
}
