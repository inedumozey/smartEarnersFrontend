import { useRouter } from 'next/router';
import AdminLayout from "./adminLayout/AdminLayout";
import UsersLayout from "./usersLayout/UsersLayout";
import GeneralLayout from "./generalLayout/GeneralLayout";

const Layouts =({children})=>{

    const router = useRouter()
    
    const path = router.pathname;
    
    if(path.includes('dashboard')){
      return <UsersLayout>{children}</UsersLayout>
    }

    else if(path.includes('admin')){
      return <AdminLayout>{children}</AdminLayout>
    }

    else{
      return <GeneralLayout>{children}</GeneralLayout>
    }
}

export default Layouts;