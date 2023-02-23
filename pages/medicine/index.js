import React, { useState, useEffect, useRef } from "react";
import { Card } from 'primereact/card';
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Accordion, AccordionTab } from "primereact/accordion";
import { DataTable } from 'primereact/datatable';
import { MedicineService } from '../../demo/service/MedicineService';
import { Column } from "primereact/column";

const Medicine = () => {
    const [medicines, setMedicines] = useState(0);
    const medicineService = new MedicineService();
    const dt = useRef(null);

    useEffect(() => {
        medicineService.getMedicines().then(data => setMedicines(data));
    }, []);

    const rightContents = (
        <React.Fragment>
            <div className="p-inputgroup mr-3">
                <InputText placeholder="Tìm kiếm theo tên thuốc..."/>
                <Button icon="pi pi-search" className="p-button-info"/>
            </div>
            <div>
                <Button label="Thêm" className="p-button-info" icon="pi pi-plus" iconPos="left" />
            </div>
        </React.Fragment>
    );

    return (
        <Card title={'Danh sách thuốc'}>
            <Toolbar right={rightContents}/>
                <Accordion className="py-3">
                    <AccordionTab header={`Dụng cụ y tế (${medicines.length})`}>
                    <DataTable ref={dt} value={medicines} selectionMode="single"
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Hiển thị {first} tới {last} của {totalRecords} thuốc" responsiveLayout="scroll">
                        <Column field="name" header="Tên thuốc" sortable style={{ minWidth: '12rem' }}></Column>
                        <Column field="instruction" header="Hướng dẫn" sortable style={{ minWidth: '16rem' }}></Column>
                        <Column field="purchase_price" sortable header="Giá nhập"></Column>
                        <Column field="sale_price" header="Giá bán" style={{ minWidth: '8rem' }}></Column>
                        <Column field="quantity" header="Số lượng" style={{ minWidth: '10rem' }}></Column>
                        <Column field="company" header="Công ty sản xuất" style={{ minWidth: '12rem' }}></Column>
                        <Column field="expire_date" header="Ngày hết hạn" sortable style={{ minWidth: '12rem' }}></Column>
                        <Column field="created_at" header="Ngày tạo" style={{ minWidth: '12rem' }}></Column>
                        <Column field="updated_at" header="Ngày cập nhật" style={{ minWidth: '12rem' }}></Column>
                    </DataTable>
                    </AccordionTab>
                    <AccordionTab header="Hô hấp - Ho - Cảm (2)">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                    </AccordionTab>
                    <AccordionTab header="Kháng sinh (2)">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </AccordionTab>
                </Accordion>
        </Card>
    )
}

export default Medicine;
