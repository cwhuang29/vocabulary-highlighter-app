import apis from 'shared/constants/apis';

// export const getBaseURL = () => (__DEV__ ? apis.LOCAL_HOST : apis.HOST);
export const getBaseURL = () => (__DEV__ ? apis.HOST : apis.HOST);
