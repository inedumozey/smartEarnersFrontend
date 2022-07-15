import { useRouter } from 'next/router';
import AdminLayout from "./adminLayout/AdminLayout.jsx";
import UsersLayout from "./usersLayout/UsersLayout.jsx";
import PublicLayout from "./publicLayout/PublicLayout.jsx";

const Layouts =({children})=>{
    const router = useRouter();
    const path = router.pathname;

    if(path.includes('dashboard')){
      return <UsersLayout>{children}</UsersLayout>
    }

    else if(path.includes('admin')){
      return <AdminLayout>{children}</AdminLayout>
    }

    else{
      return <PublicLayout>{children}</PublicLayout>
    }
}

export default Layouts;