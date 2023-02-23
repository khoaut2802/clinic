import React, { useState, useEffect, useRef } from "react";
import { Card } from 'primereact/card';
import { TabView, TabPanel } from 'primereact/tabview';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { InputText } from 'primereact/inputtext';

const Appointment = () => {
    const title = (
        <>Nguyễn Xuân Khoa</>
    );

    const editorRef = useRef()
    const [ editorLoaded, setEditorLoaded ] = useState( false )
    const { CKEditor, ClassicEditor} = editorRef.current || {}

    useEffect( () => {
        editorRef.current = {
          CKEditor: require( '@ckeditor/ckeditor5-react' ).CKEditor, //Added .CKEditor
          ClassicEditor: require( '@ckeditor/ckeditor5-build-classic' ),
        }
        setEditorLoaded( true )
    }, [] );

   const [data, setData] = useState('');

    const subTitle = (
        <>Ngày sinh: 13/06/2000

        Tuổi (tháng): 22 (8)

        Giới tính: Nam

        Bác sĩ khám: Nguyen Van A

        Mã ca khám: 176616

        Mã bệnh nhân: 176613

        </>
    );

    return (
        <Card title={title} subTitle={subTitle}>
            <TabView scrollable>
                <TabPanel header="Khám bệnh">
                    <Accordion>
                        <AccordionTab header="Chỉ số sinh tồn" >
                        <div className="col-12">
                            <div className="p-fluid formgrid grid">
                                <div className="field col-3 md:col-3">
                                    <label htmlFor="firstname2">Nhiệt độ</label>
                                    <InputText id="firstname2" type="text" />
                                </div>
                                <div className="field col-3 md:col-3">
                                    <label htmlFor="lastname2">Huyết áp</label>
                                    <InputText id="lastname2" type="text" />
                                </div>
                                <div className="field col-3 md:col-3">
                                    <label htmlFor="lastname2">Nhịp thở</label>
                                    <InputText id="lastname2" type="text" />
                                </div>
                                <div className="field col-3 md:col-3">
                                    <label htmlFor="lastname2">Mạch</label>
                                    <InputText id="lastname2" type="text" />
                                </div>
                                <div className="field col-3 md:col-3">
                                    <label htmlFor="firstname2">Chiều cao</label>
                                    <InputText id="firstname2" type="text" />
                                </div>
                                <div className="field col-3 md:col-3">
                                    <label htmlFor="lastname2">Cân nặng</label>
                                    <InputText id="lastname2" type="text" />
                                </div>
                                <div className="field col-3 md:col-3">
                                    <label htmlFor="lastname2">BMI</label>
                                    <InputText id="lastname2" type="text" />
                                </div>
                                <div className="field col-3 md:col-3">
                                    <label htmlFor="lastname2">SpO2</label>
                                    <InputText id="lastname2" type="text" />
                                </div>
                            </div>
                        </div>
                        </AccordionTab>
                    </Accordion>
                    <div class="grid my-3">
                        <div class="col-6 md:col-6">
                        <Accordion activeIndex={0}>
                            <AccordionTab header="Bệnh sử">
                                <CKEditor
                                    editor={ ClassicEditor }
                                    data={data}
                                />
                            </AccordionTab>
                        </Accordion>
                        </div>
                        <div class="col-6 md:col-6">
                        <Accordion activeIndex={0}>
                            <AccordionTab header="Tiền sử bệnh">
                                <CKEditor
                                    editor={ ClassicEditor }
                                    data={data}
                                />
                            </AccordionTab>
                        </Accordion>
                        </div>
                        <div class="col-6 md:col-6">
                        <Accordion activeIndex={0}>
                            <AccordionTab header="Khám lâm sàng">
                                <CKEditor
                                    editor={ ClassicEditor }
                                    data={data}
                                />
                            </AccordionTab>
                        </Accordion>
                        </div>
                        <div class="col-6 md:col-6">
                        <Accordion activeIndex={0}>
                            <AccordionTab header="Chẩn đoán sơ bộ">
                                <CKEditor
                                    editor={ ClassicEditor }
                                    data={data}
                                />
                            </AccordionTab>
                        </Accordion>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel header="Đơn thuốc">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel header="Chỉ định">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
                <TabPanel header="Kết quả XN">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
                <TabPanel header="Kết quả CĐHA">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
                <TabPanel header="Lịch sử">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabView>
        </Card>
    )
}

export default Appointment;
