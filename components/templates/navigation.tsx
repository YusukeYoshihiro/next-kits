import * as React from 'react';
import Link from 'next/link'

interface Menu {
  path: string,
  label: string
}
const navigationeMenu: Array<Menu> = [{
  path: '/',
  label: 'Index',
},{
  path: '/about',
  label: 'About',
},{
  path: '/reduceSample',
  label: 'reduceSample',
}];

const Navigation: React.FC = () => {
  return (
    <div className="nav-menu">
      <ul>
      {
        navigationeMenu.map( menu => (
          <li>
            <Link href={menu.path}>{menu.label}</Link>
          </li>
        ))
      }
      </ul>
    </div>
  )
}
export default Navigation
