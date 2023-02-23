
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../demo/service/ProductService';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Tag } from 'primereact/tag';

const Dashboard = () => {
    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const dt = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []);

    const next = () => {
        setActiveIndex(activeIndex + 1);
    };

    const back = () => {
        setActiveIndex(activeIndex - 1);
    };

    const openNew = () => {
        setProductDialog(true);
    }

    const hideDialog = () => {
        setProductDialog(false);
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="Đăng ký" icon="pi pi-plus" className="p-button-info mr-2" onClick={openNew} />
            </React.Fragment>
        )
    }

    const statusBodyTemplate = (product) => {
        return <Tag value={product.status} severity={getSeverity(product)}></Tag>;
    };

    const getSeverity = (product) => {
        switch (product.status) {
            case 'Scheduled':
                return 'info';

            case 'In Progress':
                return 'warning';

            case 'Completed':
                return 'success';

            case 'Cancelled':
                return 'danger';

            default:
                return null;
        }
    };

    const onRowClick = (e, rowData) => {

    };

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">Danh sách ca khám</h5>
            <span className="p-input-icon-right">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Tìm kiếm..." />
            </span>
        </div>
    );
    const productDialogFooter = (
        <React.Fragment>
            {activeIndex === 0 && (
                <React.Fragment>
                    <Button label="Tiếp tục" icon="pi pi-chevron-right" className="p-button-info" onClick={next} />
                </React.Fragment>
            )}
            {activeIndex === 1 && (
                <React.Fragment>
                    <Button label="Quay lại" icon="pi pi-chevron-left" className="p-button-secondary" onClick={back} />
                    <Button label="Tạo ca khám" icon="pi pi-plus" className="p-button-info" onClick={next} />
                </React.Fragment>
            )}
        </React.Fragment>
    );

    return (
        <div className="datatable-crud-demo">
            <div className="card khoa-check">
                <Toolbar className="mb-4 cd" left={leftToolbarTemplate}></Toolbar>

                <DataTable ref={dt} value={products} selectionMode="single" onRowClick={onRowClick}
                    dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" header={header} responsiveLayout="scroll">
                    <Column field="patientId" header="Mã bệnh nhân" sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="doctorId" header="Bác sĩ khám" sortable style={{ minWidth: '16rem' }}></Column>
                    <Column field="departmentRoomId" sortable header="Tên phòng khám"></Column>
                    <Column field="date" header="Ngày" style={{ minWidth: '8rem' }}></Column>
                    <Column field="time" header="Giờ" style={{ minWidth: '10rem' }}></Column>
                    <Column field="notes" header="Ghi chú" style={{ minWidth: '12rem' }}></Column>
                    <Column field="status" header="Trạng thái" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="createdAt" header="Ngày tạo" style={{ minWidth: '12rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={productDialog} style={{ width: '800px', height: '650px' }} header={`Đăng ký bệnh nhân (${activeIndex + 1}/2)`} footer={productDialogFooter} modal className="p-fluid" onHide={hideDialog}>
                <div>
                    <div className="p-grid p-justify-center">
                        {activeIndex === 0 && (
                        <div className="p-col-10">
                            <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Tìm kiếm bệnh nhân..." />
                            <h5>Thông tin bệnh nhân</h5>
                            <div class="formgrid grid">
                                <div class="field col-12 md:col-6">
                                    <label for="firstname2">Tên bệnh nhân</label>
                                    <InputText></InputText>
                                </div>
                                <div class="field col-12 md:col-6">
                                    <label for="lastname2">Địa chỉ</label>
                                    <InputText></InputText>
                                </div>
                                <div class="field col-12 md:col-6">
                                    <label for="firstname2">Số điện thoại</label>
                                    <InputText></InputText>
                                </div>
                                <div class="field col-12 md:col-6">
                                    <label for="lastname2">Ngày tháng năm sinh</label>
                                    <Calendar id="icon" showIcon />
                                </div>
                                <div class="field col-12 md:col-6">
                                    <label for="lastname2">Giới tính</label>
                                    <Dropdown optionLabel="name" placeholder="Chọn giới tính" />
                                </div>
                                <div class="field col-12 md:col-6">
                                    <label for="lastname2">Đối tượng bảo hiểm</label>
                                    <Dropdown optionLabel="name" placeholder="Chọn đối tượng bảo hiểm" />
                                </div>
                                <div class="field col-12 md:col-6">
                                    <label for="lastname2">CMND/CCCD</label>
                                    <InputText></InputText>
                                </div>
                                <div class="field col-12 md:col-6">
                                    <label for="lastname2">Địa chỉ email</label>
                                    <InputText></InputText>
                                </div>
                            </div>
                            <Accordion>
                                <AccordionTab header="Thông tin bổ sung">
                                <div class="formgrid grid">
                                    <div class="field col-12 md:col-6">
                                        <label for="firstname2">Nghề nghiệp</label>
                                        <InputText></InputText>
                                    </div>
                                    <div class="field col-12 md:col-6">
                                        <label for="lastname2">Nơi làm việc</label>
                                        <InputText></InputText>
                                    </div>
                                    <div class="field col-12 md:col-6">
                                        <label for="firstname2">Dân tộc</label>
                                        <InputText></InputText>
                                    </div>
                                    <div class="field col-12 md:col-6">
                                        <label for="lastname2">Quốc tịch</label>
                                        <InputText></InputText>
                                    </div>
                                </div>
                                </AccordionTab>
                            </Accordion>
                        </div>
                        )}
                        {activeIndex === 1 && (
                        <div className="p-col-10">
                            <div class="formgrid grid">
                                <div class="field col-12 md:col-6">
                                    <label for="firstname2">Lí do khám</label>
                                    <InputText></InputText>
                                </div>
                                <div class="field col-12 md:col-6">
                                    <label for="lastname2">Chọn dịch vụ</label>
                                    <Dropdown optionLabel="name" placeholder="Chọn dịch vụ" />
                                </div>
                                <div class="field col-12 md:col-6">
                                <label for="lastname2">Phòng khám</label>
                                    <Dropdown optionLabel="name" placeholder="Chọn phòng khám" />
                                </div>
                                <div class="field col-12 md:col-6">
                                <label for="lastname2">Bác sĩ khám</label>
                                    <Dropdown optionLabel="name" placeholder="Chọn bác sĩ khám" />
                                </div>
                                <div class="field col-12 md:col-12">
                                <label for="lastname2" className='text-primary font-bold'>Thành tiền</label>
                                    <InputText disabled value={15}></InputText>
                                </div>
                                <div class="field col-12 md:col-12">
                                <label for="lastname2" className='text-primary font-bold'>Bệnh nhân trả</label>
                                    <InputText disabled value={12}></InputText>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default Dashboard;
