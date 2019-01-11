import ax from './axios';

export const fetchUserInfo = (ticket?: string) => ax.get(`/api/user/info${ticket ? '?ticket=' + ticket : ''}`);
export const fetchUserList = () => ax.get(`/api/user/`);
