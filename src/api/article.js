import request from '../utils/request' // 引入封装得axios

// 获取IP
export default function getArticleList(data) {
    return request({
        url: '/getip',
        method: 'get',
        data
    })
}
// export default getArticleList;