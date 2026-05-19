import { lazy, Suspense, memo, useState } from "react"
import SplineLoader from "../Global/SplineLoader"

const Spline = lazy(() => import("@splinetool/react-spline"))

const Jarvis = memo(function Jarvis() {
  const [loaded, setLoaded] = useState(false)
  const dismiss = () => setLoaded(true)

  return (
    <div className="spline-scene relative min-h-64">
      <SplineLoader loaded={loaded} />
      <Suspense fallback={null}>
        <Spline
          scene="https://prod.spline.design/aDCBl92mDMa7wFOh/scene.splinecode"
          onLoad={dismiss}
          onError={dismiss}
        />
      </Suspense>
    </div>
  )
})

export default Jarvis
