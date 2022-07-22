import '../../styles/Bodys.scss'
//import '../../styles/Tests.scss'

import Image from '../../src/image/sample_sq_pic.jpg'

export default function Bodys() {
  return (
    <div>
      <div id="header">
        <div id="alitem">
          <span></span>
          <h2 class='title'>ANYAD</h2>
          <span></span>
          
          <div class="search">
            <input class="search_input" placeholder='광고할 지역을 입력하십시오'></input>
              <img class="search_ico" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"></img>
          </div>
          
        </div>
        <div>
          <ul>
            <li>빠른상담</li>
            <li>로그인</li>
            <li>회원가입</li>
          </ul>
        </div>
        <div id="ham_line-ham_wrapper">
          <div class="ham_line"></div>
          <div class="ham_line"></div>
          <div class="ham_line"></div>
        </div>
      </div>

      <div id="top_marg"></div>


      <div class="LEFT">
        <aside class="pt_left">
          <div>
            <img class="img_pt1" src={Image} />
            <h2>[닉네임]</h2>
            <button class="btn1">내 광고 관리</button>
          </div>
        </aside>
      </div>


      <div class="RIGHT">
        <div class="pt_right">
          <img class="img_pt2" src={Image} />
          <h2>[닉네임]</h2>
          <button class="btn1">프로필 사진 변경</button>

          <hr></hr>

          <table class="tg">
            <thead>
              <tr>
                <th class="tg-ov6f">닉네임</th>
                <th class="tg-ov6f" colspan="2">[닉네임]</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tg-ov6f">이메일</td>
                <td class="tg-ov6f" colspan="2">example1234@gmail.com</td>
              </tr>
              <tr>
                <td class="tg-ov6f">비밀번호</td>
                <td class="tg-ov6f" colspan="2">
                  <a href="url">변경하기</a>
                </td>
              </tr>
              <tr>
                <td class="tg-ov6f">연락처</td>
                <td class="tg-ov6f" colspan="2">010-1234-5678</td>
              </tr>
              <tr>
                <td class="tg-ov6f" rowspan="2">SNS 연동</td>
                <td class="tg-rmsp">구글연동</td>
                <td class="tg-ov6f">
                  <input type="checkbox" id="toggle" hidden />
                  <label for="toggle" class="toggleSwitch">
                    <span class="toggleButton"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td class="tg-rmsp">카카오연동</td>
                <td class="tg-ov6f">
                  <input type="checkbox" id="toggle1" hidden />
                  <label for="toggle1" class="toggleSwitch1">
                    <span class="toggleButton1"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td class="tg-ov6f" rowspan="2">마케팅 수신동의</td>
                <td class="tg-rmsp">이메일</td>
                <td class="tg-ov6f">
                  <input type="checkbox" id="toggle2" hidden />
                  <label for="toggle2" class="toggleSwitch2">
                    <span class="toggleButton2"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td class="tg-rmsp">SNS</td>
                <td class="tg-ov6f">
                  <input type="checkbox" id="toggle3" hidden />
                  <label for="toggle3" class="toggleSwitch3">
                    <span class="toggleButton3"></span>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>

          <hr></hr>


          <a href="url">서비스 탈퇴하기</a>
        </div>
      </div>
    </div>
  )
}
