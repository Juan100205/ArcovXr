import { lazy, Suspense, memo, useState } from "react"
import { AnimatePresence } from "framer-motion"
import PageLoader from "../Global/PageLoader"

const Spline = lazy(() => import("@splinetool/react-spline"))

const SplineScene = memo(function SplineScene() {
  const [loaded, setLoaded] = useState(false)
  const dismiss = () => setLoaded(true)

  return (
    <div className="spline-scene w-full absolute top-0 left-0 h-full">
      <AnimatePresence>
        {!loaded && <PageLoader key="loader" />}
      </AnimatePresence>
      <Suspense fallback={null}>
        <Spline
          scene="https://prod.spline.design/fVu2zFk0CfzFrDjx/scene.splinecode"
          onLoad={dismiss}
          onError={dismiss}
        />
      </Suspense>
    </div>
  )
})

export default SplineScene
