import { lazy, Suspense, memo, useState } from "react"
import SplineLoader from "../Global/SplineLoader"

const Spline = lazy(() => import("@splinetool/react-spline"))

const Robot = memo(function Robot() {
  const [loaded, setLoaded] = useState(false)
  const dismiss = () => setLoaded(true)

  return (
    <div className="spline-scene w-full relative min-h-64">
      <SplineLoader loaded={loaded} />
      <Suspense fallback={null}>
        <Spline
          scene="https://prod.spline.design/6VQTac1t75pIoG7I/scene.splinecode"
          onLoad={dismiss}
          onError={dismiss}
        />
      </Suspense>
    </div>
  )
})

export default Robot
