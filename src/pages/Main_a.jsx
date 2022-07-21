import '../../styles/Main_a.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight ,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function Main_a() {
    return(
    <div>
        <nav>
          <h1>ANYAD</h1>
          <div className="search"> 
            <input type="text" placeholder="광고할 지역을 입력하세요" />
            <FontAwesomeIcon className="faGlass" icon={faMagnifyingGlass}/>
          </div>
          <ul>
            <li> 빠른 상담 </li>
            <li><a id="nav_a" className="login" href="index1.html">로그인</a></li>
            <li><a id="nav_a" className="sign_up" href="index.html">회원가입</a></li>
            <li> <FontAwesomeIcon className="fabars" icon={faBars} /> </li>
          </ul>

        </nav>
        {/*main1*/}
        <section className="blue_box">
          <div className="wrap1">
            <h2>ANYAD</h2>
            <div className="search2">
              <div className="search2_1">
                <input type="text" placeholder="광고할 지역을 입력하세요" />
                <FontAwesomeIcon className="faGlass_2" icon={faMagnifyingGlass}/>
              </div>
              <div className="btns">
                <button id="white_btn">버스광고</button>
                <button id="gray_btn">지하철 광고</button>
                <button id="white_btn">강남역 인근</button>
                <button id="gray_btn">병원 광고</button>
              </div>
            </div>    
          </div>
        </section>
        {/*동그란 메뉴바 시작!*/}
        <section className="white_menu">
          <div className="wrap2">
            <div className="small">
                <FontAwesomeIcon id="faAngle" icon={faAngleLeft} />
            </div>
            <div>이마트</div>
            <div>지하철</div>
            <div>버스</div>
            <div>정류장</div>
            <div>거리 시설물</div>
            <div>공항</div>
            <div>극장</div>
            <div className="small">
            <FontAwesomeIcon id="faAngle" icon={faAngleRight} />
            </div>
          </div>
        </section>
        <section className="white_box">
          <div className="wrap22">
            <div className="wrap3">
              <div className="text">지하철</div>
              <article>   
                <div className="gray_box" /> 
                <div className="box1">
                  지하철 대형 포스터
                  <FontAwesomeIcon className="box1_icon" icon={faAngleRight} />
                  <br />
                  <span className="text3">광고비</span>
                  <span className="text1"> 400,000원~7,000,000원</span>
                </div>
                <div className="box2"><span className="text2">상담 신청</span></div>
                <div className="box3"><span className="text2">진행 신청</span></div>
              </article>
              <article>
                <div className="gray_box" />
                <div className="box1">
                  지하철 대형 포스터
                  <FontAwesomeIcon className="box1_icon" icon={faAngleRight} />
                  <br />
                  <span className="text3">광고비</span>
                  <span className="text1"> 400,000원~7,000,000원</span>
                </div>
                <div className="box2"><span className="text2">상담 신청</span></div>
                <div className="box3"><span className="text2">진행 신청</span></div>
              </article>
              <article>
                <div className="gray_box" />
                <div className="box1">
                  지하철 대형 포스터
                  <FontAwesomeIcon className="box1_icon" icon={faAngleRight} />
                  <br />
                  <span className="text3">광고비</span>
                  <span className="text1"> 400,000원~7,000,000원</span>
                </div>
                <div className="box2"><span className="text2">상담 신청</span></div>
                <div className="box3"><span className="text2">진행 신청</span></div>
              </article>
            </div>
            <div className="wrap4">
              <div className="text">버스</div>
              <article>
                <div className="gray_box" />
                <div className="box1">
                  서울버스 외부 광고
                  <FontAwesomeIcon className="box1_icon" icon={faAngleRight} />
                  <br />
                  <span className="text3">광고비</span>
                  <span className="text1"> 400,000원~7,000,000원</span>
                </div>
                <div className="box2"><span className="text2">상담 신청</span></div>
                <div className="box3"><span className="text2">진행 신청</span></div>
              </article>
              <article>
                <div className="gray_box" />
                <div className="box1">
                  버스 출입문 광고
                  <FontAwesomeIcon className="box1_icon" icon={faAngleRight} />
                  <br />
                  <span className="text3">광고비</span>
                  <span className="text1"> 400,000원~7,000,000원</span>
                </div>
                <div className="box2"><span className="text2">상담 신청</span></div>
                <div className="box3"><span className="text2">진행 신청</span></div>
              </article>
              <article>
                <div className="gray_box" />
                <div className="box1">
                  마을버스 외부 광고
                  <FontAwesomeIcon className="box1_icon" icon={faAngleRight} />
                  <br />
                  <span className="text3">광고비</span>
                  <span className="text1"> 400,000원~7,000,000원</span>
                </div>
                <div className="box2"><span className="text2">상담 신청</span></div>
                <div className="box3"><span className="text2">진행 신청</span></div>
              </article>
            </div>
            <div className="wrap5">
              <div className="text">인기상품</div>
              <article>
                <div className="gray_box" />
                <div className="box1">
                  버스 정류장 광고
                  <FontAwesomeIcon className="box1_icon" icon={faAngleRight} />
                  <br />
                  <span className="text3">광고비</span>
                  <span className="text1"> 400,000원~7,000,000원</span>
                </div>
                <div className="box2"><span className="text2">상담 신청</span></div>
                <div className="box3"><span className="text2">진행 신청</span></div>
              </article>
              <article>
                <div className="gray_box" />
                <div className="box1">
                  아파트 엘리베이터 광고
                  <FontAwesomeIcon className="box1_icon" icon={faAngleRight} />
                  <br />
                  <span className="text3">광고비</span>
                  <span className="text1"> 400,000원~7,000,000원</span>
                </div>
                <div className="box2"><span className="text2">상담 신청</span></div>
                <div className="box3"><span className="text2">진행 신청</span></div>
              </article>
              <article>
                <div className="gray_box" />
                <div className="box1">
                  대형마트 광고
                  <FontAwesomeIcon className="box1_icon" icon={faAngleRight} />
                  <br />
                  <span className="text3">광고비</span>
                  <span className="text1"> 400,000원~7,000,000원</span>
                </div>
                <div className="box2"><span className="text2">상담 신청</span></div>
                <div className="box3"><span className="text2">진행 신청</span></div>
              </article>
            </div>
          </div>
        </section>
      </div>
    
    )
}