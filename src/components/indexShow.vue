<template>
    <div class="appList">
        <div class="leftList">
            <div class="list"><i class="fa-solid fa-rocket"></i><span>墙外路线抓取</span></div>
            <div class="list"><i class="fa-solid fa-box-open"></i><span>功能2</span></div>
            <div class="list"><i class="fa-solid fa-table-cells-large"></i><span>功能3</span></div>
            
        </div>
        <div class="withdraw">退出</div>
    </div>
</template>

<script>
export default {

}
</script>

<!-- scoped样式仅作用于当前组件 -->
<style scoped>
    .appList {
        width: 280px;
        /* background-color: rgb(174, 60, 60); */
        height: 100%;
        justify-content:flex-start;
        box-shadow: 10px 0px 10px #dadada;
    }
    .leftList {
        justify-content:center;
    }
    .leftList .list {
        color: #4e4e4e;
        font-size: 23px;
        width: 200px;
        padding: 20px 10px;
        margin: 90px auto;
        border: 1px solid #d9d9d9;
        background-color: #d9d9d9;
        text-align: center;
        border-radius:50px;
        
    }
    .leftList i {
        margin-right: 10px;
    }
.withdraw {
        text-align: center;
        align-self:flex-end;
    }
</style>