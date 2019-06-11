<template>
    <div class="search-nav">
        <div class="top">
            <a href="javascript:;" @click="closeSeachNav" class="close-nav">关闭</a>
            <form action="/search" method="GET">
                <input name="query" type="search"/>
            </form>
        </div>
        <ul>
            <li>
                <div><a href="/movie" target="_blank"><strong style="color: rgb(35, 132, 232);">电影</strong><span>影院热映</span></a><a href="https://douban.com/location" target=""><strong style="color: rgb(230, 70, 126);">同城</strong><span>周末活动</span></a><a href="https://read.douban.com"
                    target=""><strong style="color: rgb(159, 120, 96);">阅读</strong><span>电子书</span></a><a href="/status" target="_blank"><strong style="color: rgb(225, 100, 77);">广播</strong><span>友邻动态</span></a>
                </div>
            </li>
            <li>
                <div><a href="/tv" target="_blank"><strong style="color: rgb(122, 106, 219);">电视</strong><span>正在热播</span></a><a href="/group" target="_blank"><strong style="color: rgb(42, 184, 204);">小组</strong><span>志趣相投</span></a>
                    <a href="/game" target="_blank"><strong style="color: rgb(87, 116, 197);">游戏</strong><span>虚拟世界</span>
                    </a><a href="https://douban.fm" target=""><strong style="color: rgb(64, 207, 169);">FM</strong><span>红心歌单</span></a>
                </div>
            </li>
            <li>
                <div><a href="/book" target="_blank"><strong style="color: rgb(159, 120, 96);">图书</strong><span>畅销排行</span></a><a href="/music" target="_blank"><strong style="color: rgb(244, 143, 46);">音乐</strong><span>新碟榜</span></a>
                    <a href="/mobileapp" target="_blank"><strong style="color: rgb(89, 108, 221);">应用</strong><span>玩手机</span>
                    </a><a href="https://market.douban.com/?utm_campaign=mobile_web_douban_nav&utm_source=douban&utm_medium=mobile_web" target=""><strong style="color: rgb(66, 189, 86);">豆品</strong><span>生活美学</span></a>
                </div>
            </li>
        </ul>
        <div class="nav-item">
            <a style="width:100%" class="toLogin" href="http://accounts.douban.com/passport/login?redir=https://m.douban.com/">登录豆瓣</a>
        </div>
        <div class="nav-item" style="margin-bottom: 2px solid #f3f3f3">
            <a style="width:49.5%;border-right: 1px solid #939393;" class="toPC" href="/to_pc/?url=https%3A%2F%2Fm.douban.com%2F">使用桌面版</a>
            <a style="width:50%" href="https://www.douban.com/doubanapp/dispatch?copy_open=1&from=mdouban&download=1&model=B&copy=1&page=&channel=m_ad_nav&uri=%2F" class="toApp">使用豆瓣App</a>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            closeSeachNav:Function
        }
    }
</script>
<style lang="less">
    .search-nav{
        position: absolute;
        width:100%;
        left: 0;
        top:0;
        z-index:999;
        background-color: white;
        .top{
            padding: 30px 36px;
            height: 124px;
            box-sizing:border-box;
            font-size:0;
            border-bottom: 1px solid #f3f3f3;
        }
        .close-nav{
            display: inline-block;
            height: 60px;
            line-height: 60px;
            font-size: 32px;
            color:#42bd56;
            vertical-align:middle;
        }
        form{
            display:inline-block;
            width:594px;
            height:62px;
            vertical-align:middle;
            margin-left:20px;
            input{
                width:100%;
                height:100%;
                box-sizing:border-box;
                border-radius:6px;
                font-size:28px;
                padding:0 20px;
                background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 50% #f3f3f3;
                background-size:34px;
                &:focus{
                    background-image:none;
                }
            }
        }
        ul{
            margin-top:50px;
            li{
                width:33.33%;
                display:inline-block;
                vertical-align:middle;
                a{
                    display:block;
                    width:104px;
                    height:90px;
                    margin-left:70px;
                    margin-bottom:50px;
                    strong{
                        display:block;
                        font-size:48px;
                        line-height:56px;
                        text-align:center;
                    }
                    span{
                        display:block;
                        color:#999;
                        height:34px;
                        font-size:24px;
                        text-align:center;
                    }
                }
            }
        }
        .nav-item{
            border-top: 2px solid #f3f3f3;
            padding: 26px 0;
            font-size:0;
            a{
                margin: 0 auto;
                text-align: center;
                text-decoration: none;
                font-size: 30px;
                color: #42bd56;
                display:inline-block;
            }
        }
    }

</style>