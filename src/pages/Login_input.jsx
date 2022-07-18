import '../../styles/Login_input.scss'


export default function Login_It(){
    return (
        <div>
            <div className="blue_box"> 
                <p className="bluebox_anyad">ANYAD</p>
            </div>
            <div className="white_box">
                <div id="wrap">
                    <h2>로그인</h2>
                    <form action method="POST">
                    <div className="input-box">
                        <div>이메일</div>
                        <input id="username" type="text" name="username" />
                    </div>
                    <div className="input-box">
                        <div>비밀번호</div>
                        <input id="password" type="password" name="password" />
                    </div>
                    <div className="forgot_pw">
                        <a href className="link_find" style={{float: 'right'}}>비밀번호  찾기</a>
                    </div>
                    <div className="chk_box">
                        <input className="chk" type="checkbox" name="accept" /><label htmlFor> 로그인 상태 유지</label>
                    </div>
                    <div>
                        <input className="submit" type="submit" defaultValue="로그인" />
                    </div>
                    </form>
                </div>        
            </div>
        </div>
    )
}