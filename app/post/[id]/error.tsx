'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  reset()
  return (
    <div>
      <h2 className="text-white">Something went wrong!</h2>
      <button className="text-white" onClick={() => reset()}>Try again</button>
    </div>
  )
}