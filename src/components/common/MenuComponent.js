/* eslint no-console:0 */

import React, { Component } from 'react';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import 'rc-menu/assets/index.css';
import animate from 'css-animation';

function createMenuBar(menuArray) {
    return <Menu onSelect={handleSelect} onOpenChange={onOpenChange}>{createSubMenu(menuArray)}</Menu>
}
function createSubMenu(menuArray) {
    console.log(menuArray);
    let listItems = [];
    for (let i = 0; i < menuArray.length; i++) {

        if (menuArray[i].subMenu) {
            listItems.push(<SubMenu key={menuArray[i].displayText} title={<span>{menuArray[i].displayText}</span>}>{createSubMenu(menuArray[i].subMenu)}</SubMenu>);
        } else {
            listItems.push(<MenuItem key={menuArray[i].displayText}>{menuArray[i].displayText}</MenuItem>);
        }
    }
    return listItems;
}

function onOpenChange(value) {
    console.log('onOpenChange', value);
}
const commonMenu = (
    <Menu onSelect={handleSelect} onOpenChange={onOpenChange}>
        <SubMenu title={<span>sub menu</span>} key="1">
            <MenuItem key="1-1">0-1</MenuItem>
            <MenuItem key="1-2">0-2</MenuItem>
        </SubMenu>
    </Menu>);
function handleSelect(info) {
    console.log(info);
    console.log(`selected ${info.key}`);
}

const animation = {
    enter(node, done) {
        let height;
        return animate(node, 'rc-menu-collapse', {
            start() {
                height = node.offsetHeight;
                node.style.height = 0;
            },
            active() {
                node.style.height = `${height}px`;
            },
            end() {
                node.style.height = '';
                done();
            }
        });
    },

    appear() {
        return this.enter.apply(this, arguments);
    },

    leave(node, done) {
        return animate(node, 'rc-menu-collapse', {
            start() {
                node.style.height = `${node.offsetHeight}px`;
            },
            active() {
                node.style.height = 0;
            },
            end() {
                node.style.height = '';
                done();
            }
        });
    }
};

export default class MenuComponent extends Component {

    render() {
        const menuArray = [
            {
                "displayText": "menu1",
                "subMenu": [{
                    "displayText": "1-1",
                    "redirectOnClick": "ComponentName"
                },
                {
                    "displayText": "1-2",
                    "redirectOnClick": "ComponentName"

                }
                ]
            },
            {
                "displayText": "menu2",
                "subMenu": [{
                    "displayText": "2-1",
                    "redirectOnClick": "ComponentName"
                },
                {
                    "displayText": "2-2",
                    "redirectOnClick": "ComponentName"

                }
                ]

            }
        ];
        const horizontalMenu = React.cloneElement(createMenuBar(menuArray), {
            mode: 'horizontal',
            // use openTransition for antd
            openAnimation: 'slide-up'
        });
        return (
            <div>
                <div style={{ margin: 20, width: 800 }}>{horizontalMenu}</div>
            </div>
        );
    }
}
