import * as React from 'react';
import Link from 'next/link'
import styled from '@emotion/styled';


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

// styled-component形式
const Navgation: React.FC = styled.div`
  background: #fcfcfc;
  padding: 10px 20px;
`;

const NavigationContainer = styled.ul`
  display:flex;
  justify-content: center;
  align-item: center;
  .item {
    color: #222;
    font-size: 24px;
    list-style: none;
    padding: 10px;
    text-decoration: none;
    transition-duration: 0.3s;
    &:hover {
      text-shadow: 2px 2px 3px #8888;
      cursor: pointer;
    }
  }
`;

const Navigation: React.FC = () => {
  return (
    <Navgation>
      <NavigationContainer>
      {
        navigationeMenu.map( menu => (
          <Link href={menu.path}>
            <div className="item">{menu.label}</div>
          </Link>
        ))
      }
      </NavigationContainer>
    </Navgation>
  )
}
export default Navigation
