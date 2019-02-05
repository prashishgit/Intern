import request from '@/utils/request'
// var post = {
//     id: '',
//     name: '',
//     description: '',
//     department: '',
//     level: ''
// }
export function addPost(id, name, description, department, level) {
    return request({
        url: '/api/account/authenticate',
        method: 'post',
        data: {
            id,
            name,
            description,
            department,
            level
        }
    })
}

export function editPost(id, name, description, department, level) {
    return request({
        url: '/api/account/authenticate',
        method: 'post',
        data: {
            id,
            name,
            description,
            department,
            level
        }
    })
}
export function deletePost(id, name, description, department, level) {
    return request({
        url: '/api/account/authenticate',
        method: 'post',
        data: {
            id,
            name,
            description,
            department,
            level
        }
    })
}