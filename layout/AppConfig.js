import getConfig from 'next/config';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { classNames } from 'primereact/utils';
import React, { useContext, useEffect, useState } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppConfig = (props) => {
    const [scales] = useState([12, 13, 14, 15, 16]);
    const { layoutConfig, setLayoutConfig, layoutState, setLayoutState } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const onConfigButtonClick = () => {
        setLayoutState((prevState) => ({ ...prevState, configSidebarVisible: true }));
    };

    const onConfigSidebarHide = () => {
        setLayoutState((prevState) => ({ ...prevState, configSidebarVisible: false }));
    };

    const decrementScale = () => {
        setLayoutConfig((prevState) => ({ ...prevState, scale: prevState.scale - 1 }));
    };

    const incrementScale = () => {
        setLayoutConfig((prevState) => ({ ...prevState, scale: prevState.scale + 1 }));
    };

    const applyScale = () => {
        document.documentElement.style.fontSize = layoutConfig.scale + 'px';
    };


    useEffect(() => {
        applyScale();
    }, [layoutConfig.scale]);

    return (
        <>
            <button className="layout-config-button p-link" type="button" onClick={onConfigButtonClick}>
                <i className="pi pi-cog"></i>
            </button>

            <Sidebar visible={layoutState.configSidebarVisible} onHide={onConfigSidebarHide} position="right" className="layout-config-sidebar w-20rem">
                <h5>Cỡ chữ</h5>
                <div className="flex align-items-center">
                    <Button icon="pi pi-minus" type="button" onClick={decrementScale} className="p-button-text p-button-rounded w-2rem h-2rem mr-2" disabled={layoutConfig.scale === scales[0]}></Button>
                    <div className="flex gap-2 align-items-center">
                        {scales.map((item) => {
                            return <i className={classNames('pi pi-circle-fill', { 'text-primary-500': item === layoutConfig.scale, 'text-300': item !== layoutConfig.scale })} key={item}></i>;
                        })}
                    </div>
                    <Button icon="pi pi-plus" type="button" onClick={incrementScale} className="p-button-text p-button-rounded w-2rem h-2rem ml-2" disabled={layoutConfig.scale === scales[scales.length - 1]}></Button>
                </div>
            </Sidebar>
        </>
    );
};

export default AppConfig;
