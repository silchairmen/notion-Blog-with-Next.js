export const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID
export const NOTION_TOKEN = process.env.NOTION_TOKEN


const { Client } = require('@notionhq/client');


// 지금까지 작성된 블로그 글의 개수를 화면에 표시하는 역할을 수행합니다.
const notion = new Client({ auth: NOTION_TOKEN });
   

// 현재 db에 저장되어 있는 문서 갯수를 가져옴
export async function GetPostCount() {
    const posts = await notion.databases.query({
        database_id: NOTION_DATABASE_ID
    })


    return posts['results'].length;
}

// page size를 기준으로 최신의 글을 가져옴
export async function GetRecentPosts(pages: number) {
    const posts = await notion.databases.query({
        database_id: NOTION_DATABASE_ID
    })


    return posts;
}


export async function GetPostId(id: string){
    const title = decodeURIComponent(id)
    const post = await notion.databases.query({
        database_id: NOTION_DATABASE_ID,
        filter: {
            property: "이름",
            title: {
                equals: title
            }
        }
    })
    return post.results[0]?.id ?? null
}

/**
 * 페이지 정보를 return하는 함수
 * @param 글 이름
 * @returns 정보를 return 함
 */
export async function GetPostInfo(id: string){
    const info = await notion.pages.retrieve({page_id: id})
    return info
}


/**
 * 모든 docs를 returng하도록 하는 함수
 * @param none
 * @returns all docs list 
 * @todo 30개씩 렌더링 하도록 변경하기
 */
export async function GetAllDocs(search: any){

    //base는 모든 요소 찾기
    const baseQuery: any = {
        database_id: NOTION_DATABASE_ID,
        sorts: [
          {
          property: "생성일",
          direction: "descending",
          },
        ],
    };

    const searchName = search.searchParams.search;

    if (searchName) {
        baseQuery.filter = {
            or: [
                {
                    property: "이름",
                    title: {
                        contains: searchName
                    }
                },
                {
                    property: "태그",
                    multi_select: {
                        contains: searchName
                    }
                },
            ]
        };
    }

    const posts = await notion.databases.query(baseQuery);


    return posts;
}

/**
 * 강좌 목록인 것만 리스트업하여 
 * lecture | LectureCatregory - LectureName 형식의 포멧으로
 * property에서 Lecture 속성을 가져와서 "-" 로 파싱하여 구분지어야 함.
 */
export async function GetLectureList() {
    const baseQuery = {
        database_id: NOTION_DATABASE_ID,
        filter: {
            property: "Lecture",
            rich_text: {
                is_not_empty: true
            }
        }
    }

    const posts = await notion.databases.query(baseQuery);

    let lectureDict = {}


    posts.results.map((post: any) => {
        let majorLecture = post.properties.Lecture.rich_text[0].plain_text;
        let subLecture = post.properties.LectureName.rich_text[0].plain_text;

        
        //이미 있는 대제목일 경우
        if (Object.keys(lectureDict).includes(majorLecture)){
            
            //대제목의 하위 노드(배열)에 소제목이 없을 경우
            if(!lectureDict[majorLecture].includes(subLecture))
                lectureDict[majorLecture].push(subLecture)

        //대제목이 존재하지 않을 경우 대제목과 안에있는 소제목을 추가함
        }
        else{
            lectureDict[majorLecture] = [subLecture]
        }
    });

    return lectureDict;
}

export async function GetSubLectureList(LectureName:string) {
    const baseQuery = {
        database_id: NOTION_DATABASE_ID,
        filter: {
            property: "LectureName",
            rich_text: {
                equals: LectureName
            }
        }
    }

    
    const posts = await notion.databases.query(baseQuery);

    
    return posts;
}