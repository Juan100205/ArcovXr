import { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import PageLoader from "../Components/Global/PageLoader"

// Lazy loading por ruta: cada página genera su propio chunk en el build.
const Home_Main = lazy(() => import("../App/Home"))
const Home3D    = lazy(() => import("../App/Home_3D"))
const HomeVR    = lazy(() => import("../App/Home_VR"))
const HomeChat  = lazy(() => import("../App/Home_Chat"))
const HomeIA    = lazy(() => import("../App/Home_IA"))
const HomeSpace = lazy(() => import("../App/Home_Space"))

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/Home_Main"  element={<Home_Main />} />
        <Route path="/Home3D"     element={<Home3D />} />
        <Route path="/HomeVr"     element={<HomeVR />} />
        <Route path="/HomeChat"   element={<HomeChat />} />
        <Route path="/HomeIA"     element={<HomeIA />} />
        <Route path="/HomeSpace"  element={<HomeSpace />} />
        <Route path="/*"          element={<Navigate to="/Home_Main" />} />
      </Routes>
    </Suspense>
  )
}
