import axios from 'axios'
import eventEmitter from './Event'
axios.interceptors.request.use(function (config) {
  eventEmitter.emit('SHOW_LOADER')
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  eventEmitter.emit('HIDE_LOADER')
  return response;
}, function (error) {
  eventEmitter.emit('HIDE_LOADER')
  return (Promise.reject(error)
  );
});
export default axios;