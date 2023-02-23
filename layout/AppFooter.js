import getConfig from 'next/config';
import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const dateNow = new Date().getFullYear();
    let copyrightFooter = 'Copyright ©' + dateNow;

    return (
        <div className="layout-footer">
            <img src={`${contextPath}/layout/images/logo-takatech.png`} alt="Logo" height="30" className="mr-2" />
            {copyrightFooter} by
            <a href='https://takatech.com.vn/' target='_blank'><span className="font-medium ml-2">Takatech</span></a>
        </div>
    );
};

export default AppFooter;
