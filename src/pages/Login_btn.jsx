import '../../styles/Login_btn.scss'


export default function Login_btn() {
    return (
        
      <div>    
        <title>Document</title>
        <div className="bluebox"><p className="bluebox_anyad">ANYAD</p></div>
        <div className="whitebox">
          <div className="wrap">
            <p>ANYAD에 오신걸 환영합니다!</p>
            <p className="ex">소셜 디자인으로 ANYAD에 참여해보세요.</p>
            <form action>
              <button type="submit" className="google">GOOGLE 계정으로 로그인</button>
              <br />
              <button type="submit" className="kakao">KAKAO 계정으로 로그인</button>
              <div className="line1" />
              <p className="or">또는</p>
              <div className="line2" />
              <button type="submit" className="anyad">ANYAD 로그인</button>
            </form>
          </div>
        </div>
      </div>

    )
}