import getConfig from 'next/config';

export class AppointmentService {
    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getAppointments() {
        return fetch(this.contextPath + '/demo/data/appointments.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
