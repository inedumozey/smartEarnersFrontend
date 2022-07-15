import { useRouter } from "next/router";


export default function Agreement() {
  const router = useRouter()
  
  return (
    <>
        <div style={{
            fontSize: '.8rem',
            textAlign: 'left',
            padding: '5px',
            width: '100%',
        }}>
            <span>By continuing, you agree to our </span>
            <span onClick={()=>router.push('/tc')} style={{fontStyle: 'italic', color: 'blue', cursor: 'pointer'}}>Terms and Service </span>
            <span>and </span>
            <span onClick={()=>router.push('/policy')} style={{fontStyle: 'italic', color: 'blue', cursor: 'pointer'}}>Privacy Policy. </span>
            <span>This site uses essential cookies. See our </span>
            <span onClick={()=>router.push('/cookies')} style={{fontStyle: 'italic', color: 'blue', cursor: 'pointer'}}>Cookie Notice </span>
            <span>for more information. </span>
            
        </div>
    </>
  )
}
