import { MdClose, MdMenu} from 'react-icons/md'
import { SideMenuModalContainer, SideMenuModal_ } from './styles'
import { useEffect } from 'react';
import { ToggleMenu } from '../../../styles/globalStyle';


export default function SideMenuModal({showMenu, setShowMenu, children}) {

    
    const closeMenu =(e)=>{
        if(e.target.className.includes('mobile-menu')){
             setShowMenu(false)
        }
     }
     const closeMenu2 =(e)=>{
         e.stopPropagation()
         setShowMenu(false)
     }
     
     useEffect(() => {
        if(showMenu){
            // get the body and set overflow to hidden
            document.body.style.overflow = 'hidden'
        }else{
            // get the body and set overflow to auto
            document.body.style.overflow = 'auto'
        }
       
     }, [showMenu])
     


  return (
    <SideMenuModal_ className='mobile-menu' show={showMenu} onClick={closeMenu}>
        <SideMenuModalContainer show={showMenu} width='350px' top='0'>
            <div style={{position: 'absolute', right: '10px', top: '10px'}}>
                <ToggleMenu onClick={closeMenu2} className="'mobile-menu togglemenu-wrapper">
                    {
                        showMenu ? <MdClose className='togglemenu'/> : <MdMenu className='togglemenu'/>
                        
                    }
                </ToggleMenu>
            </div>
            {children}
        </SideMenuModalContainer>
    </SideMenuModal_>
  )
}
