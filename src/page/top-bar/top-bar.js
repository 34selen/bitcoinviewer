import styles from "./top-bar.module.css"
import { Link } from "react-router-dom"
import { useState } from "react";
function Top_bar(){
    const [activeMenu,setActiveMenu]=useState({
        즐겨찾기:false,
        인기순:false,
        회원정보:false,
        검색:false
    });
    function onMouseEnterHandler(event){
        setActiveMenu((prev)=>{
            return{...prev, event.target.id:true};
        })

    }
    function onMouseLeaveHandler(event){
        activeMenu[event.target.id]=false;
    }
    return(
        <div className={styles.topBarContainer}>
            <Link to="/">
                <img src="/favicon.png" className={styles.menuicon}></img>
            </Link>
            <ul className={styles.topBarButtonList}>
                <li id="즐겨찾기"className={styles.topBarButtonLeft} onMouseEnter={(event)=>onMouseEnterHandler(event)} onMouseLeave={(event)=>onMouseLeaveHandler(event)}>
                    즐겨찾기
                    {activeMenu["즐겨찾기"]?<div>aaaaa</div>:null}
                    </li>
                <li id="인기코인"className={styles.topBarButtonLeft}>인기코인</li>
                <li id="회원정보"className={styles.topBarButtonRight}>회원정보</li>
                <li id="검색"className={styles.topBarButtonRight}>검색</li>
            </ul>

        </div>
        
    )
}

export default Top_bar;