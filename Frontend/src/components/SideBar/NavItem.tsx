import React from "react";
import IconArrowRight from '../../assets/icons/Arrow-right.svg'
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../context/hooks";
import { toggleSideMenu } from "../../context/pageSettingsSlice";

interface NavItemProps {
  className: string;
  Icon: string;
  title: string;
  gotToPath?: string;
}

function NavItem({className, Icon, title, gotToPath }: NavItemProps): React.ReactNode {
  const dispatchRedux = useAppDispatch();
  return (
    <div className={`${className} nav-details`}>
      <Icon />
       <NavLink className='nav-details__link' to={gotToPath!} onClick={() => {
        dispatchRedux(toggleSideMenu())
       }}>
        {title}
       </NavLink>
      
      <IconArrowRight />  
    </div>
  )
}

export default NavItem;