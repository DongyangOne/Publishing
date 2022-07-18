import '../../styles/Register_input.scss'

export default function Register_It(){
    return (
        <div>
            <div className="blue_box"> 
                <p className="bluebox_anyad">ANYAD</p>
        </div>
        <div className="white_box">
            <div id="wrap">
                <h2>가입하기</h2>
                <form action method="POST">
                <div className="input-box">
                    <div>이메일</div>
                    <input id="username" type="text" name="username" />
                </div>
                <div className="input-box">
                    <div>비밀번호</div>
                    <input id="password" type="password" name="password" />
                </div>
                <div className="input-box">
                    <div>비밀번호 확인</div>
                    <input id="password_chk" type="text" name="password_chk" />
                </div>
                <div className="chk_box">
                    <input type="checkbox" className="chk" name="accept" /><label htmlFor="chk"> 서비스 약관과 개인정보처리방침에 동의합니다.</label>
                </div>
                <div>
                    <input className="submit" type="submit" defaultValue="회원가입" />
                </div>
                </form>
          </div>        
        </div>
      </div>
    )
}