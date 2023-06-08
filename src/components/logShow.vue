<template>
    <section>
        <div class="tips">
            <i class="fa-regular fa-circle-question"></i>
        </div>
        <div class="content1">
            <div class="btn">
                <button><i class="fa-solid fa-play"></i>开始</button>
                <button><i class="fa-regular fa-folder"></i>打开文件夹</button>
            </div>
            <div class="logging">
                <div class="loggingShow" title="程序日志信息"><span>程序日志信息</span></div>
            </div>
            <div class="logImgShow" title="截图展示">
                <div>
                    <img src="" alt="">
                </div>
            </div>
        </div>
        <div class="content2" style="display: none;">等待完善...</div>
        <div class="content3" style="display: none;">等待完善...</div>
    </section>
    
</template>

<script>
export default {

}
</script>

<style scoped>
    section {
        width: 100%;
    }
    .tips {
        margin: 30px;
        color: #3c77fc;
        font-size: 30px;
        display: flex;
        justify-content:flex-end;
    }
    .btn{
        display: flex;
        justify-content: center;
    }
    .btn button {
        width: 200px;
        height: 70px;
        font-size: 25px;
        margin: 50px;
        color: #4e4e4e;
        box-shadow: 5px 5px 10px #b2b2b2;
    }
    .btn button {
        /* 选择器 */
    }
    .btn button i {
        margin-right: 10px;
    }
    .logging {
        display: flex;
        justify-content: center;
        margin: 60px;
    }
    .loggingShow {
        width: 400px;
        height: 120px;
        border:5px solid #3c77fc;
        border-radius:20px;
        padding: 10px;
        color: #878787;
    }
    .logImgShow {
        display: flex;
        justify-content: center;
        
    }
    .logImgShow div {
        width: 550px;
        height: 400px;
        border:5px solid #e4e4e4;
        border-radius:20px;
        box-shadow: 5px 5px 10px #b2b2b2;
    }



</style>