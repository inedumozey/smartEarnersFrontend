import { MdClose, MdMenu} from 'react-icons/md'
import { MobileMenuContainer, MobileMenu } from './styles'
import { ToggleMenu } from '../../styles/globalStyle'


export default function MobileMenu_({showMenu, setShowMenu, children}) {

    const closeMenu =(e)=>{
        if(e.target.className.includes('mobile-menu')){
             setShowMenu(false)
        }
     }
     const closeMenu2 =(e)=>{
         e.stopPropagation()
         setShowMenu(false)
     }

  return (
    <MobileMenu className='mobile-menu' show={showMenu} onClick={closeMenu}>
        <MobileMenuContainer show={showMenu} width='350px' top='0'>
            <div style={{position: 'absolute', right: '10px', top: '10px'}}>
                <ToggleMenu onClick={closeMenu2} className="'mobile-menu togglemenu-wrapper">
                    {
                        showMenu ? <MdClose className='togglemenu'/> : <MdMenu className='togglemenu'/>
                        
                    }
                </ToggleMenu>
            </div>
            {children}
        </MobileMenuContainer>
    </MobileMenu>
  )
}
