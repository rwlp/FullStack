import React from "react";
import IconArrowRight from '../../assets/icons/Arrow-right.svg'

interface NavItemProps {
  className: string;
  Icon: string;
  title: string;
}

function NavItem({className, Icon, title }: NavItemProps): React.ReactNode {

  return (
    <div className={className}>
      <Icon />
      <span className={`${className}__title`}>{title}</span>
      <IconArrowRight />
    </div>
  )
}

export default NavItem;