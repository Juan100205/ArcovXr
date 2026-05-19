import { lazy, Suspense, memo, useState } from "react"
import SplineLoader from "../Global/SplineLoader"

const Spline = lazy(() => import("@splinetool/react-spline"))

const Coworking = memo(function Coworking() {
  const [loaded, setLoaded] = useState(false)
  const dismiss = () => setLoaded(true)

  return (
    <div className="spline-scene w-full relative min-h-64">
      <SplineLoader loaded={loaded} />
      <Suspense fallback={null}>
        <Spline
          scene="https://prod.spline.design/RKDcNmxLuEsfsIRU/scene.splinecode"
          onLoad={dismiss}
          onError={dismiss}
        />
      </Suspense>
    </div>
  )
})

export default Coworking
