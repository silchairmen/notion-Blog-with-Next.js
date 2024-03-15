import { Metadata } from "next";
import Link from "next/link";

export const metadata : Metadata = {
    title : "About Jalnik",
    description : "Main homepage"
  
  }


export default function Introduce() {


    return (
        <div className="flex flex-col items-center min-h-screen px-5 mb-5">
            <div className="grid-cols-2 items-center">
                
                <div className="mb-10">
                    <p className="text-left mb-8 mt-20 font-mono text-white">
                        Hi! 반갑습니다.<br/>
                        제 블로그는 제 소소한 일상과 정보보안에 대하여 기록하는 블로그 입니다.<br/>
                        Lecture 처럼 목록화하여 천천히 공부할 수 있게 분류도 해놓았기 때문에. 도움이 많이 되었으면 좋겠습니다.<br/>
                        이외에 블로그에 대하여 피드백 주시거나 블로그에 오류가 있다면 <span>Email</span>로 연락 주시면 감사하겠습니다.
                    </p>
                    <div>
                        <h1 className="mb-4 pb-2 border-b border-gray-300 text-3xl text-orange-500 font-bold mt-10">🤠 About me</h1>
                        <p className="text-left mb-8 text-white">
                            🏫 우석대학교 정보보안학과 학사 과정<br />
                            👨‍🏫 KITRI BoB (Best of the Best) 11th <br />
                            👑 Information security club SOTI 1th leader <br />
                            🤠 Interested in penetration testing.
                        </p>
                    </div>
                    <h1 className="mb-4 pb-2 border-b border-gray-300 text-3xl text-yellow-400 font-bold mt-20">🏆 Awards</h1>
                    <p className="mb-8 text-white">
                        2022 한국교통안전공단 웹 취약점 분석 대회(일반부) 장려상 <br/>
                        2023 우리은행 모의해킹 경진대회 장려상 <br/>
                        2023 호남 침해대응 분석/경진대회 최우수상 <br/>
                        2023 호남 웹 취약점 분석 경진대회 장려상 <br/>
                        2023 한국교통안전공단 웹 취약점 분석 대회(일반부) 장려상 <br/>
                        2023 파인더갭 X-MAS 버그바운티 경진대회 우수상 <br />
                    </p>
                    <h1 className="mb-4 pb-2 border-b border-gray-300 text-3xl text-blue-400 font-bold mt-20">😗 Activity</h1>
                    <p>
                        <Link className="text-white font-mono hover:text-yellow-400" href="https://github.com/silchairmen/">😽 Github</Link><br/>
                        <Link className="text-white font-mono hover:text-yellow-400" href="https://dreamhack.io/users/10963">🚀 Dreamhack</Link>
                    </p>
                </div>
            </div>
        </div>


    );
}