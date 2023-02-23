import getConfig from 'next/config';
import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const model = [
        {
            label: 'Trang chủ',
            items: [{ label: 'Danh sách ca khám', icon: 'pi pi-fw pi-list', to: '/' },
                    { label: 'Chi tiết ca khám', icon: 'pi pi-fw pi-th-large', to: '/appointment/appointment-detail'}]
        },
        {
            label: 'Kho thuốc phòng khám',
            items: [{ label: 'Dữ liệu thuốc', icon: 'pi pi-fw pi-list', to: '/medicine' },
                    { label: 'Đơn thuốc', icon: 'pi pi-fw pi-th-large', to: '/medicine/prescription'}]
        },
        {
            label: 'Quản trị',
            items: [{ label: 'Phòng chuyên khoa', icon: 'pi pi-fw pi-list', to: '/department-room' }]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}

                {/* <Link href="https://www.primefaces.org/primeblocks-react">
                    <a target="_blank" style={{ cursor: 'pointer' }}>
                        <img alt="Prime Blocks" className="w-full mt-3" src={`${contextPath}/layout/images/banner-primeblocks${layoutConfig.colorScheme === 'light' ? '' : '-dark'}.png`} />
                    </a>
                </Link> */}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
