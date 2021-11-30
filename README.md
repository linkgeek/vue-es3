## 上传界面接口联调
views/Upload.vue 文件中进行接口联调

1. 视频上传接口
请看views/Upload.vue 文件的第7，8行代码
action="/api/upload/file"即后台接口地址
name="video"既为 file 的字段名字
accept="video/mp4" 视频文件被限制为只能是 mp4的形式

2. 图片上传接口联调
请看文件components/ImgUpload.vue文件
action="/api/upload/file"接口地址
name="image" 字段名称
accept="image/jpeg, image/png, image/jpg" 可以上传的文件类型控制，前端自己使用

3. 表单提交接口
请看views/Upload.vue 文件的第109行代码
this.axios.post('/admin/video/add'....
# esvue

#### 介绍
EasySwoole+ElasticSearch打造高性能小视频服务系统--前端测试页面


#### 安装教程

1. npm install
2. npm run dev

#### 使用说明

1. xxxx
2. xxxx
3. xxxx



