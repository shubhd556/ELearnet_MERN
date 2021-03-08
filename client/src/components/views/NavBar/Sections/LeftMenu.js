import React from 'react';
import { Menu } from 'antd';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <Menu.Item key="course">
      <a href="/courses">Courses</a>
    </Menu.Item>
    <Menu.Item key="chat">
      <a href="/chat">Chat</a>
    </Menu.Item>
    <Menu.Item key="quiz">
      <a href="/Quizes">Quizes</a>
    </Menu.Item>
    <Menu.Item key="videos">
      <a href="/videos">Videos</a>
    </Menu.Item>
    <Menu.Item key="kanban">
      <a href="/Kanban">Kanban</a>
    </Menu.Item>
    
  </Menu>
  )
}

export default LeftMenu