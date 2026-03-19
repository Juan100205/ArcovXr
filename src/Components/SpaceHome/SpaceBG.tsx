import { lazy, Suspense, memo, useState } from "react"
import { AnimatePresence } from "framer-motion"
import PageLoader from "../Global/PageLoader"

const Spline = lazy(() => import("@splinetool/react-spline"))

const SpaceBG = memo(function SpaceBG() {
  const [loaded, setLoaded] = useState(false)
  const dismiss = () => setLoaded(true)

  return (
    <div className="spline-scene w-full absolute top-0 left-0 h-full opacity-50">
      <AnimatePresence>
        {!loaded && <PageLoader key="loader" />}
      </AnimatePresence>
      <Suspense fallback={null}>
        <Spline
          scene="https://prod.spline.design/cgQ33n517CUuCrbV/scene.splinecode"
          onLoad={dismiss}
          onError={dismiss}
        />
      </Suspense>
    </div>
  )
})

export default SpaceBG
