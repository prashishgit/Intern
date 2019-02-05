import request from '@/utils/request'

export function login(username, password) {
    
    return request({
        url: '/api/account/authenticate',
        method: 'post',
        data: {
          username,
          password
        }
    })
}


export function logout() {
    return request({
        url: '/api/account/authenticate',
        method: 'post'
    })
}
