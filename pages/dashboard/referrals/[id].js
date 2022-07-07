import { useRouter } from "next/router"

export default function referreeId() {
    const router = useRouter()
    const {id} = router.query
  return (
    <div>referree id: {id}</div>
  )
}
