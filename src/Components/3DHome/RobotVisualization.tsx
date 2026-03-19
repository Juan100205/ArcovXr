import { lazy, Suspense, memo, useState } from "react"

const Spline = lazy(() => import("@splinetool/react-spline"))

const Robot = memo(function Robot() {
  const [loaded, setLoaded] = useState(false)

  const dismiss = () => setLoaded(true)

  return (
    <div className="spline-scene w-full relative min-h-64">
      <div className={`absolute inset-0 z-10 flex items-center justify-center bg-black/60 rounded-2xl transition-opacity duration-500 ${loaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <div className="w-8 h-8 border-2 border-[#10e0fe] border-t-transparent rounded-full animate-spin" />
      </div>
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
