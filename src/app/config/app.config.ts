import { environment } from '../../environments/environment';

export const AppConfig = {
    apiBaseUrl: environment.apiBaseUrl,
    notification: {
        position: ['top', 'right'],
        lastOnBottom: false,
        timeOut: 5000,
    }
};
