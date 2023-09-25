import styles from "./top-bar.module.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
function TopBar({coinData}){
    const [coinList,setCoinList]=useState([]);
    const [activeMenu,setActiveMenu]=useState({
        즐겨찾기:false,
        코인목록:false,
        회원정보:false,
        검색:false
    });
    useEffect(()=>{
        if(coinData!=null){
            const coinNameArray = coinData.map(item => item.name);
            setCoinList(coinNameArray);
        }
        }
    ,[coinData])
    const favorits=JSON.parse(window.localStorage.getItem('favorits'));
    function onMouseEnterHandler(event){
       
        setActiveMenu((prevState)=>({
            ...prevState,
            [event.target.id]:true
        }))

    }

    function onMouseLeaveHandler(event){
        setActiveMenu((prevState)=>({
            ...prevState,
            [event.target.id]:false
        }))
    }
    return(
        <div className={styles.topBarContainer}>
            <Link to="/">
                <img src="/favicon.png" className={styles.menuicon} alt="favicon"></img>
            </Link>
            <ul className={styles.topBarButtonList}>
                <li id="즐겨찾기"className={styles.topBarButtonLeft} onMouseEnter={(event)=>onMouseEnterHandler(event)} onMouseOut={(event)=>onMouseLeaveHandler(event)}>
                    즐겨찾기
                    {activeMenu["즐겨찾기"]?<div className={styles.list}>
                        {favorits.map((favorit,index)=>(
                            <div key={index} onMouseEnter={(event)=>console.log(event)}>
                                {favorit}
                            </div>
                        ))}
                    </div>:null}
                </li>
                <li id="코인목록"className={styles.topBarButtonLeft} onMouseEnter={(event)=>onMouseEnterHandler(event)} onMouseOut={(event)=>onMouseLeaveHandler(event)}>코인목록
                {activeMenu["코인목록"]?<div className={styles.list}>
                        {coinList.map((coinName,index)=>(
                            <div key={index} onMouseEnter={(event)=>console.log(event)}>
                                {coinName}
                            </div>
                        ))}
                    </div>:null}
                </li>
                <li id="회원정보"className={styles.topBarButtonRight}>회원정보</li>
                <li id="검색"className={styles.topBarButtonRight}>검색</li>
            </ul>

        </div>
        
    )
}

export default TopBar;