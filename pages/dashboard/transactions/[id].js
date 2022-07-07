import { useRouter } from "next/router"

export default function transactionId() {
    const router = useRouter()
    const {id} = router.query
    
  return (
    <div>transaction id: {id}</div>
  )
}
