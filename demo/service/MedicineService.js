import getConfig from 'next/config';

export class MedicineService {
    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getMedicines() {
        return fetch(this.contextPath + '/demo/data/medicines.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
